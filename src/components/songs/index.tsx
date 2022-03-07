import { PageProps } from "@/types/pageProps";
import styled from "styled-components";
import Song from "../song";

export default function Songs({ playlistInfomation }: PageProps) {
  return (
    <Container>
      {playlistInfomation?.tracks.items.map((track, index) => (
        <Song key={track.track.id} {...track} counter={index} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  color: red;
`;
