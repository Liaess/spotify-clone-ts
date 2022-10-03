//@ts-nocheck
import { PlayerProps } from "@/types/pageProps";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  Container,
  LeftControls,
  PlayerContainer,
  CenterControls,
  RightControls,
} from "./playerWrapper";
import {
  PlayIcon,
  PauseIcon,
  FastForwardIcon,
  ReplyIcon,
  RewindIcon,
  SwitchHorizontalIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from "@heroicons/react/solid";
import { debounce } from "lodash";
import SongContext from "@/context/playlist";
import { useApi } from "@/hooks/useApi";
import { useSession } from "next-auth/react";

export default function Player({ currentSongInfomation }: PlayerProps) {
  const { data: session } = useSession();
  const [volume, setVolume] = useState(50);
  const [isShuffle, setIsShuffle] = useState(false);
  const { isPlaying, setIsPlaying } = useContext(SongContext);
  const spotifyApi = new useApi().connectSpotify(session);

  function toggleSong() {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body?.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  }

  function toggleShuffle() {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body?.shuffle_state) {
        spotifyApi.setShuffle(false);
        setIsShuffle(false);
      }
    });
  }

  function skipToNext() {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body.is_playing) {
        spotifyApi.skipToNext();
      }
    });
  }

  function skipToPrevious() {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body.is_playing) {
        spotifyApi.skipToPrevious();
      }
    });
  }

  useEffect(() => {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      setIsShuffle(body?.shuffle_state);
    });
  }, [spotifyApi]);

  useEffect(() => {
    if (volume > 100) setVolume(100);
    if (volume < 0) setVolume(0);
  }, [volume]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const adjustVolume = useCallback( 
    debounce((volume) => {
      spotifyApi.setVolume(volume);
    }, 1000),
    []
  );

  useEffect(() => {
    if (!isPlaying) return;
    if (volume > 0 && volume < 100) {
      adjustVolume(volume);
    }
  }, [adjustVolume, isPlaying, volume]);

  return (
    <Container>
      <PlayerContainer>
        {currentSongInfomation === null ? (
          <div className="empty"></div>
        ) : (
          <LeftControls>
            <img
              src={currentSongInfomation?.item?.album?.images[2]?.url}
              alt="currentSongPicture"
            />
            <div>
              <p>{currentSongInfomation?.item?.name}</p>
              <p>{currentSongInfomation?.item?.artists[0]?.name}</p>
            </div>
          </LeftControls>
        )}
        <CenterControls>
          <SwitchHorizontalIcon
            onClick={toggleShuffle}
            className="icons"
            color={
              isShuffle
                ? "var(--main-login-button-color)"
                : "var(--white-color)"
            }
          />
          <RewindIcon onClick={skipToPrevious} className="icons" />
          {isPlaying ? (
            <PauseIcon onClick={toggleSong} className="big-icons" />
          ) : (
            <PlayIcon onClick={toggleSong} className="big-icons" />
          )}
          <FastForwardIcon onClick={skipToNext} className="icons" />
          <ReplyIcon className="icons" />
        </CenterControls>
        <RightControls>
          <VolumeOffIcon
            onClick={() => volume > 0 && setVolume(Number(volume - 10))}
            className="icons"
          />
          <input
            type="range"
            onChange={(event) => setVolume(Number(event.target.value))}
            value={volume}
            min={0}
            max={100}
          />
          <VolumeUpIcon
            onClick={() => volume < 100 && setVolume(Number(volume + 10))}
            className="icons"
          />
        </RightControls>
      </PlayerContainer>
    </Container>
  );
}
