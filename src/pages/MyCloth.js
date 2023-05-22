import React from 'react'
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const MyCloth = () => {
  return (
    <div className="mycloth-area">
      <header className="mycloth-header">
        <Navbar />
        <h1 className="mycloth-title">My Closet</h1>
      </header>

      <section className="mycloth-container">
        <Container>
          <section className="mycloth-section1">
            <img
              width={320}
              src="images/closet.jpg"
              style={{ borderRadius: "10px", marginRight: "60px" }}
            />
            <div>
              <h1>My Closet</h1>
              <h3>
                '옷장에서 추천'은 본인 옷장에 있는 옷으로 스타일링 해주는
                기능입니다.
              </h3>
              <h5>
                <span>Stylist</span>는 사용자의 옷장에 있는 옷들을 통해 현재
                기온 & 컬러매치와 맞는 스타일링을 해줍니다. 지금 바로 시작해
                보세요.
              </h5>
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
          </section>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default MyCloth