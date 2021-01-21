import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "../../../../954903.svg",
      title: "Security",
      description: "",
    },
    {
      image: "../../../../2892390.svg",
      title: "Category",
      description: "",
    },
    {
      image: "../../../../2892390.svg",
      title: "Category",
      description: "",
    },
    {
      image: "../../../../2892390.svg",
      title: "Category",
      description: "",
    },
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <div className="card sellout-card card-body shadow" key={index}>
          <img className="sellout-icon" src={card.image} alt={card.title} />
          <div className="mt-3 text-center">
            <h5 className="sellout-title">{card.title}</h5>
            <p className="text-muted">{card.description}</p>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container sellout-section mb-4">
      {generateSelloutCards()}
    </div>
  );
};

export default SelloutCards;
