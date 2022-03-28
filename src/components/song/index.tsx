import SongContext from "@/context/playlist";
import { useApi } from "@/hooks/useApi";
import { PlaylistTrack } from "@/types/pageProps";
import { singleDurationToMilliseconds } from "@/utils/time";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useContext } from "react";
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
  const { data: session } = useSession();
  const { setCurrentTrackId, setIsPlaying } = useContext(SongContext);
  
  function playSong() {
    setIsPlaying(true);
    setCurrentTrackId(track.id);
    const spotifyApi = new useApi().connectSpotify(session);
    if (spotifyApi.getAccessToken()) {
      spotifyApi.play({
        uris: [track.uri],
      });
    }
  }

  return (
    <Container onClick={playSong}>
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
