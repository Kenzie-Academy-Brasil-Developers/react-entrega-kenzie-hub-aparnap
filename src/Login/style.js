import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #000000;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;

  .imageDiv {
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 60px;
    }
  }

  .loginForm {
    width: 91%;
    height: 100%;
    margin: 0 auto;
    padding: 10px;
    background-color: var(--color-grey-3);
    margin-top: 10px;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    .loginText {
      font-family: "Inter";
      font-weight: 700;
      font-size: 14.439px;
      color: var(--color-grey-0);
      margin-top: 20px;
      text-align: center;
    }

    form {
      margin-top: 25px;
      height: 340px;
    }

    .emailDiv {
      label {
        font-family: "Inter";
        font-weight: 400;
        font-size: 9.772px;
        color: var(--color-grey-0);
      }

      input {
        width: 100%;
        height: 38.5px;
        margin-top: 10px;
        background-color: var(--color-grey-2);
        border: 0.9772px solid var(--color-grey-0);
        border-radius: 3.20867px;
        padding: 10px;
        color: var(--color-grey-0);
        font-weight: 400;
        font-size: 13.0293px;
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

    .passwordDiv {
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
        color: var(--color-grey-0);
        background-color: var(--color-grey-2);
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

    button {
      width: 100%;
      height: 38.5px;
      font-family: "Inter";
      font-weight: 500;
      font-size: 12.8347px;
      background-color: var(--color-primary);
      border: 1.2182px solid var(--color-primary);
      border-radius: 4.06066px;
      color: #ffffff;
    }

    .account {
      font-family: "Inter";
      font-weight: 600;
      font-size: 9.62602px;
      color: var(--color-grey-1);
      margin-top: 25px;
      text-align: center;
    }
  }

  @media (min-width: 400px) {
    .loginForm {
      width: 60%;
    }
  }

  @media (min-width: 700px) {
    .loginForm {
      width: 40%;
    }
  }

  @media (min-width: 900px) {
    .loginForm {
      width: 22%;
    }

    button {
      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-grey-0);
  font-family: "Inter";
  font-weight: 500;
  font-size: 12.8347px;
  width: 100%;
  height: 38.5px;
  background-color: var(--color-grey-1);
  border: 1.2182px solid var(--color-grey-1);
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
