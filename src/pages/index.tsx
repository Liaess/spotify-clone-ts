import styled from "styled-components";
import Logo from "@/assets/Icon.png";
import { getProviders, signIn } from "next-auth/react";
import React from "react";
import { SpotifyProvider } from "@/types/providers/spotify";

export default function IndexPage({ spotify }: SpotifyProvider) {
  async function handleLogin(e: React.MouseEvent) {
    e.preventDefault();
    await signIn(spotify.id, { callbackUrl: "/music" });
  }

  return (
    <Main>
      <img src={Logo.src} alt="Spotify Logo"></img>
      <button onClick={(e) => handleLogin(e)}>Login with Spotify</button>
    </Main>
  );
}

export async function getServerSideProps() {
  const { spotify }: any = await getProviders();
  return {
    props: {
      spotify,
    },
  };
}

const Main = styled.main`
  background-color: var(--main-background-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  img {
    width: 11rem;
    padding-bottom: 1rem;
  }
  button {
    background-color: var(--main-login-button-color);
    border: none;
    outline: none;
    padding: 1.5rem;
    border-radius: 15px;
    cursor: pointer;
    font-weight: bold;
  }
`;
