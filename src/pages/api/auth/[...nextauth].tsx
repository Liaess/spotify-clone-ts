import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { NEXT_LOGIN_URL, scope, spotifyApi } from "../spotify";

async function refreshAcessToken(token: any) {
  try {
    spotifyApi.setAccessToken(token.acessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      tokenExpiresAt: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (err) {
    console.log(err);

    return {
      ...token,
      errorMessage: "RefreshTokenError",
    };
  }
}

export default NextAuth({
  providers: [
    SpotifyProvider({
      //@ts-ignore
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: {
        url: NEXT_LOGIN_URL,
        params: {
          scope,
        },
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    //@ts-ignore
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          tokenExpiresAt: account.expires_at! * 1000,
          username: account.providerAccountId,
        };
      }
      //@ts-ignore
      if (Date.now() < token.tokenExpiresAt) {
        return token;
      }

      return refreshAcessToken(token);
    },
  },
});
