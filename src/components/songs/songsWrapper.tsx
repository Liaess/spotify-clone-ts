import styled from "styled-components";

interface ContainerProps {
  isPlaying: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding-top: 20px;
  padding-bottom: ${({ isPlaying }) =>
    isPlaying ? "90px" : "0px"};
`;
