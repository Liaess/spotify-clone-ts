export interface ISongContext {
  playlistId: string;
  setPlaylistId: Function;
  currentTrackId: string | null;
  setCurrentTrackId: Function;
  isPlaying: boolean;
  setIsPlaying: Function;
}
