import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/calcolo-stipendio-lordo-netto" replace />}
      />
      <Route path="/calcolo-stipendio-lordo-netto" element={<Home />} />
    </Routes>
  );
};

export default Router;
