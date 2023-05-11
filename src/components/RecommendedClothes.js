import React from "react";

const RecommendedClothes = ({ weather }) => {
  const clothingData = {
    OUTER: [
      {
        name: "얇은 가디건 이미지",
        url: "https://image.msscdn.net/images/goods_img/20190902/1139338/1139338_7_500.jpg",
      },
      {
        name: "얇은 셔츠 이미지",
        url: "https://image.msscdn.net/images/goods_img/20220113/2305844/2305844_3_500.jpg",
      },
      {
        name: "가디건 이미지",
        url: "https://image.msscdn.net/images/goods_img/20220727/2684380/2684380_1_500.jpg",
      },
      {
        name: "바람막이 이미지",
        url: "https://image.msscdn.net/images/goods_img/20230207/3064960/3064960_16831674562365_500.jpg",
      },
      {
        name: "후드집업 이미지",
        url: "https://image.msscdn.net/images/goods_img/20210105/1737051/1737051_9_500.jpg",
      },
      {
        name: "반팔 셔츠 이미지",
        url: "https://image.msscdn.net/images/goods_img/20210514/1951474/1951474_2_500.jpg",
      },
    ],
    TOP: [
      {
        name: "맨투맨 이미지",
        url: "https://image.msscdn.net/images/goods_img/20221117/2948499/2948499_11_500.jpg",
      },
      {
        name: "후드티 이미지",
        url: "https://image.msscdn.net/images/goods_img/20230116/3026638/3026638_16740283082987_500.jpg",
      },
      {
        name: "롱슬리브 이미지",
        url: "https://image.msscdn.net/images/goods_img/20220126/2331136/2331136_1_500.jpg",
      },
      {
        name: "반팔 이미지",
        url: "https://image.msscdn.net/images/goods_img/20230409/3217882/3217882_16812276591368_500.jpg",
      },
      {
        name: "얇은 니트",
        url: "https://image.msscdn.net/images/goods_img/20230201/3051494/3051494_16759214747692_500.jpg",
      },
    ],
    BOTTOM: [
      {
        name: "데님팬츠 이미지",
        url: "https://image.msscdn.net/images/goods_img/20230126/3039551/3039551_16753117564421_500.jpg",
      },
      {
        name: "코튼 팬츠 이미지",
        url: "https://image.msscdn.net/images/goods_img/20220804/2699732/2699732_1_500.jpg",
      },
      {
        name: "린넨 팬츠 이미지",
        url: "https://image.msscdn.net/images/goods_img/20230503/3275482/3275482_16831056757077_500.jpg",
      },
      {
        name: "반바지 이미지",
        url: "https://image.msscdn.net/images/goods_img/20230419/3245228/3245228_16835272427086_500.jpg",
      },
    ],
    ACCESSORIES: [
      {
        name: "볼캡 이미지",
        url: "https://image.msscdn.net/images/goods_img/20220223/2381807/2381807_11_500.jpg",
      },
    ],
  };
  let filteredClothing = {
    OUTER: [],
    TOP: [],
    BOTTOM: [],
    ACCESSORIES: [],
  };

  if (
    weather?.main.temp.toFixed(0) >= 20 &&
    weather?.main.temp.toFixed(0) <= 22
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter((image) =>
        image.name.includes("얇은 가디건")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("롱슬리브") ||
          image.name.includes("맨투맨")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님팬츠") ||
          image.name.includes("린넨 팬츠") ||
          image.name.includes("코튼 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES,
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 23 &&
    weather?.main.temp.toFixed(0) <= 27
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("반팔셔츠") || image.name.includes("얇은 셔츠")
      ),
      TOP: clothingData.TOP.filter((image) => image.name.includes("반팔")),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("반바지") ||
          image.name.includes("데님팬츠") ||
          image.name.includes("린넨 팬츠") ||
          image.name.includes("코튼 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES,
    };
  } else if (
    weather?.main.temp.toFixed(0) >= 17 &&
    weather?.main.temp.toFixed(0) <= 19
  ) {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("가디건") ||
          image.name.includes("얇은 가디건") ||
          image.name.includes("후드집업") ||
          image.name.includes("바람막이")
      ),
      TOP: clothingData.TOP.filter(
        (image) =>
          image.name.includes("후드티") ||
          image.name.includes("롱슬리브") ||
          image.name.includes("맨투맨")
      ),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("데님팬츠") ||
          image.name.includes("린넨 팬츠") ||
          image.name.includes("코튼 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES,
    };
  } else {
    filteredClothing = {
      OUTER: clothingData.OUTER.filter(
        (image) =>
          image.name.includes("반팔셔츠") || image.name.includes("얇은 셔츠")
      ),
      TOP: clothingData.TOP.filter((image) => image.name.includes("반팔")),
      BOTTOM: clothingData.BOTTOM.filter(
        (image) =>
          image.name.includes("반바지") ||
          image.name.includes("데님팬츠") ||
          image.name.includes("린넨 팬츠") ||
          image.name.includes("코튼 팬츠")
      ),
      ACCESSORIES: clothingData.ACCESSORIES,
    };
  }
  return (
    <div className="recommended-clothes-area">
      <div>
        <h1>OUTER</h1>
        {filteredClothing.OUTER.map((image, index) => (
          <img width={200} key={index} src={image.url} alt="Clothing" />
        ))}
      </div>
      <div>
        <h1>TOP</h1>
        {filteredClothing.TOP.map((image, index) => (
          <img width={200} key={index} src={image.url} alt="Clothing" />
        ))}
      </div>
      <div>
        <h1>BOTTOM</h1>
        {filteredClothing.BOTTOM.map((image, index) => (
          <img width={200} key={index} src={image.url} alt="Clothing" />
        ))}
      </div>
      <div>
        <h1>ACCESSORIES</h1>
        {filteredClothing.ACCESSORIES.map((image, index) => (
          <img width={200} key={index} src={image.url} alt="Clothing" />
        ))}
      </div>
    </div>
  );
};

export default RecommendedClothes;
