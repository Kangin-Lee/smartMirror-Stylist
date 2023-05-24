import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useState } from "react";

const MyCloth = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const openRegisterCloth = () => {
    setShowRegister(true);
  };

  const category = [
    { label: "아우터" },
    { label: "상의" },
    { label: "하의" },
    { label: "모자" },
    { label: "안경" },
    { label: "시계" },
    { label: "머플러" },
  ];

  const color = [
    { label: "블랙" },
    { label: "화이트" },
    { label: "그레이" },
    { label: "네이비" },
    { label: "카키" },
    { label: "그린" },
    { label: "블루" },
    { label: "스카이 블루" },
    { label: "브라운" },
    { label: "베이지" },
    { label: "오렌지" },
    { label: "레드" },
    { label: "퍼플" },
    { label: "핑크" },
    { label: "옐로우" },
    { label: "버건디" },
  ];

  const handleRegistration = (event) => {
    event.preventDefault();
  };
  return (
    <div className="mycloth-area">
      <header className="mycloth-header">
        <Navbar />
        <h1 className="mycloth-title">My Closet</h1>
      </header>

      <section className="mycloth-container">
        <section className="part1">
          <Container className="mycloth-section">
            <div className="part1-section">
              <Fade duration={2100}>
                <h3
                  style={{
                    fontSize: "3rem",
                    textAlign: "center",
                    lineHeight: "80px",
                  }}
                >
                  '옷장에서 추천'은 <br /> 본인 옷장에 있는 옷으로 스타일링
                  해주는 기능입니다.
                </h3>
              </Fade>
              <Fade delay={700}>
                <h5 style={{ fontSize: "1.8rem", textAlign: "center" }}>
                  <span className="stylist">Stylist</span> 는 사용자의 옷장에
                  있는 옷들을 통해 현재 기온 & 컬러매치와 맞는 스타일링을
                  해줍니다. 지금 바로 시작해 보세요.
                </h5>
              </Fade>
              <div>
                <a href="https://play.google.com/store/apps">
                  <img
                    width={150}
                    src="https://www-growth.scdn.co/static/badges/svgs/google/badge-ko.svg"
                  />
                </a>
                <a href="https://www.apple.com/kr/">
                  <img src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-ko.svg" />
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section className="part2">
          <Container className="mycloth-section">
            <Fade left duration={2100}>
              <div>
                <h1>Taking pictures of your clothes</h1>

                <h3>본인의 옷을 찍어 기록해 보세요!</h3>
                <h5>
                  사진 찍은 본인 옷의 카테고리, 보관위치, 색상 등을 입력해
                  기록해 보세요. <span className="stylist">Stylist</span> 는 그
                  데이터를 기반으로 입을 옷을 추천해 드립니다.
                </h5>
                <h6>
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    style={{ marginRight: "5px", color: "#f6c142" }}
                  />
                  사용 방법
                </h6>
                <h6>
                  ① 로그인을 한다. <br />② 본인의 옷들을 등록한다.{" "}
                  <a href="#clothRegister" onClick={openRegisterCloth}>
                    본인 옷 등록하기{" "}
                  </a>
                  <br />③ 옷들을 등록했다면, 추천 코디를 확인하여 옷을 입는다.{" "}
                  <a href="#">추천 코디 확인하기</a>
                </h6>
              </div>
            </Fade>
            <Fade right>
              <img
                width={320}
                src="images/closet.jpg"
                style={{ borderRadius: "10px", marginLeft: "60px" }}
              />
            </Fade>
          </Container>
        </section>
        {showRegister && (
          <section id="clothRegister">
            <Container>
              <form onSubmit={handleRegistration}>
                <div>
                  <div>
                    {selectedImage && (
                      <div className="cloth-images">
                        <img width={600} src={selectedImage} alt="Uploaded" />
                      </div>
                    )}
                  </div>
                  <input type="file" onChange={handleImageUpload} />
                </div>

                <div className="clothRegister-section">
                  <h2>Category</h2>
                  <h6>(선택하신 옷을 카테고리에 맞게 분류해 주세요.)</h6>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={category}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="카테고리" />
                    )}
                  />
                </div>

                <div className="clothRegister-section">
                  <h2>Color</h2>
                  <h6>
                    (선택하신 옷에서 가장 많은 비율을 차지하는 색을 선택해
                    주세요.)
                  </h6>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={color}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="색상" />
                    )}
                  />
                </div>

                <div className="clothRegister-section">
                  <h2>Storage Location</h2>
                  <h6>
                    (선택하신 옷을 평소에 어디에 보관하는지 작성해 주세요. ex)
                    옷장 2번째 칸, 내 방 옷장의 왼쪽 칸 등)
                  </h6>
                  <TextField
                    id="outlined-basic"
                    label="보관 위치"
                    variant="outlined"
                    sx={{ width: 300 }}
                  />
                </div>

                <div className="clothRegister-section">
                  <h2>Nickname</h2>
                  <h6>
                    (옷들을 구별할 수 있도록 옷의 특징을 살려 별명을 작성해
                    주세요. ex) 초록 니트, 그레이 후드티 등)
                  </h6>
                  <TextField
                    id="outlined-basic"
                    label="별명"
                    variant="outlined"
                    sx={{ width: 300 }}
                  />
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <Button type="submit" variant="contained">
                    등록
                  </Button>
                </div>
              </form>
            </Container>
          </section>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default MyCloth;
