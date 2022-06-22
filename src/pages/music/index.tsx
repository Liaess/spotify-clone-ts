import Sidebar from "@/components/sidebar";
import Home from "@/components/home";
import { Main, Container } from "@/styles/music";
import { getSession } from "next-auth/react";
import Player from "@/components/player";
import { useContext } from "react";
import SongContext from "@/context/playlist";

export default function MainPage() {
  const { currentSongInfomation } = useContext(SongContext);

  return (
    <Main>
      <Container>
        <Sidebar />
        <Home />
      </Container>
      {currentSongInfomation && <Player />}
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
