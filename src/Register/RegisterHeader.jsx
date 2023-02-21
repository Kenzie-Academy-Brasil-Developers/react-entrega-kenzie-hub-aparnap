import { Link } from "react-router-dom";
import KenzieHubLogo from "../assets/KenzieHubLogo.svg";
import { StyledHeaderContainer } from "./headerStyle";

export function RegisterHeader() {
  return (
    <StyledHeaderContainer>
      <div className="header">
        <img src={KenzieHubLogo} alt="KenzieHubLogo"></img>
        <Link to="/">Voltar</Link>
      </div>
    </StyledHeaderContainer>
  );
}
