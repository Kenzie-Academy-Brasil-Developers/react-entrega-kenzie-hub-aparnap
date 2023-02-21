import styled from "styled-components";

export const StyledLoadingDiv = styled.div`
  width: 100%;
  background-color: #000000;
  min-height: 100vh;
  margin: 0 auto;
  padding: 30px;
  img {
    margin-top: 100px;
  }

  @media (min-width: 400px) {
    img {
      margin-top: 120px;
      margin-left: 100px;
    }
  }

  @media (min-width: 700px) {
    img {
      margin-top: 120px;
      margin-left: 260px;
    }
  }

  @media (min-width: 900px) {
    img {
      margin-top: 150px;
      margin-left: 500px;
    }
  }
`;
