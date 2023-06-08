import React from "react";
import { Container } from "react-bootstrap";
import Colors from "../components/Colors";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../components/Footer";
import Flip from "react-reveal/Flip";
import Navbar from "../components/Navbar";

const choice = {
  BLACK: {
    name: "black",
    text: "블랙 색상은 무채색으로 대부분의 색상과 잘 어울립니다. 무채색은 포인트 컬러를 이용해 그 색을 더욱 돋보이게 하여 개성이나 매력을 어필하는 역할도 합니다. 또한 화이트가 어떤 색상과도 잘 녹아든다면 블랙은 어떤 색상이든 잡아먹는 성질이 있다는걸 이해한다면 코디가 쉬워지실 것입니다. 그럼 블랙과 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 블랙과 잘 어울리는 색상은 블랙, 화이트, 카키, 블루, 그린 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["BLACK", "WHITE", "KHAKI", "BLUE", "GREEN"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6459fc276b81f.jpg?20230509165448",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_64584fb90dc4c.jpg?20230508111555",
      "https://image.msscdn.net/mfile_s01/_street_images/89563/street_641a99c3db4d8.jpg?20230322164101",
      "https://image.msscdn.net/mfile_s01/_street_images/89813/street_642644d2bd280.jpg?20230331114554",
      "https://image.msscdn.net/mfile_s01/_street_images/89541/street_641a585bc5da5.jpg?20230321164156",
    ],
  },
  WHITE: {
    name: "white",
    text: "화이트 색상은 무채색으로 대부분의 색상과 잘 어울립니다. 무채색은 포인트 컬러를 이용해 그 색을 더욱 돋보이게 하여 개성이나 매력을 어필하는 역할도 합니다. 그럼 화이트와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 화이트와 잘 어울리는 색상은 블랙, 블루, 베이지, 카키, 그레이 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["BLACK", "BLUE", "BEIGE", "KHAKI", "GRAY"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6459bae8154b9.jpg?20230509131331",
      "https://image.msscdn.net/mfile_s01/_street_images/88633/street_63f2cb4d5ab91.jpg?20230220111422",
      "https://image.msscdn.net/mfile_s01/_street_images/88630/street_63f2cb718bb4b.jpg?20230220112327",
      "https://image.msscdn.net/mfile_s01/_street_images/87804/street_63c5dcc8392e3.jpg?",
      "https://image.msscdn.net/mfile_s01/_street_images/87299/street_63b3aca85280e.jpg?",
    ],
  },
  GRAY: {
    name: "gray",
    text: "그레이 색상은 누가 입어도 잘 어울리는 매력적인 색상입니다. 얼굴빛에 맞추어 밝은 톤을 선택하면 세련된 느낌을 살리 수 있고, 블랙에 가까운 어두운 톤을 선택하면 그 어떤 서브 아이템과 매치해도 자연스럽게 녹아드는 특징을 가졌습니다. 그럼 그레이와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 그레이와 잘 어울리는 색상은 그레이, 네이비, 베이지, 블루, 카키 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["GRAY", "NAVY", "BEIGE", "BLUE", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_602cdba8c7499.jpg?20210218101843",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_60778451189ae.jpg?20210415104456",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6424d4602b2d1.jpg?20230330091800",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_62a9535893256.jpg?20220615131103",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_627c6c76eab15.jpg?20220512112204",
    ],
  },
  NAVY: {
    name: "navy",
    text: "네이비 색상은 쿨톤에 속하며 겨울이나 여름을 대표하는 색상입니다. 블루 계열의 특성인 '차분한 이미지'는 코디를 무난하게 연출할 수 있게 도와줘 호불호없이 남녀노소 즐겨입는 색상입니다. 그럼 네이비와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 네이비와 잘 어울리는 색상은 그레이, 블루, 베이지, 크림, 카키 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["GRAY", "BLUE", "BEIGE", "CREAM", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6423efff6dbe5.jpg?20230329170029",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_642134029b966.jpg?20230327152344",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_61024bdcd7dd6.jpg?20210729162853",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6419643b693e9.jpg?20230322080010",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_625e744ab30b5.jpg?20220419175240",
    ],
  },
  KHAKI: {
    name: "khaki",
    text: "카키 색상은 올리브 컬러로 보일 때도 있고 브라운 컬러로 보일 때도 있습니다. 단독으로 입었을 때와 함께 매치한 서브 아이템의 컬러에 따라 따뜻하거나 차가운 무드를 연출할 수 있어 잘만 활용하면 실용적이 컬러라고 말할 수 있겠습니다. 그럼 카키와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 카키와 잘 어울리는 색상은 그레이, 블루, 베이지, 블랙, 브라운 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["GRAY", "BLUE", "BEIGE", "BLACK", "BROWN"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_636865d7d34ac.jpg?20221107105827",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_5db24e2975ef2.png?20200807083343",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_622b075e452bb.jpg?20220311175923",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_62382b61df3a2.jpg?20220321170205",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_64017233f1c38.jpg?20230303135701",
    ],
  },
  BEIGE: {
    name: "beige",
    text: "베이지 색상은 따뜻하고 포근한 매력을 지녔습니다. 그렇기 때문에 사계절 모두 활용 가능하며 스트릿부터, 캐주얼, 포멀까지 다양한 스타일에 스며들 수 있습니다. 또한, 베이지는 브랜드에서 액세서리, 상의, 하의, 아우터 등 아이템의 전반적인 부분을 모두 아우르는 컬러이기도 합니다. 그럼 베이지와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 베이지와 잘 어울리는 색상은 브라운, 네이비, 크림, 블랙, 블루 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["BROWN", "NAVY", "CREAM", "BLACK", "BLUE"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_64263006019be.jpg?20230331100026",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_641b97d735db9.jpg?20230323091344",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_64085e686693b.jpg?20230309094209",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_641177b173985.jpg?20230315164703",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_640eea4b8f570.jpg?20230314084259",
    ],
  },
  BROWN: {
    name: "brown",
    text: "브라운 색상은 가을하면 떠오르는 대표적인 색상이며 해가 바뀌어도 유행을 타지 않는 색상입니다. 그럼 브라운과 잘 어울리는 색상 몇 가지를 추천해 드리겠습니다. 브라운과 잘 어울리는 색상으로는 베이지, 블루, 크림, 블랙, 카키 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["BEIGE", "BLUE", "CREAM", "BLACK", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_613ff3267be21.jpg?20210914102353",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6369c710c0f9d.jpg?20221109141831",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_632a6969f12c9.jpg?20220921103818",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6422394c0ee83.jpg?20230328095633",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_636c8ff4e8cfc.jpg?20221110145034",
    ],
  },
  BLUE: {
    name: "blue",
    text: "블루 색상은 짙은 바다를 연상시켜 시각적으로 청량감을 불어넣어줍니다. 또 클래식 블루는 어떤 컬러와 매치하느냐에 따라 변화무쌍하게 분위기를 변신시킵니다. 깔끔하면서 클래식한 느낌을 한층 더 돋이게 하고 싶다면 화이트를, 모던한 스타일을 원한다면 그레이와 블랙과 같은 모노톤을 더하면 좋습니다. 그럼 블루와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 블루와 잘 어울리는 색상은 베이지, 화이트, 그레이, 블랙, 카키 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["BEIGE", "WHITE", "GRAY", "BLACK", "KHAKI"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63854fa89b144.jpg?20221129091812",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63f43d872e728.jpg?20230221131038",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_638d6f8021a84.jpg?20221205131240",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63450f73b563c.jpg?20221011155047",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6425463659349.jpg?20230330213730",
    ],
  },
  GREEN: {
    name: "green",
    text: "그린 색상은 마음까지 환해지는 느낌, 머릿속을 정화하는 느낌의 특별한 감성을 지녔습니다. 또한, 그 어떤 날씨와 만나도 하루를 리프레시하도록 도와주는 능력을 가지고 있습니다. 그린 색상은 심플한 톤부터 스트릿 무드까지 다양한 모습으로 모든 스타일에 찰떡같이 어울리는 컬러입니다. 그럼 그린과 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 그린과 잘 어울리는 색상으로는 베이지, 블루, 화이트, 블랙, 그레이 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["BEIGE", "BLUE", "WHITE", "BLACK", "GRAY"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_61f34772f0cd5.jpg?20220128132155",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6423983490a6a.jpg?20230329105652",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_628d81d04cfc1.jpg?20220525101226",
      "https://image.msscdn.net/mfile_s01/_street_images/75408/street_616788dd4e7a7.jpg?20211014103926",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_62427f31b04c7.jpg?20220329133823",
    ],
  },
  BURGUNDY: {
    name: "burgundy",
    text: "버건디 색상은 활동적이고 힙한 스트릿 무드에 포인트 컬러가 되어주기 때문에 주로 스트릿 무드의 아이템을 제안하는 브랜드에서 사용됩니다. 버건디 색상은 통통 튀는 컬러와 매치해도 조화롭게 어우러져 효자 색상 역할을 하기도 합니다. 또한, 다양한 소재와 패턴 그리고 실루엣을 통해 우아한 매력을 부각할 수도 있습니다. 그럼 버건디와 잘 어울리는 몇 가지 색상을 추천해 드리겠습니다. 버건디와 잘 어울리는 색상으로는 베이지, 네이비, 카키, 블랙, 그레이 등이 있습니다. 사진에 마우스를 올려 스타일을 확대해 보세요!",
    combination: ["BEIGE", "NAVY", "KHAKI", "BLACK", "GRAY"],
    img: [
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_6319745e44027.jpg?20220913143355",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_633e51766b29a.jpg?20221006131717",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_63e5bb44845a4.jpg?20230210130149",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_61adac999e0b5.jpg?20211206174508",
      "https://image.msscdn.net/mfile_s01/_shopstaff/view.staff_633cfee70580d.jpg?20221005132658",
    ],
  },
};

const ColorMatch = () => {
  const [userSelect, setUserSelect] = useState(choice[0]);
  const [selectColor, setSelectColor] = useState(false);

  const color = [
    "BLACK",
    "WHITE",
    "GRAY",
    "NAVY",
    "KHAKI",
    "BEIGE",
    "BROWN",
    "BLUE",
    "GREEN",
    "BURGUNDY",
  ];

  const colorPoint = (userChoice) => {
    setUserSelect(choice[userChoice.item]);
    setSelectColor(true);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className="colormatch-header">
        <Navbar />
        <h1 className="colormatch-title">Color Match</h1>
      </div>
      <div className="recommend-video-area">
        <Container className="recommend-color-video">
          <div>
            <span className="colormatch-logo">Stylist</span>
            <span className="video-text">가 준비한 컬러매치 영상</span>
          </div>
          <Carousel responsive={responsive} className="video-content">
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/GCcqsNWU_LE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/C_y3QKHqhF4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/7kKWhKvXxxc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/vWjUWRe219Q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/b1iCLXDFhgc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/maf2-AwvUkY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/MvsrlCFJJNE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="320"
                height="181"
                src="https://www.youtube.com/embed/O_IUHkcG3eo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Carousel>
        </Container>
      </div>
      <div className="colormatch">
        <Container>
          <div className="colormatch-text">
            <h3 style={{ fontFamily: "Comfortaa, cursive" }}>Palette</h3>
            <Flip top>
              <p className="colormatch-explain">
                아직도 컬러 매치가 어려우신가요? <br /> 지금 바로 팔레트에서
                원하는 색상을 선택해 보세요! <br /> 스타일리스트가 그 색과
                어울리는 색을 추천해드립니다.
              </p>
            </Flip>
            <p>
              ※ 팔레트에 있는 색상은 옷감에 많이 사용되는 10가지 색상입니다.
            </p>
          </div>

          <div className="palette">
            {color.map((item) => (
              <div className="palette-color">
                <div className="color-border">
                  <Flip top>
                    <div
                      className={item}
                      onClick={() => colorPoint({ item })}
                    ></div>
                  </Flip>
                </div>
                <h6>{item}</h6>
              </div>
            ))}
          </div>

          <Colors userSelect={userSelect} selectColor={selectColor} />
          <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            * 컬러센서로 현재 가지고 있는 옷의 컬러매치 추천 받기{" "}
            <a href="https://color-client.netlify.app/">
              '컬러 센서로 추천' 바로 가기
            </a>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ColorMatch;
