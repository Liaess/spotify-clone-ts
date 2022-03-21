import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) =>
    `linear-gradient(0deg, rgba(0,0,0,0.9472163865546218) 6%, rgba(0,3,3,0.7987570028011204) 37%, #${props.color} 100%)`};
  header {
    position: absolute;
    right: 0;
  }
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

export const TitleHolder = styled.div`
  height: 40vh;
  display: flex;
  align-items: end;
  color: var(--white-color);
  padding-bottom: 2rem;
  img {
    padding-left: 20px;
    object-fit: cover;
    height: 13rem;
    width: 13rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    @media (max-width: 460px) {
      display: none;
    }
  }
  .temporary-image {
    object-fit: contain;
  }
`;

export const DescriptionHolder = styled.div`
  padding-left: 20px;
  cursor: default;
  p {
    padding-top: 8px;
    font-size: 0.9rem;
    .user {
      color: inherit;
      font-weight: bold;
    }
    .dot {
      color: inherit;
    }
  }
  h1 {
    padding-top: 8px;
    font-size: 0.7rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: bold;
  }
  span {
    color: var(--main-font-color);
  }
`;
