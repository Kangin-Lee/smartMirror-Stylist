import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Outfit from "./pages/Outfit";
import ColorMatch from "./pages/ColorMatch";
import MyCloth from "./pages/MyCloth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FindInfo from "./pages/FindInfo";
import { useState, useEffect } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true면 로그인이 됨, false면 로그인 안 됨
  const [weather, setWeather] = useState(null);
  const [airPollution, setAirPollution] = useState(null);

  //위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      getAirPollutionByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  const getAirPollutionByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&lang=kr&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setAirPollution(data);
  };

  useEffect(() => {
    getCurrentLocation();
    if (getCurrentLocation()) {
      getAirPollutionByCurrentLocation();
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/outfit"
          element={<Outfit weather={weather} airPollution={airPollution} />}
        />
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
