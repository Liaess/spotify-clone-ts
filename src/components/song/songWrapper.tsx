import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 75px;
  gap: 14px;
  border-radius: 3px;
  cursor: default;
  img {
    width: 50px;
    height: 50px;
  }
  :hover {
    background-color: var(--secundary-background-color);
    p {
      color: var(--white-color);
    }
  }
`;

export const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  span {
    width: 30px;
    margin-right: 5px;
  }
`;

export const DescriptionHolder = styled.div`
  width: 350px;
  max-width: 350px;
  padding-left: 15px;
  @media (max-width: 600px) {
    width: 150px;
    max-width: 150px;
  }
`;

export const ArtistHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    padding: 5px 0px;
    font-size: 0.9rem;
    color: lightgray;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const AlbumHolder = styled.div`
  display: none;
  max-width: 150px;
  min-width: 150px;
  p {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 825px) {
    display: inline;
  } ;
`;

export const AddedHolder = styled.div`
  display: none;
  width: 120px;
  @media (min-width: 992px) {
    display: inline;
  } ;
`;

export const DurationHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  padding-right: 20px;
`;
