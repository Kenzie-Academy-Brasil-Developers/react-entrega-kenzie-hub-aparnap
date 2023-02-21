import { Routes, Route } from "react-router-dom";
import { MainPage } from "../Dashboard/MainPage";
import { LoginPage } from "../Login/LoginPage";
import { ProtectedRoutes } from "../ProtectedRoutes";
import { TechProvider } from "../providers/TechContext";
import { RegisterForm } from "../Register/RegisterForm";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<LoginPage />} />

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechProvider>
              <MainPage />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
}
