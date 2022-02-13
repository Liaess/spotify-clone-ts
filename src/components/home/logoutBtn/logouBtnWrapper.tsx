import styled from "styled-components";

export const ButtonHolder = styled.div`
  margin-top: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white-color);
  border-radius: 5px;
  background-color: var(--secundary-background-color);
  div {
    cursor: pointer;
    p {
      padding: 10px 10px;
    }
  }
`;
