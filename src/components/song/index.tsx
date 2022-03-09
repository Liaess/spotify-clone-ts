import { PlaylistTrack } from "@/types/pageProps";
import styled from "styled-components";

export default function Song({ track, counter }: PlaylistTrack) {
  return (
    <Container>
      <p>{counter + 1}</p>
      <img src={track.album.images[0].url} alt="album-logo" />
      <DescriptionHolder>
        <p>{track.name}</p>
        <ArtistHolder>
          {track.artists.map((artist, index) => {
            if (index + 1 === track.artists.length) {
              return <p key={artist.id}>{artist.name}</p>;
            } else {
              return <p key={artist.id}>{artist.name},</p>;
            }
          })}
        </ArtistHolder>
      </DescriptionHolder>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  gap: 14px;
  border-radius: 3px;
  cursor: default;
  img {
    width: 50px;
    height: 50px;
  }
  :hover {
    background-color: var(--secundary-background-color);
    p {
      color: var(--white-color);
    }
  }
`;

const DescriptionHolder = styled.div``;

const ArtistHolder = styled.div`
  display: flex;
  p {
    padding-top: 4px;
    font-size: 0.9rem;
    color: lightgray;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
