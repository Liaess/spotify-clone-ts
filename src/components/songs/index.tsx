import { PageProps } from "@/types/pageProps";
import Song from "../song";
import { Container } from "./songsWrapper";

export default function Songs({ playlistInfomation }: PageProps) {
  return (
    <Container>
      {playlistInfomation?.tracks.items.map((track, index) => (
        <Song key={track?.track.id} {...track} counter={index} />
      ))}
    </Container>
  );
}
