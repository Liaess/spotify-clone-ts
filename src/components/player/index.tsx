import SongContext from "@/context/playlist";
import { useContext } from "react";
import styled from "styled-components";

export default function Player() {
  const { currentSongInfomation } = useContext(SongContext);
  console.log(currentSongInfomation);

  return (
    <Container>
      <PlayerContainer>
        <LeftControls>
          <img
            src={currentSongInfomation?.album.images[2].url}
            alt="currentSongPicture"
          />
          <div>
            <p>{currentSongInfomation?.name}</p>
            <p>{currentSongInfomation?.artists[0].name}</p>
          </div>
        </LeftControls>
      </PlayerContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 90px;
  color: var(--white-color);
  background-color: var(--main-background-color);
  border-top: 1px solid var(--secundary-background-color);
`;

const PlayerContainer = styled.div`
  height: 100%;
  justify-content: space-evenly;
`;

const LeftControls = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      margin-left: 10px;
      cursor: pointer;
      font-size: 0.875rem;
      :hover {
        text-decoration: underline;
      }
    }
    p:last-child {
      margin-top: 3px;
      color: var(--main-font-color);
    }
  }
`;
