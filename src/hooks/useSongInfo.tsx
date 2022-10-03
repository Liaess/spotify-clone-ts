import SongContext from "@/context/playlist";
import { CurrentSong } from "@/types/pageProps";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { useApi } from "./useApi";

export default function useSongInfo() {
  const { data: session } = useSession();
  const { currentTrackId, setIsPlaying } = useContext(SongContext);
  const [songInfo, setSongInfo] = useState<CurrentSong | null>(null);

  function fetchSongInfo() {
    const spotifyApi = new useApi().connectSpotify(session);
    spotifyApi.getMyCurrentPlayingTrack().then(({ body }) => {
      setSongInfo(body);
    });
    spotifyApi.getMyCurrentPlaybackState().then(({ body }) => {
      setIsPlaying(body?.is_playing);
    });
  }

  useEffect(() => {
    fetchSongInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackId, session, setIsPlaying]);

  return songInfo;
}
