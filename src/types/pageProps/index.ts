/* global SpotifyApi */
import "spotify-web-api-node";

export interface SinglePlaylistResponse
  extends SpotifyApi.SinglePlaylistResponse {}

export interface PlaylistTrack extends SpotifyApi.PlaylistTrackObject {
  added_at: string;
  counter: number;
  allSongs: SpotifyApi.PlaylistTrackObject[];
}

export interface PageProps {
  playlistInfomation?: SinglePlaylistResponse | null;
  currentSongInfomation?: CurrentSong | null;
}

// export interface PlayerProps {
//   currentSongInfomation?: CurrentSong | null;
//   fetchSongInfo: Function;
// }

export interface CurrentSong extends SpotifyApi.CurrentlyPlayingObject {}
