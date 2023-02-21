import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import { GlobalReset } from "./styles/reset";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalReset />
      <AppRoutes />

      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
