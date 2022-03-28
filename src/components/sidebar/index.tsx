import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { Container } from "@/components/sidebar/sidebarWrapper";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useApi } from "@/hooks/useApi";
import SongContext from "@/context/playlist";

export default function Sidebar() {
  const { data: session } = useSession();
  const [userPlaylists, setUserPlaylists] = useState<any[]>([]);
  const { setPlaylistId } = useContext(SongContext);

  useEffect(() => {
    const spotifyApi = new useApi().connectSpotify(session);
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(({ body }) => {
        setUserPlaylists(body.items);
      });
    }
  }, [session]);

  return (
    <Container>
      <button>
        <HomeIcon className="icons" />
        <span>Home</span>
      </button>
      <button>
        <SearchIcon className="icons" />
        <span>Search</span>
      </button>
      <button>
        <LibraryIcon className="icons" />
        <span>Your Library</span>
      </button>
      <button>
        <HeartIcon className="icons" />
        <span>Liked Songs</span>
      </button>
      <hr />
      {userPlaylists &&
        userPlaylists.map((userPlaylist) => (
          <p
            onClick={() => setPlaylistId(userPlaylist.id)}
            key={userPlaylist.id}
          >
            {userPlaylist.name}
          </p>
        ))}
    </Container>
  );
}
