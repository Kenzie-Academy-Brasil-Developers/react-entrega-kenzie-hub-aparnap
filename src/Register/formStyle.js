import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  background-color: #000000;
  min-height: 100vh;
  margin: 0 auto;

  .registerForm {
    width: 91%;
    height: 100%;
    margin: 0 auto;
    margin-top: 18px;
    padding: 10px;
    background-color: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);

    h1 {
      font-family: "Inter";
      font-weight: 700;
      font-size: 14.3916px;
      color: var(--color-grey-0);
      text-align: center;
      margin-top: 20px;
    }

    .text {
      font-family: "Inter";
      font-weight: 400;
      font-size: 9.59437px;
      color: var(--color-grey-1);
      margin-top: 30px;
      text-align: center;
    }

    form {
      margin-top: 30px;

      div {
        label {
          font-family: "Inter";
          font-weight: 400;
          font-size: 9.73988px;
          color: var(--color-grey-0);
        }
        input {
          width: 100%;
          height: 38.38px;
          font-family: "Inter";
          font-weight: 400;
          font-size: 12.9865px;
          background-color: var(--color-grey-2);
          border-radius: 3.19812px;
          border: 0.973988px solid var(--color-grey-2);
          padding: 10px;
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
    }

    .selectDiv {
      label {
        font-family: "Inter";
        font-weight: 400;
        font-size: 9.73988px;
        margin-top: 20px;
      }

      select {
        width: 100%;
        height: 38.38px;
        background: var(--color-grey-2);
        border: 0.973988px solid var(--color-grey-2);
        border-radius: 3.19812px;
        margin-top: 10px;
        color: var(--color-grey-1);

        option {
          font-family: "Inter";
          font-weight: 400;
          font-size: 12.9865px;
        }
      }
    }
    .registerButton {
      width: 100%;
      height: 38.38px;
      color: #ffffff;
      font-family: "Inter";
      font-weight: 500;
      font-size: 12.7925px;
      background-color: #59323f;
      border: 1.2182px solid #59323f;
      border-radius: var(--border-radius-1);
      margin-top: 20px;
    }
  }

  @media (min-width: 400px) {
    .registerForm {
      width: 60%;
    }
  }

  @media (min-width: 700px) {
    .registerForm {
      width: 40%;
    }
  }

  @media (min-width: 900px) {
    .registerForm {
      width: 22%;
    }

    .registerButton {
      cursor: pointer;
    }
  }
`;
