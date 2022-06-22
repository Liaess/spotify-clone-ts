import SongContext from "@/context/playlist";
import { useApi } from "@/hooks/useApi";
import { PlaylistTrack } from "@/types/pageProps";
import { singleDurationToMilliseconds } from "@/utils/time";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { toast } from "react-toastify";
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
  const { setCurrentTrackId, setIsPlaying, setCurrentSongInformation } =
    useContext(SongContext);

  function playSong() {
    setIsPlaying(true);
    setCurrentTrackId(track.id);
    const spotifyApi = new useApi().connectSpotify(session);
    spotifyApi
      .getMyDevices()
      .then(({ body }) => {
        body.devices.forEach((device) => {
          if (device.is_active && spotifyApi.getAccessToken()) {
            spotifyApi.play({
              uris: [track.uri],
            });
            setCurrentSongInformation(track);
          }
        });
      })
      .catch((_err) => {
        toast("This app just help you, make sure to have a device playing!");
      });
  }

  return (
    <Container onDoubleClick={playSong}>
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
