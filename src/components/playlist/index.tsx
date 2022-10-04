import { PageProps } from "@/types/pageProps";
import Song from "../song";
import styled from "styled-components";
import Header from "./header";

export default function Playlist({ playlistInfomation }: PageProps) {
  return (
    <Container>
      <Header playlistInfomation={playlistInfomation} />
      {playlistInfomation?.tracks.items.map((track, index) => (
        <Song
          key={track?.track.id}
          {...track}
          counter={index}
          allSongs={playlistInfomation?.tracks.items}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 90px;
`;
