import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/Action.product";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
// import Ratings from "../../components/Ratings/Ratings";
import AddToWishList from "../../components/AddToWishlist/AddToWishlist";
import {
  currencyToUse,
  productPrice,
  productDiscountPrice,
} from "../../Utility/currency";
import HomeSale from "../../views/Home/components/HomeSale";
import "./ProductDetails.css";

class ProductDetails extends Component {
  state = {
    productDetails: {
      id: null,

      quantity: 1,
    },
  };

  componentDidMount() {
    if (this.props.productProp) {
      this.setState((prevState) => ({
        productDetails: {
          ...prevState.productDetails,
          id: this.props.productProp.id,
        },
      }));
    }
  }
  product = this.props.productProp;
  currencyKeys = currencyToUse(this.props.usedCurrencyProp);
  truncateProductName() {
    const productName = this.product.name;
    return productName.length > 45
      ? `${productName.substring(0, 45)}...`
      : productName;
  }
  disableAddToCartButton() {
    let prodDetails = this.state.productDetails;
    let generalValidations =
      !prodDetails.id ||
      !prodDetails.quantity ||
      prodDetails.quantity < 1 ||
      prodDetails.quantity > this.product.quantity;
    return generalValidations;
  }
  handleAdditionSubtraction(action) {
    let stateData = this.state.productDetails;
    if (action === "subtract" && stateData.quantity < 1) {
      return;
    }
    let quantity = parseInt(stateData.quantity);
    let newValue = action === "subtract" ? quantity - 1 : quantity + 1;
    this.setState((prevState) => ({
      productDetails: {
        ...prevState.productDetails,
        quantity: newValue,
      },
    }));
  }
  handleInputChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === "quantity") {
      if (!value.match(/^[0-9]+$/)) {
        value = 1;
      }
    }
    this.setState({
      productDetails: { ...this.state.productDetails, [name]: value },
    });
  };

  handleAddToCart = () => {
    this.props.addProductToCartProp(this.state.productDetails);
  };
  render() {
    return (
      <React.Fragment>
        {!this.product ? (
          <div className="container py-4">
            <div className={"shop-div p-4 text-center w-100"}>
              <h5>Product Not Found</h5>
            </div>
          </div>
        ) : (
          <span>
            <div className="container mt-2 mb-4">
              <BreadCrumbs
                breadCrumbLinks={[
                  {
                    label: this.product.category,
                    to: `/category/${this.product.category}`,
                  },
                  {
                    label: this.truncateProductName(),
                    to: null,
                  },
                ]}
              />
              <div className="product-card-des bg-white">
                <div className="product-card bg-white">
                  <img
                    className="product-card-image slide-product"
                    src={this.product.img_name}
                    alt={this.product.name}
                  />
                  <div className="product-card-details">
                    <div className="product-title-container">
                      <h3 className="product-title">{this.product.name}</h3>
                      <AddToWishList
                        productId={this.product.id}
                        title={"add to wishlist"}
                        classStyleName={"product-wishlist"}
                      />
                    </div>
                    <div>
                      {/* <span>
                      <Ratings
                        ratings={this.product.ratings}
                        containerClassName={"product-rating"}
                        fullStarIcon={"full-star-icon"}
                        halfStarIcon={"half-star-icon"}
                        emptyStarIcon={"empty-star-icon"}
                      />
                    </span> */}
                    </div>
                    <div className="product-price-container">
                      <span className="product-price">
                        {this.currencyKeys.name}
                        {productPrice(
                          this.product.price,
                          this.currencyKeys.value
                        )}
                      </span>
                      {this.product.discount_price ? (
                        <span className="product-discount-price">
                          {this.currencyKeys.name}
                          {productPrice(
                            this.product.discount_price,
                            this.currencyKeys.value
                          )}
                        </span>
                      ) : null}
                      {this.product.discount_price ? (
                        <span className="product-percentage-discount">
                          {productDiscountPrice(
                            this.product.price,
                            this.product.discount_price
                          )}
                        </span>
                      ) : null}
                    </div>
                    <div className="product-features-container">
                      <div className="product-features">
                        <p className="product-features-title text-muted">
                          Stock:
                        </p>
                        <div className="product-quantity">
                          <span className="product-quantity">
                            {this.product.quantity}
                          </span>
                        </div>
                      </div>
                      {this.product.quantity ? (
                        <div className="product-features">
                          <p className="product-features-title text-muted">
                            quantity:
                          </p>
                          <div className="product-quantity">
                            <button
                              type="button"
                              className="btn btn-secondary btn-border"
                              onClick={() =>
                                this.handleAdditionSubtraction("subtract")
                              }
                            >
                              -
                            </button>
                            <input
                              name="quantity"
                              type="text"
                              className="form-control"
                              placeholder="Qty"
                              value={this.state.productDetails.quantity}
                              onChange={(event) =>
                                this.handleInputChange(event)
                              }
                            ></input>
                            <button
                              type="button"
                              className="btn btn-secondary btn-border2"
                              onClick={() =>
                                this.handleAdditionSubtraction("add")
                              }
                              disabled={
                                this.state.productDetails.quantity >=
                                this.product.quantity
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <div className="mt-4"></div>
                    <div className="mt-4 btn-addcart">
                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg "
                        disabled={this.disableAddToCartButton()}
                        onClick={this.handleAddToCart}
                      >
                        {this.product.quantity ? "Add To Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-des">
                  <p>{this.product.des}</p>
                  <div></div>
                </div>
              </div>
            </div>
            <HomeSale />
          </span>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    productProp: state.product.products.find(
      (product) => product.slug === ownProps.match.params.productSlug
    ),
    usedCurrencyProp: state.product.usedCurrency,
    showModal: state.product.productMaxShowModal,
    modalmessage: state.product.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCartProp: (productDetails) =>
      dispatch(addToCart(productDetails)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
