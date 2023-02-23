import { useContext } from "react";
import { Modal } from "../components/Modal";
import { UpdateModal } from "../components/UpdateModal";
import { TechContext } from "../providers/TechContext";
import { UserContext } from "../providers/UserContext";
import { StyledContainer } from "../styles/grid";
import { DashboardHeader } from "./DashboardHeader";
import { StyledMainDiv } from "./mainPageStyle";

export function MainPage() {
  const { user, setTechCreateModal, techCreateModal, techData } =
    useContext(UserContext);
  const { editingStatus, setEditingStatus } = useContext(TechContext);

  return (
    <StyledMainDiv>
      {user ? (
        <>
          <div className="mainContainer">
            <DashboardHeader />

            {techCreateModal ? <Modal /> : null}

            <div className="userDivOuter">
              <StyledContainer>
                <div className="userDiv">
                  <h1 className="userName">Olá, {user.name}</h1>
                  <p className="userSelect">{user.course_module}</p>
                </div>
              </StyledContainer>
            </div>
            <StyledContainer>
              <div className="technology">
                <h2>Tecnologias</h2>
                <button
                  className="createButton"
                  onClick={() => setTechCreateModal(true)}
                >
                  +
                </button>
              </div>

              <div className="techDetails">
                {techData.length > 0 ? (
                  <ul>
                    {techData.map((tech) => (
                      <li
                        className="techList"
                        key={tech.id}
                        onClick={() => setEditingStatus(tech)}
                      >
                        <h2 className="techName">{tech.title} </h2>
                        <p className="techStatus">{tech.status}</p>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {editingStatus ? <UpdateModal /> : null}
              </div>
            </StyledContainer>
          </div>
        </>
      ) : null}
    </StyledMainDiv>
  );
}
