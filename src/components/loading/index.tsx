import { TailSpin } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
  return (
    <>
      <Container>
        <TailSpin color="var(--white-color)" height={100} width={100} />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
