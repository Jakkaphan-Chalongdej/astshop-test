import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const banner = {
    image: "../../../../ast.png",
    title: "All Solutions Tech ",
    text:
      "ผู้นำด้านอุปกรณ์รักษาความปลอดภัย มีสินค้าให้เลือกหลากหลาย ส่งตรงถึงบ้านคุณ shop เลย ",
    link: "/all",
  };
  return (
    <div className="container main-banner-container my-4 ">
      <div className="main-banner-content">
        <div className="main-banner-text">
          <h4 className="display-4 main-banner-title">{banner.title}</h4>
          <p className="font-p ">{banner.text}</p>
          <p style={{ marginTop: "60px" }}>
            <NavLink
              className="btn btn-primary btn-lg btn-shop"
              to={banner.link}
              exact
            >
              <span>Shop Now</span>
            </NavLink>
          </p>
        </div>
        <img className="main-banner-image" src={banner.image} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
