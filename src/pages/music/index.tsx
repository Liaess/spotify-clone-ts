import Sidebar from "@/components/sidebar";
import Home from "@/components/home";
import { Main, Container } from "@/styles/music";
import { getSession } from "next-auth/react";
import Player from "@/components/player";

export default function MainPage() {
  return (
    <Main>
      <Container>
        <Sidebar />
        <Home />
      </Container>
      <Player />
    </Main>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
