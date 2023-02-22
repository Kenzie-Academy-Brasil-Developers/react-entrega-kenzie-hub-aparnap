import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techCreateModal, setTechCreateModal] = useState(false);
  const [techData, setTechData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechData(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      userAutoLogin();
    }
  }, []);

  const userRegister = async (data) => {
    try {
      const response = await api.post(`/users`, data);

      toast.success("Conta criada com sucesso!", { autoClose: 2000 });
      navigate("/");
    } catch (error) {
      console.log(error);
      let errorMessage = "";
      if (error.response.data.message === "Email already exists") {
        errorMessage = "Email já existe";
      } else {
        errorMessage = "Ops! Algo deu errado";
      }
      toast.error(errorMessage, { autoClose: 2000 });
    }
  };

  const userLogin = async (data, setLoading) => {
    setLoading(true);
    try {
      const response = await api.post(`/sessions`, data);
      setUser(response.data.user);
      setTechData(response.data.user.techs);
      toast.success("Logado com sucesso!", { autoClose: 2000 });
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("e-mail ou senha inválidos", { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);

    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");

    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userRegister,
        userLogin,
        userLogout,
        setTechCreateModal,
        techCreateModal,
        techData,
        setTechData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
