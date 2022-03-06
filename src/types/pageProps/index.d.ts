/* global SpotifyApi */
import "spotify-web-api-node";

export interface SinglePlaylistResponse extends SpotifyApi.SinglePlaylistResponse {}

export interface HeaderProps {
  playlistInfomation?: SinglePlaylistResponse | null;
}
