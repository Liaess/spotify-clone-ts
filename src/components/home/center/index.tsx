import styled from "styled-components";

export default function Center() {
  return (
    <Container>
      <div>
        <p>#</p>
        <p>TITLE</p>
        <p>ALBUM</p>
        <p>DATE ADDED</p>
        <p>clock**</p>
      </div>
      {/* <div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
      <div>a</div>
      <div>a</div>
      <div>aa</div>
      <div>a</div> */}
    </Container>
  );
}

const Container = styled.div`
  margin: 0px 30px;
  div {
    display: flex;
    width: 100%;
    background-color: red;
  }
`;
