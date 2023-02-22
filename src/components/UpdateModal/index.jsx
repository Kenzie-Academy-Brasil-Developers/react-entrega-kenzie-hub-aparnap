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
  const { techUpdate, techDelete, editingStatus, setEditingStatus } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: editingStatus.title,
      status: editingStatus.status,
    },
  });

  const submit = async (data) => {
    await techUpdate(data, editingStatus.id);
    setEditingStatus(null);
  };

  return (
    <StyledUpdateTechDiv>
      <form onSubmit={handleSubmit(submit)}>
        <div className="techInfo">
          <h2 className="techInfoTitle">Tecnologia Detalhes</h2>
          <button className="closeBttn" onClick={() => setEditingStatus(null)}>
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
              onClick={async () => {
                await techDelete(editingStatus.id);
                setEditingStatus(null);
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      </form>
    </StyledUpdateTechDiv>
  );
}
