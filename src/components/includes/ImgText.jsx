import React, { useEffect, useState } from "react";

function ImgText() {
  const [imgtexts, setImgtexts] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://kim-eunsu.github.io/JsonFile/imgtext.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setImgtexts(result.imgtext);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  //컴포넌트 안시키고 데이터만 불러올때에는 인덱스로 불어와야함!
  return (
    <section id="imgTextType" className="image__wrap section nexon gray">
      <h2 className="ir_so">이미지 텍스트 영역</h2>
      <div className="imgText__inner container">
        <div className="txt">
          <span className="small">{imgtexts.smalltitle}</span>
          <h3 className="title">{imgtexts.title}</h3>
          <p className="desc">{imgtexts.desc}</p>
          <a href="/" className="btn">
            {imgtexts.btn}
          </a>
        </div>
        <div className="img bg1"></div>
        <div className="img bg2"></div>
      </div>
    </section>
  );
}

export default ImgText;
