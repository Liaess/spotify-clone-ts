import Sidebar from "@/components/sidebar";
import Home from "@/components/home";
import { Main, Container } from "@/styles/music";
import { getSession } from "next-auth/react";

export default function MainPage() {
  return (
    <Main>
      <Container>
        <Sidebar />
        <Home />
      </Container>
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
