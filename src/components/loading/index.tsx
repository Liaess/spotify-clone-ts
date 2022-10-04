import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading({ height, width }:{ height: number, width: number }) {
  return (
    <>
      <Container>
        <TailSpin color="var(--white-color)" height={height} width={width} />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 12rem;
  @media (min-width: 1024px) {
    padding-left: 15rem;
  }
  @media (max-width: 768px) {
    padding-left: 0rem;
  }
`;
