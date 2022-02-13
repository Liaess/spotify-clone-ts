import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { Container } from "@/components/sidebar/sidebarWrapper";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useApi } from "@/hooks/useApi";

export default function Sidebar() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState<any[]>([]);

  useEffect(() => {
    const spotifyApi = new useApi().connectSpotify(session);
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then(({ body }) => {
        //@ts-ignore
        setPlaylists(body.items);
      });
    }
  }, [session]);

  return (
    <>
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
        {playlists &&
          playlists.map((playlist) => <p key={playlist.id}>{playlist.name}</p>)}
      </Container>
    </>
  );
}
