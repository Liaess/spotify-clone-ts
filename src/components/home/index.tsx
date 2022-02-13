import styled from "styled-components";
import Header from "./header";

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  flex-grow: 1;
  color: var(--white-color);
  header {
    margin-top: 15px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`;
