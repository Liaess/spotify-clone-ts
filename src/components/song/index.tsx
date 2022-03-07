import { PlaylistTrack } from "@/types/pageProps";

export default function Song({ track, counter }: PlaylistTrack) {
  return (
    <div>
      <p>
        {counter + 1} {track.name}
      </p>
    </div>
  );
}
