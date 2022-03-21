import { PlaylistTrack } from "@/types/pageProps";
import { singleDurationToMilliseconds } from "@/utils/time";
import moment from "moment";
import {
  Container,
  ImageHolder,
  DescriptionHolder,
  ArtistHolder,
  AlbumHolder,
  AddedHolder,
  DurationHolder,
} from "./songWrapper";

export default function Song({ track, counter, added_at }: PlaylistTrack) {
  return (
    <Container>
      <ImageHolder>
        <span>{counter + 1}</span>
        <img src={track.album.images[0].url} alt="album-logo" />
        <DescriptionHolder>
          <p>{track.name}</p>
          <ArtistHolder>
            {track.artists.map((artist, index) => {
              if (index + 1 === track.artists.length) {
                return <p key={artist.id}>{artist.name}</p>;
              }
              return <p key={artist.id}>{artist.name},</p>;
            })}
          </ArtistHolder>
        </DescriptionHolder>
      </ImageHolder>
      <AlbumHolder>
        <p>{track.album.name}</p>
      </AlbumHolder>
      <AddedHolder>
        <p>{moment(added_at).format("MMM DD, YYYY")}</p>
      </AddedHolder>
      <DurationHolder>
        <p>{singleDurationToMilliseconds(track.duration_ms)}</p>
      </DurationHolder>
    </Container>
  );
}
