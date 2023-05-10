import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotateLeft,
  faFaceSmile,
  faFaceMeh,
  faFaceFrown,
  faFaceAngry,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

const Outfit = ({ weather, airPollution }) => {
  let weatherIcon = `/images/weatherIcon/${weather?.weather[0].icon}.png`;
  console.log(weather);
  let date = new Date();

  const [time, setTime] = useState(date);
  const timeReturn = () => {
    setTime(date);
  };

  const pm10 = () => {
    if (airPollution && airPollution.list[0].components.pm10.toFixed() < 30) {
      const TextBackground = { backgroundColor: "#32a1ff" };
      const text = { color: "#32a1ff" };
      const background = { backgroundColor: "#cce7ff" };
      return (
        <div className="pm" style={background}>
          <div style={TextBackground} className="pm-common-text">
            미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceSmile} />
              <strong className="air-status">좋음</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm10.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    } else if (
      airPollution &&
      airPollution.list[0].components.pm10.toFixed() < 80
    ) {
      const TextBackground = { backgroundColor: "#00c73c" };
      const text = { color: "#00c73c" };
      const background = { backgroundColor: "#bff1ce" };
      return (
        <div style={background} className="pm">
          <div style={TextBackground} className="pm-common-text">
            미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceMeh} />
              <strong className="air-status">보통</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm10.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    } else if (
      airPollution &&
      airPollution.list[0].components.pm10.toFixed() < 150
    ) {
      const TextBackground = { backgroundColor: "#fd9b5a" };
      const text = { color: "#fd9b5a" };
      const background = { backgroundColor: "#fee6d6" };
      return (
        <div style={background} className="pm">
          <div style={TextBackground} className="pm-common-text">
            미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceFrown} />
              <strong className="air-status">나쁨</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm10.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    } else {
      const TextBackground = { backgroundColor: "#ff5959" };
      const text = { color: "#ff5959" };
      const background = { backgroundColor: "#ffd6d6" };
      return (
        <div style={background} className="pm">
          <div style={TextBackground} className="pm-common-text">
            미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceAngry} />
              <strong className="air-status">매우나쁨</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm10.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    }
  };

  const pm2_5 = () => {
    if (airPollution && airPollution.list[0].components.pm2_5.toFixed() < 15) {
      const TextBackground = { backgroundColor: "#32a1ff" };
      const text = { color: "#32a1ff" };
      const background = { backgroundColor: "#cce7ff" };
      return (
        <div style={background} className="pm">
          <div style={TextBackground} className="pm-common-text">
            초미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceSmile} />
              <strong className="air-status">좋음</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm2_5.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    } else if (
      airPollution &&
      airPollution.list[0].components.pm2_5.toFixed() < 35
    ) {
      const TextBackground = { backgroundColor: "#00c73c" };
      const text = { color: "#00c73c" };
      const background = { backgroundColor: "#bff1ce" };
      return (
        <div style={background} className="pm">
          <div style={TextBackground} className="pm-common-text">
            초미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceMeh} />
              <strong className="air-status">보통</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm2_5.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    } else if (
      airPollution &&
      airPollution.list[0].components.pm2_5.toFixed() < 75
    ) {
      const TextBackground = { backgroundColor: "#fd9b5a" };
      const text = { color: "#fd9b5a" };
      const background = { backgroundColor: "#fee6d6" };
      return (
        <div style={background} className="pm">
          <div style={TextBackground} className="pm-common-text">
            초미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceFrown} />
              <strong className="air-status">나쁨</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm2_5.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    } else {
      const TextBackground = { backgroundColor: "#ff5959" };
      const text = { color: "#ff5959" };
      const background = { backgroundColor: "#ffd6d6" };
      return (
        <div style={background} className="pm">
          <div style={TextBackground} className="pm-common-text">
            초미세먼지
          </div>
          <div style={text}>
            <div className="text">
              <FontAwesomeIcon icon={faFaceAngry} />
              <strong className="air-status">매우나쁨</strong>
            </div>
            <strong>
              {airPollution && airPollution.list[0].components.pm2_5.toFixed()}
              μg/m3
            </strong>
          </div>
        </div>
      );
    }
  };

  let backgroundImage;

  switch (weather?.weather[0].main) {
    case "Clouds":
      backgroundImage =
        "url(https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg) fixed";
      break;
    case "Clear":
      backgroundImage =
        "url(https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg)fixed";
      break;
    case "Snow":
      backgroundImage =
        "url(https://cdn.pixabay.com/photo/2014/02/07/10/19/winter-260817_960_720.jpg)fixed";
      break;
    case "Rain":
      backgroundImage =
        "url(https://cdn.pixabay.com/photo/2016/11/29/05/29/buildings-1867550_960_720.jpg)fixed";
      break;
    case "Drizzle":
      backgroundImage =
        "url(https://cdn.pixabay.com/photo/2016/11/29/05/29/buildings-1867550_960_720.jpg)fixed";
      break;
    case "Thunderstorm":
      backgroundImage =
        "url(https://cdn.pixabay.com/photo/2016/11/29/05/29/buildings-1867550_960_720.jpg)fixed";
    default:
      backgroundImage =
        "url(https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg)fixed";
      break;
  }

  const containerStyle = {
    background: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="outfit-area">
      <div className="outfit-header">
        <Navbar />
        <h1 className="outfit-title">Today's Outfit</h1>
      </div>
      <div className="current-weather-container" style={containerStyle}>
        <Container>
          <div className="current-weather">
            <div className="weather-img">
              <div className="weather-supply">
                <img
                  width={100}
                  src="https://brands.home-assistant.io/_/openweathermap/logo.png"
                />{" "}
                <p>제공</p>
              </div>
              <div>
                <img width={140} src={weatherIcon} />
                <div className="weather-location">
                  <strong>{weather?.main.temp.toFixed(1)}°</strong>
                  <div className="current-location">
                    <div>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>{weather?.name}</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="current-temp">
                <div>
                  {weather?.weather[0].description} / 체감온도:{" "}
                  {weather?.main.feels_like.toFixed()}℃
                  <div className="feels-like">
                    <p>습도: {weather?.main.humidity}%</p>◾
                    <p>풍속: {weather?.wind.speed}m/s</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="air-pollution">
                  {pm10()}
                  {pm2_5()}
                </div>
              </div>

              <div className="clock">
                <span>
                  {date.getMonth() + 1}월 {date.getDate()}일 {date.getHours()}시{" "}
                  {date.getMinutes()}분
                </span>
                <span>
                  <button onClick={timeReturn}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div>현재 날씨는 {weather?.main.temp.toFixed(1)}°입니다.</div>
        </Container>
      </div>
      {/* 옷차림 추천 ======================================================*/}
      <div style={{ height: "1000px" }}>Outer Top Bottom 슈즈 순</div>
    </div>
  );
};

export default Outfit;
