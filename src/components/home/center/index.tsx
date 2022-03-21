import Songs from "@/components/songs";
import styled from "styled-components";
import { PageProps } from "@/types/pageProps";

export default function Center({ playlistInfomation }: PageProps) {
  return (
    <Container>
      <Songs playlistInfomation={playlistInfomation} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0px 20px;
`;
