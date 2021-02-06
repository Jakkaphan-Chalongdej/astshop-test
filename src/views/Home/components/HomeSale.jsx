import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { currencyToUse, productPrice } from "../../../Utility/currency";
import { VISIBILITY_FILTERS } from "../../../static/constants";
import { getProductsByFilter } from "../../../store/selectors";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 60,
  },
  desktop2: {
    breakpoint: { max: 1920, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 10,
  },
  desktop3: {
    breakpoint: { max: 1440, min: 1024 },
    items: 4,
    paritialVisibilityGutter: -20,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 0,
  },
  tablet2: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
    paritialVisibilityGutter: -80,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    paritialVisibilityGutter: -145,
  },
};
const HomeSale = (props) => {
  let currencyKeys = currencyToUse(props.usedCurrencyProp);

  let products = props.productsProps.map((product, index) => {
    return (
      <div className="card card-body card-sale shadow" key={index}>
        <img className="card-img-top" src={product.img} alt="product" />
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          {currencyKeys.name}
          {Math.round(product.price * currencyKeys.value).toLocaleString()}
          {product.discount_price ? (
            <span className={"shop-card-discount-price"}>
              <span style={{ textTransform: "lowercase" }}>{currencyKeys.name}</span>
              {productPrice(product.discount_price, currencyKeys.value)}
            </span>
          ) : null}
        </p>

        <NavLink style={{marginTop:'10px'}}
          className="btn btn-primary btn-sm"
          to={`/product/${product.slug}`}
          exact
        >
          View Item
        </NavLink>
      </div>
    );
  });
  return (
    <div className="container products-section mb-4">
      <div className="products-section-title pb-3">
        <h4>ON SALE</h4>
        <NavLink
          className="btn btn-link products-section-link"
          to="/sale"
          exact
        >
          See All
        </NavLink>
      </div>
      <div className="products-container">
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          autoPlaySpeed={3000}
          // autoPlay={true}
          infinite
        >
          {products}
         
        </Carousel>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsProps: getProductsByFilter(state, VISIBILITY_FILTERS.SALE, 6),
    usedCurrencyProp: state.product.usedCurrency,
  };
};

export default connect(mapStateToProps)(HomeSale);
