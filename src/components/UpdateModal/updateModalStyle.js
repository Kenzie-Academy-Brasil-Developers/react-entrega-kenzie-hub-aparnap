import styled from "styled-components";

export const StyledUpdateTechDiv = styled.div`
  width: 91%;
  height: 273.41px;
  background-color: var(--color-grey-3);
  box-shadow: 0px 3.19783px 31.9783px -7.99458px rgba(0, 0, 0, 0.25);
  border-radius: 3.19783px;
  position: absolute;
  top: 150px;
  left: 13px;

  form {
    .techInfo {
      width: 100%;
      height: 39.97px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 110px;
      background-color: var(--color-grey-2);

      .techInfoTitle {
        font-family: "Inter";
        font-weight: 700;
        font-size: 11.1924px;
        color: var(--color-grey-0);
      }

      .closeBttn {
        font-family: "Nunito";
        font-weight: 600;
        font-size: 12.7913px;
        color: var(--color-grey-1);
        background-color: var(--color-grey-2);
        border: none;
      }
    }

    .formData {
      padding: 10px;
      .inputInfo {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 9.73899px;
          color: var(--color-grey-0);
        }

        input {
          width: 100%;
          height: 38.37px;
          padding: 10px;
          background-color: var(--color-grey-2);
          border: 0.973899px solid var(--color-grey-2);
          border-radius: 3.19783px;
          color: var(--color-grey-1);
          margin-top: 10px;
        }
        p {
          font-family: "Inter";
          font-weight: 400;
          font-size: 9.73988px;
          color: red;
          margin-bottom: 15px;
          margin-top: 5px;
        }
      }

      .updateSelect {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 9.73899px;
          color: var(--color-grey-0);
        }
        select {
          width: 100%;
          height: 38.37px;
          background-color: var(--color-grey-2);
          border: 0.973899px solid var(--color-grey-2);
          border-radius: 3.19783px;
          color: var(--color-grey-1);
          margin-top: 10px;
        }
      }

      .buttons {
        display: flex;
        gap: 30px;
        margin-top: 15px;
        align-items: center;

        .updateBttn {
          width: 60%;
          height: 38.37px;
          background-color: var(--color-primary-negative);
          border: 1.2182px solid var(--color-primary-negative);
          border-radius: var(--border-radius-1);
          color: #ffffff;
        }

        .deleteBttn {
          width: 30%;
          height: 38.37px;
          background-color: var(--color-grey-1);
          border: 1.2182px solid var(--color-grey-1);
          border-radius: var(--border-radius-1);
          font-family: "Inter";
          font-weight: 500;
          font-size: 12.7913px;
          color: #ffffff;
        }
      }
    }
  }

  @media (min-width: 400px) {
    width: 65%;
    top: 202px;
    left: 83px;

    form {
      .techInfo {
        gap: 130px;
      }
    }
  }

  @media (min-width: 700px) {
    width: 36%;
    top: 202px;
    left: 253px;

    form {
      .techInfo {
        gap: 140px;
      }
    }
  }

  @media (min-width: 900px) {
    width: 22%;
    top: 202px;
    left: 533px;

    form {
      .techInfo {
        gap: 150px;

        .closeBttn {
          cursor: pointer;
        }
      }
      .buttons {
        .updateBttn {
          cursor: pointer;
        }
        .deleteBttn {
          cursor: pointer;
        }
      }
    }
  }
`;
