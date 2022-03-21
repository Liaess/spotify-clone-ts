import { spotifyApi } from "@/pages/api/spotify";
import { signIn } from "next-auth/react";

export class useApi {
  public connectSpotify(session: any) {
    if (session) {
      if (session.error === "RefreshTokenError") {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
    return spotifyApi;
  }
}
