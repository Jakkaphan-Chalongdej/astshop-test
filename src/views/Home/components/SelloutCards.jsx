import React from "react";
import { Link } from "react-router-dom";
const SelloutCards = () => {
  let cardsData = [
    {
      parth: "cartegory/",
      image: "../../../../security.svg",
      title: "Security",
    },
    {
      parth: "cartegory/",
      image: "../../../../home.svg",
      title: "Home",
    },
    {
      parth: "cartegory/",
      image: "../../../../office.svg",
      title: "Office",
    },
    {
      parth: "cartegory/",
      image: "../../../../other.svg",
      title: "อื่นๆ",
    },
  ];

  function generateSelloutCards() {
    return cardsData.map((card, index) => {
      return (
        <Link className="link-style" to={card.parth}>
          <div className="container-card">
            <div className="card sellout-card card-body shadow" key={index}>
              <img
                className="sellout-icon mt-3"
                src={card.image}
                alt={card.title}
              />
              <div className="text-center">
                <h5 className="sellout-title">{card.title}</h5>
              </div>
            </div>
          </div>
        </Link>
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
