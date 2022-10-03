import React, { createContext, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ChildrenProps, ISongContext } from "@/types/context";

const SongContext = createContext({} as ISongContext);

function SongProvider({ children }: ChildrenProps) {
  const [playlistId, setPlaylistId] = useLocalStorage("playlistId", null);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <SongContext.Provider
      value={{
        playlistId,
        setPlaylistId,
        currentTrackId,
        setCurrentTrackId,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}

export default SongContext;

export { SongProvider };
