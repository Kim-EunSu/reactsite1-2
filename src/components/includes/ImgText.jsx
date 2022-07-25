import React from "react";

//데이터 배열 저장
const ImgTextInfo = [
  {
    smalltitle: "이미지/텍스트 유형",
    title: "유용한 사이트",
    desc: "사이트 제작에 있어 이미지와 텍스트를 혼합해서 사용하는 경우가 많다. 기본 레이아웃은 동일하기 때문에 이미지나 배치에 따라서 느낌은 얼마든지 다르게 표현할 수 있다. Gmarket Sans 50px, Medium NEXON Lv1 Gothic 18px (153%)",
    btn: "더 많은 유형 살펴보기",
  },
];

//컴포넌트 안시키고 데이터만 불러올때에는 인덱스로 불어와야함!
function ImgText() {
  return (
    <section id="imgTextType" className="image__wrap section nexon gray">
      <h2 className="ir_so">이미지 텍스트 영역</h2>
      <div className="imgText__inner container">
        <div className="txt">
          <span className="small">{ImgTextInfo[0].smalltitle}</span>
          <h3 className="title">{ImgTextInfo[0].title}</h3>
          <p className="desc">{ImgTextInfo[0].desc}</p>
          <a href="/" className="btn">
            {ImgTextInfo[0].btn}
          </a>
        </div>
        <div className="img bg1"></div>
        <div className="img bg2"></div>
      </div>
    </section>
  );
}

export default ImgText;
