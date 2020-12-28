import React from "react";
import { NavLink } from "react-router-dom";

const Deal = () => {
  const deal = {
    image: "/images//DS-2CD1123GOE-I.jpg",
    title: "กล้องวงจรปิด Hikvision",
    text:
      "",
    link: "/category/camera",
  };
  return (
    <div className="container deals-contaner mb-4">
      <div className="deals-content shadow">
        <img
          className="deals-image"
          src={deal.image}
          alt="#"
        />
        <div className="deals-text">
          <div className="heading-block">
            <h1 className="deals-title mb-4">{deal.title}</h1>
            <p className="text mb-4">{deal.text}</p>
            <NavLink className="btn btn-primary btn" to={deal.link} exact>
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
