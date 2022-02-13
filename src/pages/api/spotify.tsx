import SpotifyWebApi from "spotify-web-api-node";

export const scope = [
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
].join(",");

export const NEXT_LOGIN_URL = "https://accounts.spotify.com/authorize";

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});
