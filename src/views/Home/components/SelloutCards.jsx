import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "/images/5ad808b05c486.jpg",
      title: "เครื่องสแกนนิ้วมือ",
      description:
        "",
    },
    {
      image: "/images/camera.jpg",
      title: "กล้องวงจรปิด AVTECH",
      description:
        "",
    },
    {
      image: "/images//DS-2CD1123GOE-I.jpg",
      title: "กล้องวงจรปิด Hikvision",
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
