import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";

import "./sass/main.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/hotels"} element={<Hotels />} />
        <Route path={"/hotels/:id"} element={<Hotel />} />
      </Routes>
    </>
  );
}

export default App;
