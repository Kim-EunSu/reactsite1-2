import React, { useState, useEffect } from "react";

function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://kim-eunsu.github.io/JsonFile/card.json", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCards(result.card);
        console.log(result);
      })
      .then((error) => console.log("error", error));
  }, []);

  //컴포넌트화시키기
  function CardInfo({ id, image, title, desc1, desc2, btn }) {
    return (
      <article className="card">
        <figure className="card__header">
          <img src={image} alt={title} />
        </figure>
        <div className="card__body">
          <h3 className="title">{title}</h3>
          <p className="desc">{desc1}</p>
          <p className="desc">
            {desc2}
            <a className="btn" href="/">
              {btn}
              <svg
                width="52"
                height="8"
                viewBox="0 0 52 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z"
                  fill="#5B5B5B"
                />
              </svg>
            </a>
          </p>
        </div>
      </article>
    );
  }

  return (
    <section id="cardType" className="card__wrap section nexon">
      <h2>웹스토리보이 강의</h2>
      <p>
        웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.
        <br />
        Gmarket Sans Light 22px 150% #67778A
      </p>
      <div className="card__inner container">
        {cards.map((text) => (
          <CardInfo
            key={text.id}
            image={text.image}
            title={text.title}
            desc1={text.desc1}
            desc2={text.desc2}
            btn={text.btn}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
