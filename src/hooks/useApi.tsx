import { spotifyApi } from "@/pages/api/spotify";

export class useApi {
  public connectSpotify(session: any) {
    if (session) {
      spotifyApi.setAccessToken(session.user.accessToken);
    }
    return spotifyApi;
  }
}
