import React from "react";
import { NavLink } from "react-router-dom";

const ItemBanners = () => {
  let itemData = [
    {
      image: "../../../../images/DS-2CD1023G0E-I.jpeg",
      title: "Hikvision",
      text: `กล้องวงจรปิด`,
      link: "/category/sale",
      percentage: "14",
    },
    {
      image: "../../../../images/DS-2CD2021G1-I.jpg",
      title: "Hikvision",
      text: `กล้องวงจรปิด`,
      link: "/category/camera",
      percentage: "30",
    },
    {
      image: "../../../../images/16003-ds_2ce56d8t_it3zf-640x480.jpg",
      title: "Hikvision",
      text: `กล้องวงจรปิด`,
      link: "/category/camera",
      percentage: "20",
    },
  ];
  function generateItemBanners() {
    return itemData.map((item, index) => {
      return (
        <div className="item-container shadow" key={index}>
          <div className="item-content">
            <p className="item-banner-title my-1">{item.title}</p>
            <h4 className="mb-3">
              {item.text} <br /> Up to {item.percentage}%
            </h4>
            <NavLink className="btn btn-primary btn-shop btn-sm" to={item.link} exact>
            Shop Now
            </NavLink>
          </div>
          <img
            className="banner-image"
            src={item.image}
            alt="banner"
          />
        </div>
      );
    });
  }
  return (
    <div className="container item-banners mb-4">{generateItemBanners()}</div>
  );
};

export default ItemBanners;
