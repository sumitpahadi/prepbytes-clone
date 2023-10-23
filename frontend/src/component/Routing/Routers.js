import Html from "../Pages/Html";
import Css from "../Pages/Css";
import Elevation from "../Pages/Elevation";
import Full_stack from "../Pages/Full_stack";
import Javascript from "../Pages/Javascript";
import Master_comp from "../Pages/Master_comp";
import Mock_test from "../Pages/Mock_test";
import Mongodb from "../Pages/Mongodb";
import Node from "../Pages/Node";
import Reactjs from "../Pages/Reactjs";
import Video from "../Pages/Video";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Routers() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css"  element={<Css />} />
        <Route path="/elevation" element={<Elevation />} />
        <Route path="/full_stack" element={<Full_stack />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/master_comp" element={<Master_comp />} />
        <Route path="/mock_test" element={<Mock_test />} />
        <Route path="/reactjs" element={<Reactjs />} />
        <Route path="/video" element={<Video />} />
        <Route path="/mongodb" element={<Mongodb />} />
        <Route path="/node" element={<Node />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default Routers;
