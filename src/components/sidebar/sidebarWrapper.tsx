import styled from "styled-components";

export const Container = styled.div`
  max-width: 12rem;
  min-height: 100vh;
  height: 100vh;
  display: none;
  position: fixed;
  padding: 1.25rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: var(--main-font-color);
  overflow-y: scroll;
  background-color: var(--main-sidebar-color);
  border-right: 1px solid var(--secundary-background-color);
  ::-webkit-scrollbar {
    display: none;
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: inherit;
    width: 100%;
    padding-top: 1.25rem;
    cursor: pointer;
    :hover {
      color: var(--white-color);
    }
    .icons {
      height: 1.25rem;
      width: 1.25rem;
    }
    span {
      padding-left: 7px;
    }
  }
  hr {
    border-top: 0.1px solid var(--secundary-background-color);
    border-bottom: none;
    border-right: none;
    border-left: none;
    margin-top: 1rem;
  }
  p {
    padding-left: 10px;
    margin-top: 1rem;
    cursor: pointer;
    :hover {
      color: var(--white-color);
    }
  }
  @media (min-width: 768px) {
    display: inline;
  }
  @media (min-width: 1024px) {
    font-size: 0.875rem;
    min-width: 15rem;
  }
`;
