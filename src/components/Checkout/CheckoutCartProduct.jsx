import React from "react";
import PropTypes from "prop-types";
import { currencyToUse } from "../../Utility/currency";

const checkoutCartProduct = (props) => {
  let currencyKeys = currencyToUse(props.currency);
  let currencyName = currencyKeys.name;
  return (
    <React.Fragment>
      <li className="list-group-item ">
        <div className={"d-flex flex-row"}>
          <div>
            <img
              className={"shop-checkout-image"}
              src={props.checkoutProductImage}
              alt={props.checkoutProductImage}
            />
          </div>
          <div className="pl-3 checkout-product-info">
            <h6 className="my-0 ">{props.checkoutProductName}</h6>
            <p>
              <span style={{ textTransform: "lowercase" }}>{currencyName}</span>
              {props.checkoutProductPrice}
            </p>

            <p>
              <small>
                <span className="text-muted">Qty: </span>
                {props.checkoutCartCount}
              </small>
            </p>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

checkoutCartProduct.propTypes = {
  checkoutProductName: PropTypes.string.isRequired,
  checkoutCartCount: PropTypes.number.isRequired,
  checkoutProductPrice: PropTypes.number.isRequired,
  checkoutProductImage: PropTypes.string.isRequired,
  currency: PropTypes.object.isRequired,
};

export default checkoutCartProduct;
