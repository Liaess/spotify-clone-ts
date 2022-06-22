import styled from "styled-components";

interface ContainerProps {
  currentSongInfomation: object;
}

export const Container = styled.div<ContainerProps>`
  padding-top: 20px;
  padding-bottom: ${({ currentSongInfomation }) =>
    currentSongInfomation ? "90px" : "0px"};
`;
