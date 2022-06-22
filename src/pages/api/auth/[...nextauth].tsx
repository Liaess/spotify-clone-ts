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
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 100,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
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
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
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
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          user,
        };
      }

      if (Math.trunc(Date.now() / 1000) < token.accessTokenExpires) {
        return token;
      }

      return refreshAcessToken(token);
    },
    async session({ session, token }) {
      //@ts-ignore
      session.user.username = token.username;
      //@ts-ignore
      session.user.accessToken = token.accessToken;
      //@ts-ignore
      session.user.refreshToken = token.refreshToken;

      return session;
    },
  },
});
