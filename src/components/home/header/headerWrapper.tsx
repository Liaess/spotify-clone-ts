import styled from "styled-components";

export const Container = styled.div`
  header {
    position: absolute;
    right: 0;
  }
`;

export const UserInfomation = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  :hover {
    opacity: 80%;
    cursor: pointer;
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .icons {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 7px;
  }
`;
