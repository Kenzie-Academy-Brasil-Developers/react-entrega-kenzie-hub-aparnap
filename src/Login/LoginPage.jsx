import KenzieHubLogo from "../assets/KenzieHubLogo.svg";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../providers/UserContext";
import { useContext, useState } from "react";
import { StyledContainer, StyledLink } from "./style";
import { Loading } from "./Loading";

const schema = yup
  .object({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
  })
  .required();

export function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    userLogin(data, setLoading);
    reset();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledContainer>
          <div className="imageDiv">
            <img src={KenzieHubLogo} alt="KenzieHubLogo"></img>
          </div>
          <div className="loginForm">
            <p className="loginText">Login</p>
            <form onSubmit={handleSubmit(submit)}>
              <div className="emailDiv">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email" {...register("email")} />
                <p>{errors.email?.message}</p>
              </div>
              <div className="passwordDiv">
                <label htmlFor="">Senha</label>
                <input
                  type="password"
                  placeholder=".........."
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>
              </div>
              <button type="submit">Entrar</button>
              <p className="account">Ainda não possui uma conta?</p>

              <StyledLink to="/register">Cadastre-se</StyledLink>
            </form>
          </div>
        </StyledContainer>
      )}
    </>
  );
}
