/* global SpotifyApi */
import "spotify-web-api-node";

export interface ISongContext {
  playlistId: string;
  setPlaylistId: Function;
  currentTrackId: string;
  setCurrentTrackId: Function;
  isPlaying: boolean;
  setIsPlaying: Function;
  currentSongInfomation: SpotifyApi.TrackObjectFull | null;
  setCurrentSongInformation: Function;
}
