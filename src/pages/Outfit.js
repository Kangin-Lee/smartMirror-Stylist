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
import Fade from "react-reveal/Fade";
import Footer from "../components/Footer";
import RecommendedClothes from "../components/RecommendedClothes";

const Outfit = ({ weather, airPollution }) => {
  let weatherIcon = `/images/weatherIcon/${weather?.weather[0].icon}.png`;
  console.log(weather);
  let date = new Date();

  const [time, setTime] = useState(date);
  const timeReturn = () => {
    setTime(date);
  };

  // 미세먼지 & 초미세먼지 자동 상태 판단하는 기능=======================================
  const airStatus = ["좋음", "보통", "나쁨", "매우 나쁨"];
  const pm_10 = airPollution && airPollution.list[0].components.pm10.toFixed();
  const pm_2_5 =
    airPollution && airPollution.list[0].components.pm2_5.toFixed();

  const mask = () => {
    if (pm_10 >= 80 || pm_2_5 >= 35) {
      return (
        <span>외출하실 예정이라면 마스크를 착용하시는 것을 추천드립니다.</span>
      );
    } else {
      return <span></span>;
    }
  };

  const getAirStatus_pm10 = (pm10) => {
    if (pm10 < 30) {
      return airStatus[0]; // 좋음
    } else if (pm10 < 80) {
      return airStatus[1]; // 보통
    } else if (pm10 < 150) {
      return airStatus[2]; // 나쁨
    } else {
      return airStatus[3]; // 매우 나쁨
    }
  };

  const getAirStatus_pm2_5 = (pm_2_5) => {
    if (pm_2_5 < 15) {
      return airStatus[0]; // 좋음
    } else if (pm_2_5 < 35) {
      return airStatus[1]; // 보통
    } else if (pm_2_5 < 75) {
      return airStatus[2]; // 나쁨
    } else {
      return airStatus[3]; // 매우 나쁨
    }
  };
  const status10 = getAirStatus_pm10(pm_10);
  const status2_5 = getAirStatus_pm2_5(pm_2_5);
  // ===================================================================================

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
              <strong className="air-status">{airStatus[0]}</strong>
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
              <strong className="air-status">{airStatus[1]}</strong>
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
              <strong className="air-status">{airStatus[2]}</strong>
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
              <strong className="air-status">{airStatus[3]}</strong>
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
              <strong className="air-status">{airStatus[0]}</strong>
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
              <strong className="air-status">{airStatus[1]}</strong>
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
              <strong className="air-status">{airStatus[2]}</strong>
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
              <strong className="air-status">{airStatus[3]}</strong>
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
  let weatherStatus;

  // 기상 상황에 따른 별도 코멘트 설정============================================
  switch (weather?.weather[0].main) {
    case "Clouds":
      weatherStatus = "";
      break;
    case "Clear":
      weatherStatus =
        date.getHours() >= 18 || date.getHours() < 6
          ? ""
          : "그리고 현재 햇빛이 강하기 때문에 외출 시 선크림을 바르시는 것을 추천드립니다. ";
      break;
    case "Snow":
      weatherStatus =
        "그리고 현재 눈이 내리고 있기 떄문에 외출 시 우산을 챙기는 것을 추천드리며, 미끄럽지 않은 신발을 신는 것을 추천드립니다.";
      break;
    case "Rain":
      weatherStatus =
        "그리고 현재 비가 오고 있기 때문에 외출 시 우산을 챙기는 것을 추천드립니다.";
      break;
    case "Drizzle":
      weatherStatus =
        "그리고 현재 비가 오고 있기 때문에 외출 시 우산을 챙기는 것을 추천드립니다.";
      break;
    case "Thunderstorm":
      weatherStatus =
        "그리고 현재 천둥번개를 동반한 비가 내리고 있기 때문에 외출 시 우산을 챙기는 것을 추천드립니다.";
    default:
      weatherStatus = "";
      break;
  }

  // 기상 상황에 따른 백그라운드 이미지 설정 =======================================
  switch (weather?.weather[0].main) {
    case "Clouds":
      backgroundImage = "url(/images/weather/clouds.jpg) fixed";
      break;
    case "Clear":
      backgroundImage =
        date.getHours() >= 18 || date.getHours() < 6
          ? "url(/images/weather/ClearNight.jpg)fixed"
          : "url(/images/weather/sun.jpg)fixed";
      break;
    case "Snow":
      backgroundImage = "url(/images/weather/snow.jpg)fixed";
      break;
    case "Rain":
      backgroundImage = "url(/images/weather/rain.jpg)fixed";
      break;
    case "Drizzle":
      backgroundImage = "url(/images/weather/rain.jpg)fixed";
      break;
    case "Thunderstorm":
      backgroundImage = "url(/images/weather/thunderstorm.jpg)fixed";
    default:
      backgroundImage = "";
      break;
  }

  const containerStyle = {
    background: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const currentWeather = () => {
    if (weather?.main.temp.toFixed(0) <= 4) {
      return (
        <span>
          이 날씨에는 패딩같은 두꺼운 외투와 목도리, 히트텍 등으로 보온에 신경
          써 감기에 걸리지 않게 입어주세요.
        </span>
      );
    } else if (weather?.main.temp.toFixed(0) <= 8) {
      return (
        <span>
          이 날씨에는 아직 춥기때문에 한겨울 정도의 보온까지는 아니지만 어느정도
          보온에 신경을 써야합니다. 코트나 가죽자켓을 입어보세요.
        </span>
      );
    } else if (weather?.main.temp.toFixed(0) <= 11) {
      return (
        <span>
          현재 날씨는 겉옷 하나만 입기에는 추운 날씨입니다. 상의 위에 얇은
          외투를 입어 보온에 신경 써 주세요.
        </span>
      );
    } else if (weather?.main.temp.toFixed(0) <= 16) {
      return (
        <span>
          이 날씨에 두꺼운 상의와 외투를 함께 입기에는 살짝 더울 수 있습니다.
          그렇기 때문에 기모 소재나 두꺼운 상의 하나만 입거나 얇은 상의 위에
          외투를 입는 것을 추천드립니다.
        </span>
      );
    } else if (weather?.main.temp.toFixed(0) <= 19) {
      return (
        <span>
          이 날씨에는 후드티나 맨투맨 등의 상의 하나만 입거나 얇은 상의 위에
          바람막이나 후드집업 등의 가벼운 외투를 입어 주시는 것을 추천드립니다.
        </span>
      );
    } else if (weather?.main.temp.toFixed(0) <= 22) {
      return (
        <span>
          이 날씨는 활동하다보면 덥다고 느낄 수 있는 날씨입니다. 그렇기 때문에
          얇은 상의와 적당한 두께의 하의를 입는 것을 추천드립니다.
        </span>
      );
    } else if (weather?.main.temp.toFixed(0) <= 27) {
      return (
        <span>
          이 날씨에는 높은 기온으로 땀이 많이 날 수 있기 때문에 통풍이 잘되는
          상,하의나 반팔 반바지 등으로 체온을 낮추는 것을 추천드립니다.
        </span>
      );
    } else {
      return (
        <span>
          이 날씨는 한 여름의 날씨로써 티셔츠나 반바지를 입는 것을 추천드립니다.
          만약 사무실 등의 내부에서 많은 활동을 하시는 분이라면 냉방병에 걸릴
          수도 있기 때문에 얇은 가디건을 챙기는 것을 추천드립니다.
        </span>
      );
    }
  };

  return (
    <div className="outfit-area">
      <div className="outfit-header">
        <Navbar />
        <h1 className="outfit-title">Today's Outfit</h1>
      </div>
      <div className="current-weather-container" style={containerStyle}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Fade left>
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
                      <div style={{ fontFamily: "Comfortaa, cursive" }}>
                        {weather?.name}
                      </div>
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
                    {date.getMonth() + 1}월 {date.getDate()}일 {date.getHours()}
                    시 {date.getMinutes()}분
                  </span>
                  <span>
                    <button onClick={timeReturn}>
                      <FontAwesomeIcon icon={faRotateLeft} />
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right duration={2000}>
            <div className="weather-text">
              <div
                style={{
                  padding: "10px 20px",
                  borderRadius: "15px",
                  backgroundColor: "white",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <div>
                  {date.getFullYear()}년 {date.getMonth() + 1}월{" "}
                  {date.getDate()}일 {date.getHours()}시 {date.getMinutes()}분
                </div>{" "}
                <div>
                  현재 기온은 {weather?.main.temp.toFixed(1)}
                  ℃이며 체감 온도는 {weather?.main.feels_like.toFixed()}℃입니다.
                </div>
                <div>
                  {currentWeather()} 미세먼지는 '{status10}'이며 초미세먼지는 '
                  {status2_5}'입니다. {mask()} {weatherStatus}
                </div>
              </div>
            </div>
          </Fade>
        </Container>
      </div>
      {/* 옷차림 추천 ======================================================*/}
      <Container>
        <RecommendedClothes weather={weather} />
      </Container>
      <Footer />
    </div>
  );
};

export default Outfit;
