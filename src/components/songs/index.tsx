import { PageProps } from "@/types/pageProps";
import styled from "styled-components";
import Song from "../song";

export default function Songs({ playlistInfomation }: PageProps) {
  return (
    <Container>
      <Filters>
        <p>#</p>
        <p>TITLE</p>
        <p>ALBUM</p>
        <p>DATE ADDED</p>
        <p>***</p>
      </Filters>
      {playlistInfomation?.tracks.items.map((track, index) => (
        <Song key={track.track.id} {...track} counter={index} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding-top: 20px;
`;

const Filters = styled.div`
  display: flex;
`;
