import React from "react";

const SelloutCards = () => {
  let cardsData = [
    {
      image: "../../../../security.svg",
      title: "Security",
      description: "",
    },
    {
      image: "../../../../home.svg",
      title: "Home",
      description: "",
    },
    {
      image: "../../../../office.svg",
      title: "Office Automation",
      description: "",
    },
    {
      image: "../../../../other.svg",
      title: "อื่นๆ",
      description: "",
    },
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <div className='container-card'>
          <div className="card sellout-card card-body shadow" key={index}>
            <img
              className="sellout-icon mt-3"
              src={card.image}
              alt={card.title}
            />
            <div className="text-center">
              <h5 className="sellout-title">{card.title}</h5>
              <p className="text-muted">{card.description}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container">
      <div style={{ marginLeft: "5px" }}>
        <h4>หมวดหมู่</h4>
      </div>
      <div className=" sellout-section mb-4">{generateSelloutCards()}</div>
    </div>
  );
};

export default SelloutCards;
