import React from "react";

const ImageText = [
  {
    image: "../assets/img/image_bg01.jpg",
    title: "애교만점 웰시코기",
    desc1: " 제목은 넥슨 풋볼 고딕 폰트입니다.",
    desc2: " 설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
  },
  {
    image: "../assets/img/image_bg02.jpg",
    title: "코카스 파니엘",
    desc1: " 제목은 넥슨 풋볼 고딕 폰트입니다.",
    desc2: " 설명부분은 넥슨 LV1 고딕 16px 140% 입니다.",
  },
];

// 컴포넌트시키는 부분
function ImageInfo({ image, title, desc1, desc2 }) {
  return (
    <article className="image">
      <div className="image__header">
        <figure className="image__figure">
          <img src={image} alt={title} />
        </figure>
      </div>
      <div className="image__body">
        <h3 className="image__title">{title}</h3>
        <p className="image__desc">
          {desc1}
          <br />
          {desc2}
        </p>
        <a href="/" className="image__btn">
          자세히 보기
        </a>
      </div>
    </article>
  );
}

function Image() {
  return (
    <section id="imageType" className="image__wrap section nexon">
      <h2>포트폴리오가 실력이다.</h2>
      <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.</p>
      <div className="image__inner container">
        {ImageText.map((text) => (
          <ImageInfo
            key={text.title}
            image={text.image}
            title={text.title}
            desc1={text.desc1}
            desc2={text.desc2}
          />
        ))}
        {/* <article className="image">
          <div className="image__header">
            <figure className="image__figure">
              <img src="assets/img/image_bg01.jpg" alt="애교만점 웰시코기" />
            </figure>
          </div>
          <div className="image__body">
            <h3 className="image__title">애교만점 웰시코기</h3>
            <p className="image__desc">
              제목은 넥슨 풋볼 고딕 폰트입니다.
              <br />
              설명부분은 넥슨 LV1 고딕 16px 140% 입니다.
            </p>
            <a href="/" className="image__btn">
              자세히 보기
            </a>
          </div>
        </article>
        <article className="image">
          <div className="image__header">
            <figure className="image__figure">
              <img src="assets/img/image_bg02.jpg" alt="코카스 파니엘" />
            </figure>
          </div>
          <div className="image__body">
            <h3 className="image__title">코카스 파니엘</h3>
            <p className="image__desc">
              제목은 넥슨 풋볼 고딕 폰트입니다.
              <br />
              설명부분은 넥슨 LV1 고딕 16px 140% 입니다.
            </p>
            <a href="/" className="image__btn yellow">
              자세히 보기
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Image;
