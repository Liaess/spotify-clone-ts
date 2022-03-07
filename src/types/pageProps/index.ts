/* global SpotifyApi */
import "spotify-web-api-node";

export interface SinglePlaylistResponse
  extends SpotifyApi.SinglePlaylistResponse {}

export interface PlaylistTrack extends SpotifyApi.PlaylistTrackObject {
  counter: number;
}

export interface PageProps {
  playlistInfomation?: SinglePlaylistResponse | null;
}
