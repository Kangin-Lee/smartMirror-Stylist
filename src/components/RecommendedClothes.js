import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RecommendedClothes = ({ weather }) => {
  const clothingData = {
    OUTER: [
      {
        name: "MA-1",
        url: "https://image.msscdn.net/images/goods_img/20200205/1291016/1291016_1_500.jpg",
      },
      {
        name: "야상",
        url: "https://image.msscdn.net/images/goods_img/20220908/2783080/2783080_1_500.jpg",
      },
      {
        name: "블루종",
        url: "https://image.msscdn.net/images/goods_img/20220307/2403203/2403203_3_500.jpg",
      },
      {
        name: "트렌치 코트",
        url: "https://image.msscdn.net/images/goods_img/20230202/3055654/3055654_16753160225339_500.jpg",
      },
      {
        name: "바시티 자켓",
        url: "https://image.msscdn.net/images/goods_img/20220818/2724701/2724701_3_500.jpg",
      },
      {
        name: "플리스 자켓",
        url: "https://image.msscdn.net/images/goods_img/20220831/2757393/2757393_1_500.jpg",
      },
      {
        name: "가죽 자켓",
        url: "https://image.msscdn.net/images/goods_img/20200909/1593755/1593755_1_500.jpg",
      },
      {
        name: "데님 자켓",
        url: "https://image.msscdn.net/images/goods_img/20230126/3042259/3042259_16759996227713_500.jpg",
      },
      {
        name: "롱패딩",
        url: "https://image.msscdn.net/images/goods_img/20200922/1616798/1616798_4_500.jpg",
      },
      {
        name: "숏패딩",
        url: "https://image.msscdn.net/images/goods_img/20220927/2822315/2822315_2_500.jpg",
      },
      {
        name: "더플 코트",
        url: "https://image.msscdn.net/images/goods_img/20211117/2238440/2238440_1_500.jpg",
      },
      {
        name: "싱글 코트",
        url: "https://image.msscdn.net/images/goods_img/20221007/2848683/2848683_1_500.jpg",
      },
      {
        name: "발마칸 코트",
        url: "https://image.msscdn.net/images/goods_img/20220908/2782764/2782764_1_500.jpg",
      },
      {
        name: "더블 코트",
        url: "https://image.msscdn.net/images/goods_img/20220908/2782723/2782723_1_500.jpg",
      },
      {
        name: "숏 코트",
        url: "https://image.msscdn.net/images/goods_img/20220914/2790412/2790412_1_500.jpg",
      },
      {
        name: "퀼팅 자켓",
        url: "https://image.msscdn.net/images/goods_img/20220822/2731644/2731644_3_500.jpg",
      },
      {
        name: "니트조끼",
        url: "https://image.msscdn.net/images/goods_img/20230327/3180907/3180907_16798874329547_500.jpg",
      },
      {
        name: "얇은 가디건",
        url: "https://image.msscdn.net/images/goods_img/20190902/1139338/1139338_7_500.jpg",
      },
      {
        name: "가디건",
        url: "https://image.msscdn.net/images/goods_img/20220727/2684380/2684380_1_500.jpg",
      },
      {
        name: "바람막이",
        url: "https://image.msscdn.net/images/goods_img/20230207/3064960/3064960_16831674562365_500.jpg",
      },
      {
        name: "후드집업",
        url: "https://image.msscdn.net/images/goods_img/20210105/1737051/1737051_9_500.jpg",
      },
      {
        name: "무스탕",
        url: "https://image.msscdn.net/images/goods_img/20181101/895995/895995_4_500.jpg",
      },
      {
        name: "블레이저",
        url: "https://image.msscdn.net/images/goods_img/20230214/3082210/3082210_16766029210433_500.jpg",
      },
    ],
    TOP: [
      {
        name: "크롭티",
        url: "https://image.msscdn.net/images/goods_img/20220523/2574959/2574959_2_500.jpg",
      },
      {
        name: "원피스",
        url: "https://image.msscdn.net/images/goods_img/20220705/2647699/2647699_2_500.jpg",
      },
      {
        name: "니트 반팔",
        url: "https://image.msscdn.net/images/prd_img/20210510/1943088/detail_1943088_5_500.jpg",
      },
      {
        name: "민소매",
        url: "https://image.msscdn.net/images/goods_img/20230314/3147631/3147631_16794712396034_500.jpg",
      },
      {
        name: "반팔 셔츠",
        url: "https://image.msscdn.net/images/goods_img/20210514/1951474/1951474_2_500.jpg",
      },
      {
        name: "얇은 셔츠",
        url: "https://image.msscdn.net/images/goods_img/20190326/994588/994588_16764335228041_500.jpg",
      },
      {
        name: "맨투맨",
        url: "https://image.msscdn.net/images/goods_img/20221117/2948499/2948499_11_500.jpg",
      },
      {
        name: "후드티",
        url: "https://image.msscdn.net/images/goods_img/20230116/3026638/3026638_16740283082987_500.jpg",
      },
      {
        name: "롱슬리브",
        url: "https://image.msscdn.net/images/goods_img/20230323/3174970/3174970_16817829634482_500.jpg",
      },
      {
        name: "반팔",
        url: "https://image.msscdn.net/images/goods_img/20230409/3217882/3217882_16812276591368_500.jpg",
      },
      {
        name: "얇은 니트",
        url: "https://image.msscdn.net/images/goods_img/20230201/3051494/3051494_16759214747692_500.jpg",
      },
      {
        name: "니트",
        url: "https://image.msscdn.net/images/goods_img/20210830/2098128/2098128_1_500.jpg",
      },
    ],
    BOTTOM: [
      {
        name: "스웻 팬츠",
        url: "https://image.msscdn.net/images/goods_img/20220218/2370565/2370565_1_500.jpg",
      },
      {
        name: "데님 팬츠",
        url: "https://image.msscdn.net/images/goods_img/20230126/3039551/3039551_16753117564421_500.jpg",
      },
      {
        name: "코튼 팬츠",
        url: "https://image.msscdn.net/images/goods_img/20220804/2699732/2699732_1_500.jpg",
      },
      {
        name: "린넨 팬츠",
        url: "https://image.msscdn.net/images/goods_img/20230503/3275482/3275482_16831056757077_500.jpg",
      },
      {
        name: "반바지",
        url: "https://image.msscdn.net/images/goods_img/20230419/3245228/3245228_16835272427086_500.jpg",
      },
      {
        name: "슬랙스",
        url: "https://image.msscdn.net/images/goods_img/20220829/2750605/2750605_1_500.jpg",
      },
    ],
    ACCESSORIES: [
      {
        name: "볼캡",
        url: "https://image.msscdn.net/images/goods_img/20220223/2381807/2381807_11_500.jpg",
      },
      {
        name: "안경",
        url: "https://image.msscdn.net/images/goods_img/20220727/2685183/2685183_1_500.jpg",
      },
      {
        name: "마스크",
        url: "https://image.msscdn.net/images/goods_img/20211007/2167202/2167202_1_500.jpg",
      },
      {
        name: "우산",
        url: "https://image.msscdn.net/images/goods_img/20220623/2631946/2631946_2_500.jpg",
      },
      {
        name: "시계",
        url: "https://image.msscdn.net/images/goods_img/20210610/1990393/1990393_1_500.jpg",
      },
      {
        name: "머플러",
        url: "https://image.msscdn.net/images/goods_img/20221124/2958994/2958994_1_500.jpg",
      },
      {
        name: "비니",
        url: "https://image.msscdn.net/images/goods_img/20200724/1526859/1526859_1_500.jpg",
      },
      {
        name: "베레모",
        url: "https://image.msscdn.net/images/goods_img/20230424/3255283/3255283_16831743856328_500.jpg",
      },
      {
        name: "버킷햇",
        url: "https://image.msscdn.net/images/goods_img/20210511/1945782/1945782_2_500.jpg",
      },
    ],
  };

  const recommendedOutfit = {
    over28: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/17949/detail_17949_1_500.jpg?202305202305",
        item: ["#민소매 ", "#데님 팬츠 ", "#볼캡 ", "#크로스백 ", "#스니커즈"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/23138/detail_23138_1_500.jpg?202305202305",
        item: ["#크롭티 ", "#데님 팬츠 ", "#볼캡 ", "#에코백 ", "#스니커즈"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/23190/detail_23190_1_500.jpg?202305202305",
        item: ["#반팔 ", "#반바지 ", "#볼캡 ", "#백팩 ", "#샌들"],
      },
    ],
    between2327: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/22135/detail_22135_1_500.jpg?202305202305",
        item: [
          "#니트조끼 ",
          "#반팔 ",
          "#슬랙스 ",
          "#토트백 ",
          "#구두 ",
          "#안경",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22975/detail_22975_1_500.jpg?202305202305",
        item: [
          "#반팔 셔츠 ",
          "#반팔 ",
          "#코튼 팬츠 ",
          "#단화 ",
          "#크로스백 ",
          "#안경",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22950/detail_22950_1_500.jpg?202305202305",
        item: ["#니트 반팔 ", "#슬랙스 ", "#토트백 ", "#구두"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22905/detail_22905_1_500.jpg?202305202305",
        item: ["#원피스 ", "#단화 ", "#에코백 ", "#안경"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/23151/detail_23151_1_500.jpg?202305202305",
        item: ["#반팔 ", "#반바지 ", "#백팩 ", "#볼캡 ", "#스니커즈"],
      },
    ],
    between2022: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/22265/detail_22265_1_500.jpg?202305210005",
        item: ["#롱슬리브 ", "#데님 팬츠 ", "#안경 ", "#스니커즈"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22630/detail_22630_1_500.jpg?202305210005",
        item: [
          "#얇은 셔츠 ",
          "#반팔 ",
          "#데님 팬츠 ",
          "#안경 ",
          "#토트백 ",
          "#단화",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22040/detail_22040_1_500.jpg?202305210005",
        item: ["#맨투맨 ", "#데님 팬츠 ", "#볼캡 ", "#백팩 ", "#스니커즈"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22225/detail_22225_1_500.jpg?202305210005",
        item: ["#후드티 ", "#데님 팬츠 ", "#백팩 ", "#볼캡 ", "#스니커즈"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22218/detail_22218_1_500.jpg?202305210005",
        item: ["#맨투맨 ", "#코튼 팬츠 ", "#크로스백 ", "#볼캡 ", "#스니커즈"],
      },
    ],
    between1719: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/21939/detail_21939_1_500.jpg?202305210005",
        item: [
          "#바람막이 ",
          "#반팔 ",
          "#데님 팬츠 ",
          "#볼캡 ",
          "#크로스백 ",
          "#스니커즈 ",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22056/detail_22056_1_500.jpg?202305210005",
        item: [
          "#데님 자켓 ",
          "#반팔 ",
          "#데님 팬츠 ",
          "#볼캡 ",
          "#스니커즈 ",
          "#숄더백",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21987/detail_21987_1_500.jpg?202305210005",
        item: ["#후드티 ", "#스웻 팬츠 ", "#볼캡 ", "#백팩 ", "#스니커즈"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22104/detail_22104_1_500.jpg?202305210005",
        item: [
          "#얇은 가디선 ",
          "#반팔 ",
          "#스웻 팬츠 ",
          "#볼캡 ",
          "#크로스백 ",
          "#스니커즈",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22040/detail_22040_1_500.jpg?202305210005",
        item: ["#맨투맨 ", "#데님 팬츠 ", "#볼캡 ", "#백팩 ", "#스니커즈"],
      },
    ],
    between1216: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/21846/detail_21846_1_500.jpg?202305210005",
        item: [
          "#후드집업 ",
          "#롱슬리브 ",
          "#데님 팬츠 ",
          "#볼캡 ",
          "#숄더백 ",
          "#스니커즈",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22189/detail_22189_1_500.jpg?202305210005",
        item: ["#얇은 니트 ", "#데님 팬츠 ", "#크로스백 ", "#단화"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21978/detail_21978_1_500.jpg?202305210005",
        item: ["#맨투맨 ", "#데님 팬츠 ", "#안경 ", "#토트백 ", "#컨버스화"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/22164/detail_22164_1_500.jpg?202305210005",
        item: [
          "#롱슬리브 ",
          "#나일론 팬츠 ",
          "#백팩 ",
          "#시계 ",
          "#볼캡 ",
          "#스포츠 스니커즈",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21939/detail_21939_1_500.jpg?202305210005",
        item: [
          "#바람막이 ",
          "#반팔 ",
          "#데님 팬츠 ",
          "#볼캡 ",
          "#크로스백 ",
          "#스니커즈",
        ],
      },
    ],
    between0911: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/22042/detail_22042_1_500.jpg?202305210005",
        item: [
          "#MA-1 ",
          "#반팔 ",
          "#데님 팬츠 ",
          "#스포츠 스니커즈 ",
          "#크로스백",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21896/detail_21896_1_500.jpg?202305210005",
        item: [
          "#바시티 자켓 ",
          "#맨투맨 ",
          "#데님 팬츠 ",
          "#볼캡 ",
          "#크로스백 ",
          "#스니커즈",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/19114/detail_19114_1_500.jpg?202305210005",
        item: ["#야상 ", "#니트 ", "#코튼 팬츠 ", "#토트백 ", "#스니커즈화"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21764/detail_21764_1_500.jpg?202305210005",
        item: [
          "#트렌치 코트 ",
          "#셔츠 ",
          "#데님 팬츠 ",
          "#숄더백 ",
          "#구두 ",
          "#목걸이",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21359/detail_21359_1_500.jpg?202305210005",
        item: [
          "#플리스 자켓 ",
          "#맨투맨 ",
          "#데님 팬츠 ",
          "#백팩 ",
          "#안경 ",
          "#스니커즈",
        ],
      },
    ],
    between0508: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/21536/detail_21536_1_500.jpg?202305210005",
        item: [
          "#퀼팅 자켓 ",
          "#후드티 ",
          "#스웻 팬츠 ",
          "#볼캡 ",
          "#크로스백 ",
          "#스니커즈",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21160/detail_21160_1_500.jpg?202305210005",
        item: [
          "#숏패딩 ",
          "#맨투맨 ",
          "#데님 팬츠 ",
          "#크로스백 ",
          "#볼캡 ",
          "#스니커즈화",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/20712/detail_20712_1_500.jpg?202305210005",
        item: [
          "#숏 코트 ",
          "#니트 ",
          "#데님 팬츠 ",
          "#볼캡 ",
          "#백팩 ",
          "#스니커즈",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21134/detail_21134_1_500.jpg?202305210005",
        item: ["#무스탕 ", "#니트 ", "#데님 팬츠 ", "#크로스백 ", "#구두"],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21225/detail_21225_1_500.jpg?202305210005",
        item: [
          "#발마칸 코트 ",
          "#니트 ",
          "#데님 팬츠 ",
          "#안경 ",
          "#숄더백 ",
          "#스니커즈",
        ],
      },
    ],
    under04: [
      {
        url: "https://image.msscdn.net/images/codimap/detail/20847/detail_20847_1_500.jpg?202305210005",
        item: [
          "#롱패딩 ",
          "#후드티 ",
          "#데님 팬츠 ",
          "#백팩 ",
          "#볼캡 ",
          "#스니커즈",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/20810/detail_20810_1_500.jpg?202305210005",
        item: [
          "#발마칸 코트 ",
          "#니트 ",
          "#데님 팬츠 ",
          "#숄더백 ",
          "#안경 ",
          "#단화",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/20615/detail_20615_1_500.jpg?202305210005",
        item: [
          "#숏 코트 ",
          "#니트 ",
          "#셔츠 ",
          "#코듀로이 팬츠 ",
          "#숄더백 ",
          "#머플러 ",
          "#단화",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/21212/detail_21212_1_500.jpg?202305210005",
        item: [
          "#숏패딩 ",
          "#후드티 ",
          "#데님 팬츠 ",
          "#비니 ",
          "#스포츠 스니커즈 ",
          "#팔찌",
        ],
      },
      {
        url: "https://image.msscdn.net/images/codimap/detail/20638/detail_20638_1_500.jpg?202305210005",
        item: [
          "#싱글 코트 ",
          "#니트 ",
          "#셔츠 ",
          "#슬랙스 ",
          "#구두 ",
          "#머플러 ",
          "#크로스백",
        ],
      },
    ],
  };

  console.log(recommendedOutfit.between2022.map((item) => item.item[0]));
  let recommendedItem = () => {
    if (weather?.main.temp.toFixed(0) >= 28) {
      return (
        <>
          {recommendedOutfit.over28.map((item, index) => (
            <img key={index} width={250} src={item.url} />
          ))}
        </>
      );
    } else if (
      weather?.main.temp.toFixed(0) >= 23 &&
      weather?.main.temp.toFixed(0) <= 27
    ) {
      return (
        <div>
          {recommendedOutfit.between2327.map((item, index) => (
            <div className="recommendedOutfit-items">
              <img key={index} width={250} src={item.url} />
              <div style={{ margin: "5px" }}>{item.item}</div>
            </div>
          ))}
        </div>
      );
    } else if (
      weather?.main.temp.toFixed(0) >= 20 &&
      weather?.main.temp.toFixed(0) <= 22
    ) {
      return (
        <div>
          {recommendedOutfit.between2022.map((item, index) => (
            <div className="recommendedOutfit-items">
              <img key={index} width={250} src={item.url} />
              <div style={{ margin: "5px" }}>{item.item}</div>
            </div>
          ))}
        </div>
      );
    } else if (
      weather?.main.temp.toFixed(0) >= 17 &&
      weather?.main.temp.toFixed(0) <= 19
    ) {
      return (
        <>
          {recommendedOutfit.between1719.map((item, index) => (
            <img key={index} width={250} src={item.url} />
          ))}
        </>
      );
    } else if (
      weather?.main.temp.toFixed(0) >= 12 &&
      weather?.main.temp.toFixed(0) <= 16
    ) {
      return (
        <>
          {recommendedOutfit.between1216.map((item, index) => (
            <img key={index} width={250} src={item.url} />
          ))}
        </>
      );
    } else if (
      weather?.main.temp.toFixed(0) >= 9 &&
      weather?.main.temp.toFixed(0) <= 11
    ) {
      return (
        <>
          {recommendedOutfit.between0911.map((item, index) => (
            <img key={index} width={250} src={item.url} />
          ))}
        </>
      );
    } else if (
      weather?.main.temp.toFixed(0) >= 5 &&
      weather?.main.temp.toFixed(0) <= 8
    ) {
      return (
        <>
          {recommendedOutfit.between0508.map((item, index) => (
            <img key={index} width={250} src={item.url} />
          ))}
        </>
      );
    } else {
      return (
        <>
          {recommendedOutfit.under04.map((item, index) => (
            <img key={index} width={250} src={item.url} />
          ))}
        </>
      );
    }
  };

  let filteredClothing = {
    OUTER: [],
    TOP: [],
    BOTTOM: [],
    ACCESSORIES: [],
  };

  if (weather?.main.temp.toFixed(0) >= 28) {
    filteredClothing = {
      OUTER: null,
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("민소매") ||
          image.name.includes("크롭티") ||
          image.name.includes("원피스") ||
          image.name.includes("반팔")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("반바지") ||
          image.name.includes("린넨 팬츠") ||
          image.name.includes("스웻 팬츠") ||
          image.name.includes("데님 팬츠") ||
          image.name.includes("슬랙스")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("안경")
      ),
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 23 &&
    weather?.main.temp.toFixed(0) <= 27
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter((image) =>
        image.name.includes("니트조끼")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("반팔 셔츠") ||
          image.name.includes("반팔") ||
          image.name.includes("니트 반팔") ||
          image.name.includes("원피스") ||
          image.name.includes("크롭티") ||
          image.name.includes("롱슬리브") ||
          image.name.includes("얇은 셔츠")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("반바지") ||
          image.name.includes("린넨 팬츠") ||
          image.name.includes("코튼 팬츠") ||
          image.name.includes("데님 팬츠") ||
          image.name.includes("스웻 팬츠") ||
          image.name.includes("슬랙스")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("안경")
      ),
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 20 &&
    weather?.main.temp.toFixed(0) <= 22
  ) {
    filteredClothing = {
      OUTER: null,
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("롱슬리브") ||
          image.name.includes("맨투맨") ||
          image.name.includes("얇은 셔츠")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님 팬츠") ||
          image.name.includes("코튼 팬츠") ||
          image.name.includes("슬랙스") ||
          image.name.includes("스웻 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("안경")
      ),
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 17 &&
    weather?.main.temp.toFixed(0) <= 19
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("얇은 가디건") ||
          image.name.includes("데님 자켓") ||
          image.name.includes("블레이저") ||
          image.name.includes("후드집업") ||
          image.name.includes("바람막이")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("롱슬리브") ||
          image.name.includes("얇은 니트") ||
          image.name.includes("맨투맨")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님 팬츠") ||
          image.name.includes("코튼 팬츠") ||
          image.name.includes("슬랙스") ||
          image.name.includes("스웻 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("안경")
      ),
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 12 &&
    weather?.main.temp.toFixed(0) <= 16
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("얇은 가디건") ||
          image.name.includes("데님 자켓") ||
          image.name.includes("블레이저") ||
          image.name.includes("후드집업") ||
          image.name.includes("바람막이")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("맨투맨") ||
          image.name.includes("얇은 니트") ||
          image.name.includes("롱슬리브")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님 팬츠") ||
          image.name.includes("코튼 팬츠") ||
          image.name.includes("슬랙스") ||
          image.name.includes("스웻 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("안경")
      ),
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 9 &&
    weather?.main.temp.toFixed(0) <= 11
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("가디건") ||
          image.name.includes("블루종") ||
          image.name.includes("데님 자켓") ||
          image.name.includes("블레이저") ||
          image.name.includes("바시티 자켓") ||
          image.name.includes("야상") ||
          image.name.includes("MA-1") ||
          image.name.includes("트렌치 코트") ||
          image.name.includes("플리스 자켓") ||
          image.name.includes("퀼팅 자켓") ||
          image.name.includes("가죽 자켓")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("맨투맨") ||
          image.name.includes("니트")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님 팬츠") ||
          image.name.includes("스웻 팬츠") ||
          image.name.includes("코튼 팬츠") ||
          image.name.includes("슬랙스")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("안경")
      ),
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 5 &&
    weather?.main.temp.toFixed(0) <= 8
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("숏패딩") ||
          image.name.includes("더플 코트") ||
          image.name.includes("싱글 코트") ||
          image.name.includes("발마칸 코트") ||
          image.name.includes("더블 코트") ||
          image.name.includes("무스탕") ||
          image.name.includes("퀼팅 자켓") ||
          image.name.includes("숏 코트")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("맨투맨") ||
          image.name.includes("니트")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님 팬츠") ||
          image.name.includes("스웻 팬츠") ||
          image.name.includes("코튼 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("베레모") ||
          image.name.includes("비니") ||
          image.name.includes("안경")
      ),
    };
  } else {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("롱패딩") ||
          image.name.includes("숏패딩") ||
          image.name.includes("더플 코트") ||
          image.name.includes("싱글 코트") ||
          image.name.includes("발마칸 코트") ||
          image.name.includes("더블 코트") ||
          image.name.includes("숏 코트")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("맨투맨") ||
          image.name.includes("니트")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님 팬츠") ||
          image.name.includes("스웻 팬츠") ||
          image.name.includes("코튼 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES.filter(
        (image) =>
          image.name.includes("볼캡") ||
          image.name.includes("버킷햇") ||
          image.name.includes("시계") ||
          image.name.includes("베레모") ||
          image.name.includes("머플러") ||
          image.name.includes("비니") ||
          image.name.includes("안경")
      ),
    };
  }
  return (
    <div className="recommended-clothes-area">
      <div className="recommended-clothes-text-area">
        <span>Today's Outfit</span>
        <Flip top>
          <div className="recommended-clothes-text">
            오늘 무슨 옷을 입어야 할지 고민이신가요? Today's Outfit(오늘의
            착장)은 현재 기온, 미세먼지, 강수량 등의 조건 등을 AI가 판단하여
            가장 알맞는 옷차림을 추천해 주는 기능입니다.
          </div>
        </Flip>
      </div>

      <div>
        <h1>OUTER</h1>
        <div className="category-area">
          {filteredClothing.OUTER ? (
            filteredClothing.OUTER.map((image, index) => (
              <Fade right delay={index === 0 ? 0 : index * 200} key={index}>
                <div className="category">
                  <img width={200} key={index} src={image.url} alt="Clothing" />
                  <div>{image.name}</div>
                </div>
              </Fade>
            ))
          ) : (
            <div className="not-found">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ marginRight: "5px", color: "#ff0000" }}
              />
              해당 없음
            </div>
          )}
        </div>
      </div>
      <div>
        <h1>TOP</h1>
        <div className="category-area">
          {filteredClothing.TOP.map((image, index) => (
            <Fade right delay={index === 0 ? 0 : index * 200} key={index}>
              <div className="category">
                <img width={200} key={index} src={image.url} alt="Clothing" />
                <div>{image.name}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <div>
        <h1>BOTTOM</h1>
        <div className="category-area">
          {filteredClothing.BOTTOM.map((image, index) => (
            <Fade right delay={index === 0 ? 0 : index * 200} key={index}>
              <div className="category">
                <img width={200} key={index} src={image.url} alt="Clothing" />
                <div>{image.name}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      <div>
        <h1>ACCESSORIES</h1>
        <div className="category-area">
          {filteredClothing.ACCESSORIES.map((image, index) => (
            <Fade right delay={index === 0 ? 0 : index * 200} key={index}>
              <div className="category">
                <img width={200} key={index} src={image.url} alt="Clothing" />
                <div>{image.name}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      {/* 추천 착장============================================================ */}
      <div>
        <h1>Recommended Outfit</h1>
        {recommendedItem()}
        <div className="category-area"></div>
      </div>

      <div className="goTo-mycloth">
        <div>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            style={{ marginRight: "5px", color: "#f6c142" }}
          />
          추천해드린 옷이 현재 본인의 옷장에 없으신가요?
        </div>
        <div>
          <Link to="/mycloth">'옷장에서 추천'으로 바로가기</Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedClothes;
