import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import * as yup from "yup";
import { StyledModalDiv } from "./modalStyle";

const schema = yup
  .object({
    title: yup.string().required("Title é obrigatório"),
  })
  .required();

export function Modal() {
  const { setTechCreateModal } = useContext(UserContext);
  const { techCreate } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async (data) => {
    await techCreate(data);
    setTechCreateModal(false);
  };

  return (
    <StyledModalDiv>
      <form onSubmit={handleSubmit(submit)}>
        <div className="techRegister">
          <h1 className="formTitle">Cadastrar Tecnologia</h1>
          <button
            className="closeButton"
            type="button"
            onClick={() => setTechCreateModal(false)}
          >
            X
          </button>
        </div>
        <div className="inputData">
          <div className="titleInput">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Title" {...register("title")} />
            <p>{errors.title?.message}</p>
          </div>
          <div className="statusSelect">
            <label htmlFor="">Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button className="techRegButton" type="submit">
            Cadastrar Tecnologia
          </button>
        </div>
      </form>
    </StyledModalDiv>
  );
}
