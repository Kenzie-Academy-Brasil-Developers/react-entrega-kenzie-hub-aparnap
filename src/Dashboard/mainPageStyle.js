import styled from "styled-components";

export const StyledMainDiv = styled.div`
  width: 100%;
  background-color: #000000;
  margin: 0 auto;
  min-height: 100vh;

  .userDiv {
    width: 100%;
    height: 131px;
    padding: 10px;
    border-bottom: 1px solid var(--color-grey-3);
  


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
      margin-top: 30px;
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
    width: 90%;
    height: 416.37px;
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

  @media (min-width: 900px) {
    .userDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 460px;
    }
  }

  @media (min-width: 400px) {
    .userDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 200px;
    }

    .technology {
      justify-content: center;
      gap: 240px;
    }
    .tehDetails {
      width: 40%;
    }
  }

  @media (min-width: 700px) {
    .userDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 360px;
    }

    .techDetails {
      width: 73%;
    }

    .technology {
      justify-content: center;
      gap: 400px;
    }
  }

  @media (min-width: 900px) {
    .userDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 460px;
    }

    .technology {
      gap: 540px;
    }

    .techDetails {
      width: 49%;
    }

    .technology {
      .createButton {
        cursor: pointer;
      }
    }
  }
`;
