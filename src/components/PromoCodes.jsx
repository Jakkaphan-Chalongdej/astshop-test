import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PromoCodes = (props) => {
  return props.promoCodeProps.length > 0 ? (
    <div>
      {props.showText ? (
        <span>
          <h5>Great Discounts!</h5>
          <p>  ใช้ promo codes เพื่อลดราคา</p>
        </span>
      ) : null}
      <ul className="list-group list-group-flush">
        {props.promoCodeProps.map((promoCode, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            <span className={"shop-text-red shop-text-left"}>{promoCode.code}</span>
            <span className="badge badge-light badge-pill">
              {promoCode.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    props.children
  );
};

PromoCodes.propTypes = {
  promoCodeProps: PropTypes.array,
  showText: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    promoCodeProps: state.product.promoCode,
  };
};

export default connect(mapStateToProps)(PromoCodes);
