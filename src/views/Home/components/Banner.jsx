import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const banner = {
    image: "../../../../logo-title.png",
    title: "All Solution Tech ",
    text:
      "ผู้นำด้านอุปกรณ์รักษาความปลอดภัย มีสินค้าให้เลือกหลากหลาย          ส่งตรงถึงบ้านคุณ shop เลย ",
    link: "/all",
  };
  return (
    <div className="container main-banner-container my-4">
      <div className="main-banner-content">
        <div className="main-banner-text">
          <h4 className="display-4 main-banner-title">{banner.title}</h4>
          <p className="lead">{banner.text}</p>
          <p>
            <NavLink className="btn btn-primary btn-lg btn-shop" to={banner.link} exact>
             <span>Shop Now</span> 
            </NavLink>
          </p>
        </div>
        <img
          className="main-banner-image"
          src={banner.image}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
