import Sidebar from "@/components/sidebar";
import Home from "@/components/home";
import { Main, Container } from "@/styles/music";

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
