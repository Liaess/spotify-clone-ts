export interface ISongContext {
  playlistId: string;
  setPlaylistId: Function;
  currentTrackId: string;
  setCurrentTrackId: Function;
  isPlaying: boolean;
  setIsPlaying: Function;
}
