import React, { createContext } from "react";
import { ChildrenProps } from "@/types/context/children";
import { IPlaylistContext } from "@/types/context/playlist";
import useLocalStorage from "@/hooks/useLocalStorage";

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
