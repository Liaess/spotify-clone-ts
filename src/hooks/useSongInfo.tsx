import SongContext from "@/context/playlist";
import { CurrentSong } from "@/types/pageProps";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { useApi } from "./useApi";

export default function useSongInfo() {
  const { data: session } = useSession();
  const { currentTrackId, setIsPlaying } = useContext(SongContext);
  const [songInfo, setSongInfo] = useState<CurrentSong | null>(null);

  useEffect(() => {
    const spotifyApi = new useApi().connectSpotify(session);
    const response = spotifyApi.getMyCurrentPlayingTrack();
    response.then(({ body }) => {
      setSongInfo(body);
      setIsPlaying(true);
    });
  }, [currentTrackId, session, setIsPlaying]);

  return songInfo;
}
