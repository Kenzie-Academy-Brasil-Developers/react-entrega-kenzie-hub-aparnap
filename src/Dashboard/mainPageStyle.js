import styled from "styled-components";

export const StyledMainDiv = styled.div`
  .mainContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  width: 100%;
  background-color: #000000;
  margin: 0 auto;
  min-height: 100vh;

  .userDivOuter {
    width: 100%;
    border-bottom: 1px solid var(--color-grey-3);
  }

  .userDiv {
    width: 100%;
    height: 110px;
    padding: 29px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    .userName {
      font-family: "Inter";
      font-weight: 700;
      font-size: 18px;
      color: var(--color-grey-0);
      margin-top: 30px;
    }

    .userSelect {
      font-family: "Inter";
      font-weight: 400;
      font-size: var(--font-size-12);
      color: var(--color-grey-1);
    }
  }

  .technology {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;

    h2 {
      font-family: "Inter";
      font-weight: 600;
      font-size: var(--font-size-16);
      color: var(--color-grey-0);
    }

    .createButton {
      width: 32.49px;
      height: 32px;
      background-color: var(--color-grey-3);
      border-radius: var(--border-radius-1);
      border: none;
      color: #ffffff;
      font-size: 22px;
    }
  }

  .techDetails {
    width: 100%;
    background-color: var(--color-grey-3);
    border-radius: var(--border-radius-1);
    margin: 0 auto;
    margin-top: 20px;

    ul {
      padding: 10px;

      .techList {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 48.73px;
        background-color: var(--color-grey-4);
        border-radius: var(--border-radius-2);
        margin: 0 auto;
        margin-top: 10px;
        padding: 10px;
        cursor: pointer;

        .techName {
          font-family: "Inter";
          font-weight: 700;
          font-size: 14.2123px;
          color: var(--color-grey-0);
        }

        .techStatus {
          font-family: "Inter";
          font-weight: 400;
          font-size: 12.182px;
          color: var(--color-grey-1);
        }
      }
    }
  }

  @media (min-width: 450px) {
    .userDiv {
      flex-direction: row;
      align-items: center;
      .userName {
        margin-top: 0px;
      }
    }
  }

  @media (min-width: 900px) {
    .userDiv {
      align-items: center;
      .userName {
        margin-top: 0px;
      }
    }

    .technology {
      .createButton {
        cursor: pointer;
      }
    }
  }
`;
