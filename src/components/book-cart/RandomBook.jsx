import React from "react";
import LoremIpsum from "./Lorem";


//AYS COMPONENT-E PTASXANATU E MIAYN UI i HAMAR IRA MEJ LOGIKA CHKA
const RandomBook = ({
  id,
  title,
  author,
  price,
  rating,
  img,
  mousePosition,
  language,
  learnMore
}) => {
  return (
    <div
      onMouseLeave={mousePosition}
      onMouseEnter={mousePosition}
      key={Math.random() ** 2}
      className="book"
    >
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <div>
          <h3>{author}</h3>
          <h3>${price}</h3>
        </div>
        <h3>{title}</h3>
        <p>Lang. {language}</p>
        <p>Rating {rating}/10</p>
        <LoremIpsum />
        <div className="buttons">
          <button>To Cart</button>
          <button onClick={() => learnMore(id)}>Learn more . . .</button>
        </div>
      </div>
    </div>
  );
};

export default RandomBook;
