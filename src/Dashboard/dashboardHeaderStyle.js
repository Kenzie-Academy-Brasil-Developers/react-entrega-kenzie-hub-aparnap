import styled from "styled-components";

export const StyledDashboardHeader = styled.div`
  .mainPageHeader {
    width: 100%;
    height: 72px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px;
    border-bottom: 1px solid var(--color-grey-3);

    .logoutButton {
      font-family: "Inter";
      font-weight: 600;
      font-size: var(--font-size-12);
      color: var(--color-grey-0);
      width: 55.49px;
      height: 32px;
      background-color: var(--color-grey-3);
      border-radius: var(--border-radius-1);
      border: none;
    }
  }

  @media (min-width: 400px) {
    .mainPageHeader {
      justify-content: center;
      gap: 260px;
    }
  }

  @media (min-width: 700px) {
    .mainPageHeader {
      justify-content: center;
      gap: 360px;
    }
  }

  @media (min-width: 900px) {
    .mainPageHeader {
      justify-content: center;
      gap: 460px;
    }

    .logoutButton {
      cursor: pointer;
    }
  }
`;
