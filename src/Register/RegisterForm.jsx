import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterHeader } from "./RegisterHeader";
import { useContext } from "react";
import { UserContext } from "../providers/UserContext";
import { StyledDiv } from "./formStyle";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório"),
    password: yup
      .string()
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimum 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      )
      .required("Confirmação de senha é obrigatória"),

    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.number().typeError("Deve ser um número"),
  })
  .required();

export function RegisterForm() {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <StyledDiv>
      <RegisterHeader />

      <div className="registerForm">
        <h1>Crie sua conta</h1>
        <p className="text">Rapido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui seu senha"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
          </div>
          <div>
            <label htmlFor="">Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite aqui seu senha"
              {...register("passwordConfirmation")}
            />
            <p>{errors.passwordConfirmation?.message}</p>
          </div>
          <div>
            <label htmlFor="">Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio?.message}</p>
          </div>
          <div>
            <label htmlFor="">Contato</label>
            <input
              type="number"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>{errors.contact?.message}</p>
          </div>
          <div className="selectDiv">
            <label htmlFor="">Selecionar módulo</label>
            <select {...register("course_module")}>
              <option value="Primeiro módulo">Primeiro módulo</option>
              <option value="Segundo módulo">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo">Terceiro módulo</option>
              <option value="Primeiro módulo">Quarto módulo</option>
              <option value="Primeiro módulo">Primeiro módulo</option>
            </select>
          </div>
          <button className="registerButton" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </StyledDiv>
  );
}
