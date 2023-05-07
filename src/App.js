import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Outfit from "./pages/Outfit";
import ColorMatch from "./pages/ColorMatch";
import MyCloth from "./pages/MyCloth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FindInfo from "./pages/FindInfo";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인이 됨, false면 로그인 안 됨

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/outfit" element={<Outfit />} />
        <Route path="/colormatch" element={<ColorMatch />} />
        <Route path="/mycloth" element={<MyCloth />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findinfo" element={<FindInfo />} />
      </Routes>
    </div>
  );
}

export default App;
