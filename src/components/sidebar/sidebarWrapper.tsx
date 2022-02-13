import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--main-font-color);
  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--main-background-color);
    width: 100%;
    .icons {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
  hr {
    border-top: 0.1px solid #111827;
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
`;
