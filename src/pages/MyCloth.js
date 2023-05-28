import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useState } from "react";

const MyCloth = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
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

  const handleTypeChange = (event, value) => {
    setSelectedType(value);
  };

  const handleColorChange = (event, value) => {
    setSelectedColor(value);
  };

  const openRegisterCloth = () => {
    setShowRegister(true);
  };

  const category = [
    { label: "MA-1" },
    { label: "야상" },
    { label: "블루종" },
    { label: "트렌치 코트" },
    { label: "바시티 자켓" },
    { label: "플리스 자켓" },
    { label: "가죽 자켓" },
    { label: "데님 자켓" },
    { label: "롱패딩" },
    { label: "숏패딩" },
    { label: "더플 코트" },
    { label: "싱글 코트" },
    { label: "발마칸 코트" },
    { label: "더블 코트" },
    { label: "숏 코트" },
    { label: "퀼팅 자켓" },
    { label: "나트조끼" },
    { label: "얇은 가디건" },
    { label: "가디건" },
    { label: "바람막이" },
    { label: "후드집업" },
    { label: "무스탕" },
    { label: "블레이저" },
    { label: "크롭티" },
    { label: "원피스" },
    { label: "니트반팔" },
    { label: "민소매" },
    { label: "반팔 셔츠" },
    { label: "얇은 셔츠" },
    { label: "맨투맨" },
    { label: "후드티" },
    { label: "롱슬리브" },
    { label: "반팔" },
    { label: "얇은 니트" },
    { label: "니트" },
    { label: "스웻 팬츠" },
    { label: "데님 팬츠" },
    { label: "코튼 팬츠" },
    { label: "반바지" },
    { label: "린넨 팬츠" },
    { label: "슬랙스" },
    { label: "볼캡" },
    { label: "머플러" },
    { label: "비니" },
    { label: "베레모" },
    { label: "버킷햇" },
    { label: "기타" },
  ];

  const color = [
    { label: "검정색(Black)" },
    { label: "흰색(White)" },
    { label: "회색(Gray)" },
    { label: "남색(Navy)" },
    { label: "카키색(Khaki)" },
    { label: "초록색(Green)" },
    { label: "파란색(Blue)" },
    { label: "하늘색(Sky Blue)" },
    { label: "갈색(Brown)" },
    { label: "베이지색(Beige)" },
    { label: "주황색(Orange)" },
    { label: "빨간색(Red)" },
    { label: "자주색(Purple)" },
    { label: "분홍색(Pink)" },
    { label: "노란색(Yellow)" },
    { label: "버건디색(Burgundy)" },
  ];

  const handleRegistration = (event) => {
    event.preventDefault();

    if (!selectedImage || !selectedType || !selectedColor) {
      alert("모든 정보를 입력해주세요.");
      return;
    }
  };

  const renderImagePreview = () => {
    if (selectedImage) {
      return (
        <div className="cloth-images" style={{ border: "none" }}>
          <img width={600} src={selectedImage} alt="사진을 올려주세요." />
        </div>
      );
    } else {
      return (
        <div className="cloth-images" style={{ fontSize: "5rem" }}>
          <FontAwesomeIcon icon={faPlus} />
        </div>
      );
    }
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
                  <div className="cloth-images-box">{renderImagePreview()}</div>
                  <div>
                    <input type="file" onChange={handleImageUpload} />
                  </div>
                </div>

                <div className="clothRegister-section">
                  <h2>Types of Clothes</h2>
                  <h6>(옷이 어떤 종류인지 선택해 주세요.)</h6>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    onChange={handleTypeChange}
                    options={category}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="종류 *" />
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
                    onChange={handleColorChange}
                    renderInput={(params) => (
                      <TextField {...params} label="색상 *" />
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
                    required
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
                    required
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
