import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

  

      {/* END */}
    </Routes>
  );
};

export default Router;
