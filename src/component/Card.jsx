import React, { useState } from "react";

const Card = () => {
  const cards = [
    { id: 1, title: "card1", para: "dhaskhfdakl" },
    { id: 2, title: "card2", para: "dhaskhfdakl" },
    { id: 3, title: "card3", para: "dhaskhfdakl" },
  ];

  const [clickedCard, setClickedCard] = useState(null);

  function handleBtn(id) {
    setClickedCard(id);
  }

  return (
    <div>
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundColor: clickedCard === card.id ? "red" : "black" }}
        >
          {card.title}
          <p>{card.para}</p>
          <button onClick={() => handleBtn(card.id)}>Change to Red</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
