import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { confirmOrder, setPromoCode } from "../store/actions/Action.product";
import { UpdataProducts } from "../store/actions/Action.product";
import CheckoutCartProduct from "../components/Checkout/CheckoutCartProduct";
import PromoCodeForm from "../components/Checkout/PromoCodeForm";
import PromoCodeValue from "../components/Checkout/PromoCodeValue";
import CheckoutCartTotals from "../components/Checkout/CheckoutCartTotals";
import CustomerInputs from "../components/Checkout/Forms/CustomerInputs";
import DeliveryOptions from "../components/Checkout/Forms/DeliveryOptions";

import Alert from "../components/UI/Alert/Alert";
import PropTypes from "prop-types";
import formValidator from "../Utility/formValidation";
// import { CardElement, injectStripe } from "react-stripe-elements";
import { currencyToUse } from "../Utility/currency";

class Checkout extends Component {
  state = {
    promoCode: "",
    showAlert: false,
    alertType: "",
    alertMessage: "",
    paymentMethod: "creditCard",
    shippingPrice: 300,
    usedDeliveryOption: 1,
    makeOrder: false,
    correctCardInfo: false,
    newproduct: {},
  };

  customerInfoChangeHandler = (event, identifier) => {
    // use deep cloning to be able to get the values of nested objects
    const customerInfo = { ...this.state.customerInfo };
    const customerInfoField = { ...customerInfo[identifier] };
    customerInfoField.value = event.target.value;
    const validationResults = formValidator(
      identifier,
      customerInfoField.value
    );
    customerInfoField.valid = validationResults.isValid;
    customerInfoField.errorsMsg = validationResults.errorsMsg;
    customerInfoField.touched = true;
    customerInfo[identifier] = customerInfoField;

    let makeOrder = true;
    for (let identifier in customerInfo) {
      makeOrder = customerInfo[identifier].valid && makeOrder;
    }
    this.setState({ customerInfo: customerInfo, makeOrder: makeOrder });
  };

  promoCodeChangeHandler = (event) => {
    this.setState({ promoCode: event.target.value });
  };

  // paymentOptionChangeHandler = (event) => {
  //   if (event.target.value === "creditCard") {
  //     this.setState({ correctCardInfo: false });
  //   } else {
  //     this.setState({ correctCardInfo: true });
  //   }
  //   this.setState({ paymentMethod: event.target.value });
  // };
  productcart = (product) => {
    if (this.state.newproduct) {
      this.setState({ newproduct: product });
    }
    console.log("newproduct product", product);
    console.log("newproduct state product", this.state.newproduct);
  };

  confirmOrderHandler = (event) => {
    event.preventDefault();
    let order = {};
    order["product_name"] = this.state.newproduct.productName;
    order["quantity"] = this.state.newproduct.quantity;
    order["price"] = this.state.newproduct.price;
    order["firstname"] = this.props.Auth.user.firstname;
    order["lastname"] = this.props.Auth.user.lastname;
    order["email"] = this.props.Auth.user.email;
    order["Address"] = this.props.Auth.user.Address;
    order["Country"] = this.props.Auth.user.Country;
    order["city"] = this.props.Auth.user.city;
    order["ZipCode"] = this.props.Auth.user.ZipCode;
    order["usedPromoCode"] = this.state.promoCode;
    order["currency"] = this.props.usedCurrencyProp;
    // // order["paymentMethod"] = this.state.paymentMethod;
    //order["deliveryOption"] = this.state.usedDeliveryOption;
    let updateQuantity =
      this.state.newproduct.Allquantity - this.state.newproduct.quantity;
    const data = {
      quantity: updateQuantity,
    };
    console.log("update order", data);
    console.log("update order", order);
    if (data.quantity > 0) {
      this.props.UpdataProducts(this.state.newproduct.productID, data);
      this.props.confirmOrderProp(order);
    }
  };

  setPromoCode = (event) => {
    event.preventDefault();
    // check promo code in state
    let getPromoCode = this.props.promoCodeProp.filter(
      (codeName) => codeName.code === this.state.promoCode
    );

    if (getPromoCode.length > 0) {
      this.props.setPromoCodeProp(getPromoCode[0]);
      this.setState({
        showAlert: true,
        alertType: "alert-success",
        alertMessage: `The promo code you entered has given you a ${getPromoCode[0].percentage}% discount on the total price.`,
      });
    } else {
      this.setState({
        showAlert: true,
        alertType: "alert alert-danger",
        alertMessage: "The Promo code you entered does not have discounts",
      });
    }
  };

  closeAlertHandler = () => {
    this.setState({
      showAlert: !this.state.showAlert,
      alertType: "",
      alertMessage: "",
    });
  };

  deliveryOptionChangeHandler = (event) => {
    //get used delivery option from the state
    let deliveryOption = this.props.deliveryOptions.find(
      (option) => option.id === parseInt(event.target.value)
    );
    if (deliveryOption) {
      this.setState({
        usedDeliveryOption: parseInt(event.target.value),
        shippingPrice: deliveryOption.cost,
      });
    }
  };

  creditCardHandler = (element) => {
    if (element.complete) {
      this.setState({ correctCardInfo: true });
    }
  };

  render() {
    let productsPrices = [];
    let chosenPaymentMethod = null;
    let currencyKeys = currencyToUse(this.props.usedCurrencyProp);
    let currencyValue = currencyKeys.value;
    let CartProducts = {};
    const cartProducts = this.props.cartProductsProps.map(
      (cartProduct, index) => {
        // fetch product information from source based on id
        let productFromStore = this.props.productsProps.find(
          (product) => product.id === cartProduct.id
        );
        productsPrices.push({
          price:
            productFromStore.quantity > 0
              ? Math.round(productFromStore.price * currencyValue)
              : 0,
          count: cartProduct.quantity,
        });
        let cartProductquantity = cartProduct.quantity;
        CartProducts["quantity"] = cartProductquantity;
        CartProducts["productName"] = productFromStore.name;
        CartProducts["productID"] = productFromStore.id;
        CartProducts["Allquantity"] = productFromStore.quantity;
        return (
          <>
            <CheckoutCartProduct
              key={index}
              checkoutProductName={productFromStore.name}
              checkoutProductCategory={productFromStore.category}
              checkoutProductPrice={Math.round(
                productFromStore.price * currencyValue
              )}
              checkoutProductImage={productFromStore.img}
              checkoutCartCount={cartProduct.quantity}
              checkoutCartSize={cartProduct.size}
              currency={this.props.usedCurrencyProp}
            />
          </>
        );
      }
    );

    let shippingPrice = this.state.shippingPrice
      ? Math.round(this.state.shippingPrice * currencyValue)
      : 0;
    let productTotals = productsPrices.reduce(
      (acc, el) => acc + el.price * el.count,
      0
    );
    let vatPercentage = this.props.vatProps > 0 ? this.props.vatProps / 100 : 0;
    let vat = productTotals > 0 ? Math.round(productTotals * vatPercentage) : 0;
    let percentageDiscount = this.props.usedPromoCodeProp
      ? this.props.usedPromoCodeProp.percentage / 100
      : 0;
    let discountAmount = productTotals * percentageDiscount;
    let shoppingTotal =
      productTotals > 0
        ? productTotals + vat + shippingPrice - discountAmount
        : 0;

    // if (this.state.paymentMethod === "creditCard") {
    //   chosenPaymentMethod = (
    //     <div className={"ml-4 p-3 shop-card-field"}>
    //       <CardElement
    //         onChange={(element) => this.creditCardHandler(element)}
    //       />
    //     </div>
    //   );
    // } else if (this.state.paymentMethod === "onDelivery") {
    //   chosenPaymentMethod = (
    //     <div className={"ml-4 p-3"}>
    //       You will pay when the product is delivered to you.
    //     </div>
    //   );
    // }

    return (
      <div className="container py-4">
        {this.props.cartTotalProps <= 0 ? <Redirect to="/cart" /> : null}

        {this.state.showAlert ? (
          <Alert
            alertType={this.state.alertType}
            closeAlert={this.closeAlertHandler}
          >
            {this.state.alertMessage}
          </Alert>
        ) : null}

        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Order Review</span>
              <span className="badge badge-secondary badge-pill">
                {this.props.cartTotalProps}
              </span>
            </h4>

            <ul className="list-group mb-3 card-checkout">
              {/* items in cart */}
              {cartProducts}

              {/* used promo codes */}
              {this.props.usedPromoCodeProp ? (
                <PromoCodeValue
                  currency={this.props.usedCurrencyProp}
                  usedPromoCode={this.props.usedPromoCodeProp}
                  discountAmount={discountAmount}
                />
              ) : null}

              {/* checkout totals */}
              <CheckoutCartTotals
                productTotals={productTotals}
                vat={vat}
                shippingPrice={shippingPrice}
                shoppingTotal={(CartProducts["price"] = shoppingTotal)}
                currency={this.props.usedCurrencyProp}
              />
              {/* <div>{(CartProducts["price"] = shoppingTotal)}</div> */}
            </ul>

            {/*promo code form */}
            <PromoCodeForm
              setPromoCode={this.setPromoCode}
              promoCodeChangeHandler={(event) =>
                this.promoCodeChangeHandler(event)
              }
              promoCode={this.state.promoCode}
            />
          </div>
          <div className="col-md-8 order-md-1 ">
            <h4 className="mb-3">Billing Information</h4>
            <form className="shop-form shop-bg-white p-3" noValidate>
              {/* customer details form fields */}
              {/* <CustomerInputs
                customerInfo={this.state.customerInfo}
                inputChanged={(event, identifier) =>
                  this.customerInfoChangeHandler(event, identifier)
                }
              /> */}
              username :{this.props.Auth.user.username}
              firstname : {this.props.Auth.user.firstname}
              lastname : {this.props.Auth.user.lastname}
              email :{this.props.Auth.user.email}
              Address :{this.props.Auth.user.Address}
              Country : {this.props.Auth.user.Country}
              city :{this.props.Auth.user.city}
              ZipCode : {this.props.Auth.user.ZipCode}
              {/* delivery options selection fields */}
              <h4 className="">Delivery Options</h4>
              <DeliveryOptions
                currency={this.props.usedCurrencyProp}
                deliveryOptions={this.props.deliveryOptions}
                usedDeliveryOption={this.state.usedDeliveryOption}
                deliveryOptionChanged={this.deliveryOptionChangeHandler}
              />
              <h4 className="mb-3">Payment Method</h4>
              {/* payment option selection field */}
              {/* <PaymentOptions
                paymentMethod={this.state.paymentMethod}
                paymentOptionChanged={this.paymentOptionChangeHandler}
              /> */}
              {/* payment section */}
              <div>{chosenPaymentMethod}</div>
              <hr className="mb-4" />
              <button
                // disabled={!(this.state.makeOrder && this.state.correctCardInfo)}
                className="btn shop-btn-secondary btn-lg btn-block"
                onClick={
                  (event) => (
                    this.confirmOrderHandler(event),
                    this.setState({ newproduct: CartProducts })
                  )
                  // this.productcart(CartProducts);
                }
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  productsProps: PropTypes.array.isRequired,
  cartProductsProps: PropTypes.array.isRequired,
  cartTotalProps: PropTypes.number.isRequired,
  promoCodeProp: PropTypes.array,
  usedPromoCodeProp: PropTypes.object,
  deliveryOptions: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
  vatProps: PropTypes.number,
  Auth: PropTypes.object.isRequired,
};

Checkout.defaultProps = {
  shippingPriceProp: 0,
};

const mapStateToProps = (state) => {
  return {
    productsProps: state.product.products,
    cartProductsProps: state.product.cart,
    cartTotalProps: state.product.cartTotal,
    vatProps: state.product.vat,
    promoCodeProp: state.product.promoCode,
    usedPromoCodeProp: state.product.usedPromoCode,
    deliveryOptions: state.product.deliveryOptions,
    usedCurrencyProp: state.product.usedCurrency,
    Auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    confirmOrderProp: (order) => {
      dispatch(confirmOrder(order, ownProps));
    },
    UpdataProducts: (id, update) => {
      dispatch(UpdataProducts(id, update));
    },

    setPromoCodeProp: (promoCode, percentage) =>
      dispatch(setPromoCode(promoCode, percentage)),
  };
};

// inject stripe prop into the component (injectStripe(Checkout))
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
