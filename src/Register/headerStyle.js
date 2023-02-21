import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  .header {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px;

    img {
      margin-top: 20px;
    }

    a {
      width: 79.54px;
      height: 31.95px;
      background-color: #212529;
      border-radius: 4px;
      color: var(--color-grey-0);
      padding: 10px 20px;
      font-family: "Inter";
      font-weight: 600;
      font-size: 9.59437px;
      margin-top: 20px;
    }
  }

  @media (min-width: 400px) {
    .header {
      justify-content: center;
      gap: 70px;
    }
  }

  @media (min-width: 700px) {
    .header {
      justify-content: center;
      gap: 100px;
    }
  }

  @media (min-width: 900px) {
    .header {
      justify-content: center;
      gap: 120px;
    }
  }
`;
