import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 90px;
  display: flex;
  color: var(--white-color);
  background-color: var(--main-background-color);
  border-top: 1px solid var(--secundary-background-color);
`;

export const PlayerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  .empty {
    min-width: 300px;
  }
  .icons {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 7px;
    cursor: pointer;
    :hover {
      transform: scale(1.25);
      transition: all 100ms ease-in-out;
    }
  }
  .big-icons {
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 7px;
    cursor: pointer;
    :hover {
      transform: scale(1.25);
      transition: all 100ms ease-in-out;
    }
  }
`;

export const LeftControls = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 100px;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 100px;
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
  img {
    display: none;
  }
  @media (min-width: 768px) {
    min-width: 300px;
    padding-left: 20px;
    img {
      display: block;
    }
  }
  @media(max-width: 480px) {
    min-width: 100px;
  }
`;

export const CenterControls = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  input {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
    gap: 0px;
    input {
      display: block;
    }
  }
  @media(min-width: 480px) {
    padding-right: 20px;
    gap: 20px;
  }
`;
