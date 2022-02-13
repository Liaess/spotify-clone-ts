import Sidebar from "@/components/sidebar";
import { Main, Container } from "@/pages/music/musicWrapper";

export default function MainPage() {
  return (
    <Main>
      <Container>
        <Sidebar />
      </Container>
    </Main>
  );
}
