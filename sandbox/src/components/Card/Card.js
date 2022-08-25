import React from "react";
import "./Card.css";

const Card = (props) => {
  const name = props.name;
  const text = props.text;
  return (
    <div>
      <div class="Card">
        <h1 class="side">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
