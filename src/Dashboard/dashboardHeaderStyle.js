import styled from "styled-components";

export const StyledDashboardHeader = styled.div`
  width: 100%;

  .headerOuter {
    width: 100%;
    border-bottom: 1px solid var(--color-grey-3);
  }
  .mainPageHeader {
    width: 100%;
    height: 72px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px;

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

  @media (min-width: 900px) {
    .logoutButton {
      cursor: pointer;
    }
  }
`;
