import React, { useEffect, useState } from "react";

//제일 바깥쪽에 있는 부분: function Image(){}
function Image() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://kim-eunsu.github.io/JsonFile/image.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setImages(result.image);
        console.log(result);
      })
      .then((error) => console.log("error", error));
  }, []);

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

  return (
    <section id="imageType" className="image__wrap section nexon">
      <h2>포트폴리오가 실력이다.</h2>
      <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.</p>
      <div className="image__inner container">
        {images.map((text) => (
          <ImageInfo
            key={text.title}
            image={text.image}
            title={text.title}
            desc1={text.desc1}
            desc2={text.desc2}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
