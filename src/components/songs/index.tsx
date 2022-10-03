import SongContext from "@/context/playlist";
import { PageProps } from "@/types/pageProps";
import { useContext } from "react";
import Song from "../song";
import { Container } from "./songsWrapper";

export default function Songs({ playlistInfomation }: PageProps) {
  const { isPlaying } = useContext(SongContext);

  return (
    <Container isPlaying={isPlaying}>
      {playlistInfomation?.tracks.items.map((track, index) => (
        <Song key={track?.track.id} {...track} counter={index} />
      ))}
    </Container>
  );
}
