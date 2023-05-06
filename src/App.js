import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Outfit from "./pages/Outfit";
import ColorMatch from "./pages/ColorMatch";
import MyCloth from "./pages/MyCloth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outfit" element={<Outfit />} />
        <Route path="/colormatch" element={<ColorMatch />} />
        <Route path="/mycloth" element={<MyCloth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
