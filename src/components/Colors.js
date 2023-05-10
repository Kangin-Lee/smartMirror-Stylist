import React from "react";
import Flip from "react-reveal/Flip";

const Colors = ({ userSelect, selectColor }) => {
  let combinationColor = userSelect && userSelect.combination;
  let combinationImg = userSelect && userSelect.img;
  const recommendStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "15px",
    fontFamily: "Comfortaa, cursive",
  };
  return (
    <div
      style={selectColor ? { display: "block" } : { display: "none" }}
      className="recommend-color-area"
    >
      <div className="userSelect-color">
        <div id="color" className={userSelect && userSelect.name}>
          {userSelect && userSelect.name}
        </div>
        <div className="userSelect-color-text">
          <div className="userSelect-color-detailText">
            <div>{userSelect && userSelect.text}</div>
          </div>
        </div>
      </div>

      <div>
        <div className="recommend-color">
          {userSelect &&
            combinationColor.map((color) => (
              <div className="recommend-img">
                <div className={color}></div>
                <div style={recommendStyle}>{color}</div>
                <Flip left>
                  <img
                    className="recommend-imgs"
                    width={200}
                    src={
                      combinationImg[
                        (userSelect && combinationColor).indexOf(color)
                      ]
                    }
                  />
                </Flip>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
