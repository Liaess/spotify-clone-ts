//@ts-nocheck
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
import useSongInfo from "@/hooks/useSongInfo";
import { delay } from "@/utils/delay";
import { CurrentSong } from "@/types/pageProps";

export default function Player() {
  const { data: session } = useSession();
  const [volume, setVolume] = useState<number>(30);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const { isPlaying, setIsPlaying } = useContext(SongContext);
  const spotifyApi = new useApi().connectSpotify(session);
  const { songInfo: currentSongInfomation, fetchSongInfo } = useSongInfo();
  const [currentSong, setCurrentSong] = useState<CurrentSong | null>(
    currentSongInfomation
  );

  useEffect(() => {
    if (!currentSongInfomation) return;
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (!body) {
        return;
      }
    });
    setCurrentSong(currentSongInfomation);
    const interval = setTimeout(() => {
      const newSong = fetchSongInfo();
      setCurrentSong(newSong);
    }, currentSongInfomation?.item.duration_ms - currentSongInfomation?.progress_ms + 1000);
    return () => clearTimeout(interval);
  }, [currentSongInfomation, fetchSongInfo, spotifyApi]);

  function toggleSong() {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body?.is_playing && isPlaying) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else if (!body?.is_playing && body?.device?.is_active) {
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
      } else if (!body?.shuffle_state && body?.device?.is_active) {
        spotifyApi.setShuffle(true);
        setIsShuffle(true);
      }
    });
  }

  function skipToNext() {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body?.is_playing) {
        spotifyApi.skipToNext();
        delay(1500).then(() => {
          const newSong = fetchSongInfo();
          setCurrentSong(() => newSong);
        });
      }
    });
  }

  function skipToPrevious() {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body?.is_playing) {
        spotifyApi.skipToPrevious();
        delay(1500).then(() => {
          const newSong = fetchSongInfo();
          setCurrentSong(() => newSong);
        });
      }
    });
  }

  useEffect(() => {
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      if (body?.is_playing) {
        setIsShuffle(body?.shuffle_state);
      }
    });
  }, [spotifyApi]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const adjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume);
    }, 500),
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
        {currentSong === null ? (
          <div className="empty"></div>
        ) : (
          <LeftControls>
            <img
              src={currentSong?.item?.album?.images[2]?.url}
              alt="currentSongPicture"
            />
            <div>
              <p>{currentSong?.item?.name}</p>
              <p>{currentSong?.item?.artists[0]?.name}</p>
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
          <VolumeOffIcon className="icons" />
          <input
            type="range"
            onChange={(event) => setVolume(Number(event.target.value))}
            value={volume}
            min={0}
            max={100}
          />
          <VolumeUpIcon className="icons" />
        </RightControls>
      </PlayerContainer>
    </Container>
  );
}
