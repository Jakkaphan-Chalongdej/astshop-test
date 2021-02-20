import React from "react";
import PropTypes from "prop-types";
import AddToWishList from "../../components/AddToWishlist/AddToWishlist";
import { currencyToUse } from "../../Utility/currency";
import { Row, Col } from "react-bootstrap";
function CartProducts(props) {
  let currencyKeys = currencyToUse(props.currency);
  let currencyName = currencyKeys.name;
 
  return (
    <React.Fragment>
      <div class="card wish-list mb-3">
        <div class="card-body">
          <Row className="mb-4">
            <Col xs={12} md={5} lg={5} xl={5}>
              <img
                className={"shop-cart-image"}
                src={props.productPhoto}
                alt={props.productPhoto}
              />
            </Col>

            <Col xs={12} md={7} lg={7} xl={7}>
              <div className="d-flex justify-content-between">
                <div>
                  <h5> {props.productName}</h5>
                  <p className="mb-7 text-muted text-uppercase small">
                    <span
                      className={
                        "badge " +
                        (props.productQuantity > 0
                          ? "badge-success"
                          : "badge-danger")
                      }
                    >
                      {props.productQuantity > 0 ? "In Stock" : "Out of Stock"}
                    </span>
                  </p>
                  <p class="mb-2 text-muted text-uppercase small"></p>
                  <p class="mb-3 text-muted text-uppercase small"></p>
                </div>

                <div className="col-sm-7 col-md-6 ">
                  <div
                    style={{ marginTop: "30px" }}
                    className="wishlist-container"
                  >
                    <AddToWishList
                      productId={props.productId}
                      title={"add to wishlist"}
                      classStyleName={"product-wishlist"}
                    />
                  </div>
                  <div className="row">
                    <div
                      
                      className="col-sm-10 text-left select-num"
                    >
                      {props.productQuantity > 0 ? (
                        <span>
                          <select
                            className="form-control input-sm my-3 w-50"
                            disabled={props.productQuantity < 1}
                            value={props.productCount}
                            onChange={props.updateProductCount}
                          >
                            {[...Array(props.productQuantity)].map(
                              (number, index) => (
                                <option key={index} value={index + 1}>
                                  {index + 1}
                                </option>
                              )
                            )}
                          </select>
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{ marginTop: "100px" }}
                className="d-flex justify-content-between align-items-center"
              >
                <button
                  type="button"
                  onClick={props.removeCartProduct}
                  className="btn shop-btn-warning btn-sm"
                >
                  Remove item
                </button>
                <p className="mb-0">
                  <span>
                    <strong>
                      {`Total `}
                      <span style={{ textTransform: "capitalize" }}>
                        {currencyName}
                      </span>
                      {(
                        props.productPrice * props.productCount
                      ).toLocaleString()}
                    
                    </strong>
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

CartProducts.propTypes = {
  productId: PropTypes.number.isRequired,
  productPhoto: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productCategory: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  updateProductCount: PropTypes.func.isRequired,
  productQuantity: PropTypes.number.isRequired,
  removeCartProduct: PropTypes.func.isRequired,
  currency: PropTypes.object.isRequired,
};

export default CartProducts;
