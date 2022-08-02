import React, { useEffect, useState } from "react";

function Text() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://kim-eunsu.github.io/JsonFile/text.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTexts(result.text);
      })
      .then((error) => console.log("error", error));
  }, []);

  function TextInfo({ id, title, desc }) {
    return (
      <div className="text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  }

  return (
    <section id="textType" className="text__wrap section nexon">
      <h2>코딩과 관련된 직업</h2>
      <p>
        너무 무리하지 말아요! 이미 당신은 해내고 있고 앞으로도 잘 할 수
        있을거예요!
      </p>
      <div className="text__inner container">
        {texts.map((text) => (
          <TextInfo key={text.id} title={text.title} desc={text.desc} />
        ))}
      </div>
    </section>
  );
}

export default Text;
