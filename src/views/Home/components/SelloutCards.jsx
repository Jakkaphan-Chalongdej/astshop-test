import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "../../../../best-price-lettering-paint-blots_1262-7448.jpg",
      title: "Best Prices",
      description:
        "",
    },
    {
      image: "../../../../delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg",
      title: "Fast delivery",
      description:
        "",
    },
   
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <div className="card sellout-card card-body shadow" key={index}>
          <img
            className="sellout-icon"
            src={card.image}
            alt="Fila Back"
          />
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
