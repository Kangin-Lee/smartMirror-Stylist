import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Rotate from "react-reveal/Rotate";
import RubberBand from "react-reveal/RubberBand";

const HomeColorMatch = () => {
  const navigate = useNavigate();
  const goToColorMatch = () => {
    navigate("/colormatch");
  };
  return (
    <div className="main-third-page">
      <div className="main-third-page-title">Color Match</div>

      <div className="main-third-page-contents">
        <Rotate bottom left>
          <RubberBand delay={1000}>
            <div className="main-third-page-semiTitle">
              Find color combinations <br />
              through the palette
            </div>
          </RubberBand>
        </Rotate>
        <div className="goToPage-colormatch">
          <button className="colormatch-btn" onClick={goToColorMatch}>
            바로가기
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeColorMatch;