import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { currencyToUse } from "../../Utility/currency";

const cartProductTotals = (props) => {
  let currencyKeys = currencyToUse(props.currency);
  let currencyName = currencyKeys.name;

  let subtotal = props.subtotal;
  let vatPercentage = props.vat > 0 ? props.vat / 100 : 0;
  let vat = subtotal > 0 ? Math.round(subtotal * vatPercentage) : 0;
  let totalCost = subtotal > 0 ? subtotal + vat : 0;

  return (
    <React.Fragment>
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="mb-3">The total amount of</h5>

          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Subtotal
              <span>
                <span style={{ textTransform: "lowercase" }}>
                  {currencyName}
                </span>
                {subtotal.toLocaleString()}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              <div>
                <strong>
                  <p class="mb-0">VAT</p>
                </strong>
              </div>
              <span>
                <span style={{ textTransform: "capitalize" }}>
                  {currencyName}
                </span>
                {vat.toLocaleString()}
              </span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p class="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span>
                <span style={{ textTransform: "capitalize" }}>
                  {currencyName}
                </span>
                {totalCost.toLocaleString()}
              </span>
            </li>
          </ul>
          <button
            type="button"
            onClick={props.clearCart}
            className="btn btn-primary btn-block  "
          >
            Clear cart
          </button>
        
          <Link to={"/all"} className="btn btn-primary btn-block checkout">
            Continue shopping
          </Link>
          {/* <Link
            className="btn btn-lg shop-btn-secondary checkout"
            to={"/checkout"}
          > */}
          <Link
            className="btn btn-block shop-btn-secondary checkout"
            to={"/cart"}
          >
            Checkout
          </Link>
        </div>
       
      </div>
   
    </React.Fragment>
  );
};

cartProductTotals.propTypes = {
  subtotal: PropTypes.number.isRequired,
  clearCart: PropTypes.func.isRequired,
  vat: PropTypes.number,
  currency: PropTypes.object.isRequired,
};

cartProductTotals.defaultProps = {
  shippingPrice: 0,
};

export default cartProductTotals;
