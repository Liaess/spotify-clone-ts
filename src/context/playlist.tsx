import React, { createContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ChildrenProps, IPlaylistContext } from "@/types/context";

const PlaylistContext = createContext({} as IPlaylistContext);

function PlaylistProvider({ children }: ChildrenProps) {
  const [playlistId, setPlaylistId] = useLocalStorage("playlistId", null);

  return (
    <PlaylistContext.Provider value={{ playlistId, setPlaylistId }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistContext;

export { PlaylistProvider };
