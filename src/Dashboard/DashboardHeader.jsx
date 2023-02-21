import { useContext } from "react";
import KenzieHubLogo from "../assets/KenzieHubLogo.svg";
import { UserContext } from "../providers/UserContext";
import { StyledDashboardHeader } from "./dashboardHeaderStyle";

export function DashboardHeader() {
  const { userLogout } = useContext(UserContext);

  return (
    <StyledDashboardHeader>
      <div className="mainPageHeader">
        <img src={KenzieHubLogo} alt=" KenzieHubLogo "></img>
        <button className="logoutButton" onClick={() => userLogout()}>
          Sair
        </button>
      </div>
    </StyledDashboardHeader>
  );
}
