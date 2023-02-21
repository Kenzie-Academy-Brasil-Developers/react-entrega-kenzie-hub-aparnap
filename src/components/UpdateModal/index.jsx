import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { UserContext } from "../../providers/UserContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledUpdateTechDiv } from "./updateModalStyle";

const schema = yup
  .object({
    title: yup.string().required("Title é obrigatório"),
  })
  .required();

export function UpdateModal() {
  const { techUpdate, setTechUpdateModal, techDelete } =
    useContext(TechContext);

  const { techData } = useContext(UserContext);

  console.log(techData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    techUpdate(data, techData[0].id);
  };

  return (
    <StyledUpdateTechDiv>
      <form onSubmit={handleSubmit(submit)}>
        <div className="techInfo">
          <h2 className="techInfoTitle">Tecnologia Detalhes</h2>
          <button
            className="closeBttn"
            onClick={() => setTechUpdateModal(false)}
          >
            X
          </button>
        </div>
        <div className="formData">
          <div className="inputInfo">
            <label htmlFor="">Nome do projeto</label>
            <input type="text" placeholder="Title" {...register("title")} />
            <p>{errors.title?.message}</p>
          </div>
          <div className="updateSelect">
            <label htmlFor="">Status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <div className="buttons">
            <button className="updateBttn" type="submit">
              Salvar alterações
            </button>
            <button
              className="deleteBttn"
              type="button"
              onClick={() => techDelete(techData[0].id)}
            >
              Excluir
            </button>
          </div>
        </div>
      </form>
    </StyledUpdateTechDiv>
  );
}
