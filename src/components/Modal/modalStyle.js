import styled from "styled-components";

export const StyledModalDiv = styled.div`
  width: 91%;
  height: 274.34px;
  background-color: var(--color-grey-3);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  position: absolute;
  top: 150px;
  left: 13px;

  form {
    .techRegister {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 90px;
      background-color: var(--color-grey-2);
      height: 40.11px;
      width: 100%;

      .formTitle {
        font-family: "Inter";
        font-weight: 700;
        font-size: 11.2304px;
        color: var(--color-grey-0);
      }

      .closeButton {
        font-family: "Nunito";
        font-weight: 600;
        font-size: 12.8347px;
        color: var(--color-grey-1);
        background-color: var(--color-grey-2);
        border: none;
      }
    }

    .inputData {
      padding: 10px;
      .titleInput {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 9.772px;
          color: var(--color-grey-0);
        }
        input {
          width: 100%;
          height: 38.5px;
          font-family: "Inter";
          font-weight: 400;
          font-size: 13.0293px;
          background-color: var(--color-grey-2);
          color: var(--color-grey-0);
          border: 0.9772px solid var(--color-grey-0);
          border-radius: 3.20867px;
          padding: 10px;
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

      .statusSelect {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 9.772px;
          color: var(--color-grey-0);
        }
        select {
          width: 100%;
          height: 38.5px;
          background-color: var(--color-grey-2);
          color: var(--color-grey-0);
          border: 0.9772px solid var(--color-grey-0);
          border-radius: 3.20867px;
          margin-top: 10px;

          option {
            font-family: "Inter";
            font-weight: 400;
            font-size: 9.772px;
          }
        }
      }
      .techRegButton {
        width: 100%;
        height: 38.5px;
        background-color: var(--color-primary);
        border: 1.2182px solid var(--color-primary);
        border-radius: var(--border-radius-2);
        color: #ffffff;
        margin-top: 15px;
      }
    }
  }

  @media (min-width: 400px) {
    width: 65%;
    top: 202px;
    left: 83px;

    form {
      .techRegister {
        gap: 130px;
      }
    }
  }

  @media (min-width: 700px) {
    width: 36%;
    top: 202px;
    left: 253px;

    form {
      .techRegister {
        gap: 130px;
      }
    }
  }

  @media (min-width: 900px) {
    width: 22%;
    top: 202px;
    left: 533px;

    form {
      .techRegister {
        gap: 150px;

        .closeButton {
          cursor: pointer;
        }
      }
      .techRegButton {
        cursor: pointer;
      }
    }
  }
`;
