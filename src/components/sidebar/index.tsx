import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { Container } from "@/components/sidebar/sidebarWrapper";

export default function Sidebar() {
  return (
    <>
      <Container>
        <button>
          <HomeIcon className="icons" />
          <p>Home</p>
        </button>
        <button>
          <SearchIcon className="icons" />
          <p>Search</p>
        </button>
        <button>
          <LibraryIcon className="icons" />
          <p>Your Library</p>
        </button>
        <button>
          <HeartIcon className="icons" />
          <p>Liked Songs</p>
        </button>
        <hr />
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
        <p>Playlist name...</p>
      </Container>
    </>
  );
}
