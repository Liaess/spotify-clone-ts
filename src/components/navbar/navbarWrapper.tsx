import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 20px;
  right: 30px;
  color: var(--white-color);
`;

export const UserInfomation = styled.div`
  background-color: var(--main-sidebar-color);
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
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
