import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techUpdateModal, setTechUpdateModal] = useState(false);
  const [editingStatus, setEditingStatus] = useState(null);

  const { techData, setTechData } = useContext(UserContext);

  const techCreate = async (data) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.post(`/users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTechData([...techData, response.data.user.techs]);
      toast.success("Tecnologia criada com sucesso", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
  };

  const techUpdate = async (data, techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Tecnologia atualizada com sucesso", { autoClose: 2000 });

      const newTechData = techData.map((tech) => {
        if (techId === tech.id) {
          console.log(tech.id);
          return { ...tech, ...data };
        } else {
          return tech;
        }
      });

      setTechData(newTechData);
    } catch (error) {
      console.log(error);
    }
  };

  const techDelete = async (techId) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia removida com sucesso", { autoClose: 2000 });

      const newTechData = techData.filter((tech) => tech.id !== techId);
      setTechData(newTechData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techCreate,
        techUpdateModal,
        setTechUpdateModal,
        techUpdate,
        techDelete,
        editingStatus,
        setEditingStatus,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
