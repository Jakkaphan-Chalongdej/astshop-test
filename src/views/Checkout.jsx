import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { confirmOrder, setPromoCode } from "../store/actions/Action.product";
import { UpdataQuantity } from "../store/actions/Action.product";
import CheckoutCartProduct from "../components/Checkout/CheckoutCartProduct";
import PromoCodeForm from "../components/Checkout/PromoCodeForm";
import PromoCodeValue from "../components/Checkout/PromoCodeValue";
import CheckoutCartTotals from "../components/Checkout/CheckoutCartTotals";
// import CustomerInputs from "../components/Checkout/Forms/CustomerInputs";
import DeliveryOptions from "../components/Checkout/Forms/DeliveryOptions";
import Alert from "../components/UI/Alert/Alert";
import PropTypes from "prop-types";
// import formValidator from "../Utility/formValidation";
// import { CardElement, injectStripe } from "react-stripe-elements";
import { currencyToUse } from "../Utility/currency";

function Checkout(props) {
  const [errors, seterrors] = React.useState({});
  const [promoCodes, setpromoCode] = React.useState("");
  const [showAlert, setshowAlert] = React.useState(false);
  const [alertType, setalertType] = React.useState();
  const [alertMessage, setalertMessage] = React.useState();
  const [shippingPrices, setshippingPrice] = React.useState(300);
  const [usedDeliveryOption, setusedDeliveryOption] = React.useState(1);
  const [newproduct, setnewproduct] = React.useState({});
  const [order, setorder] = React.useState({});
  const [orders, setorders] = React.useState([]);
  const [newproductarray, setnewproductarray] = React.useState([]);

  const promoCodeChangeHandlers = (event) => {
    setpromoCode(event.target.value);
  };

  // const productcart = (product) => {
  //   if (newproduct) {
  //     setnewproduct(product);
  //   }
  // };

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    let Orderuser = {
      userID: props.Auth.user.id,
      product: newproductarray,
      shippingPrice: newproduct.shippingPrice,
      vat: newproduct.vat,
      price: newproduct.price,
      currency: props.usedCurrencyProp.symbol,
    };
    setorder(Orderuser);
    if (
      order.shippingPrice !== undefined &&
      props.Auth.userDetail.firstname != null &&
      props.Auth.userDetail.lastname != null &&
      props.Auth.userDetail.email != null &&
      props.Auth.userDetail.Address != null &&
      props.Auth.userDetail.city != null &&
      props.Auth.userDetail.ZipCode != null &&
      props.Auth.userDetail.Country != null &&
      props.Auth.userDetail.phone != null
    ) {
      for (let i = 0; i < newproductarray.length; i++) {
        let updateQuantity = orders[i].quantity - newproductarray[i].quantity;
        const data = {
          quantity: updateQuantity,
        };
        props.UpdataProducts(newproductarray[i].id, data);
        if (
          newproductarray.length === Object.keys(data).length ||
          i === Object.keys(data).length
        ) {
          props.confirmOrderProp(order);
        }
      }
    }

    let data = [];
    if (props.Auth.userDetail.firstname === null) {
      data["firstname"] = "is not valid";
    }
    if (props.Auth.userDetail.lastname === null) {
      data["lastname"] = "is not valid";
    }
    if (props.Auth.userDetail.email === null) {
      data["email"] = "is not valid";
    }
    if (props.Auth.userDetail.Address === null) {
      data["Address"] = "is not valid";
    }
    if (props.Auth.userDetail.city === null) {
      data["city"] = "is not valid";
    }
    if (props.Auth.userDetail.ZipCode === null) {
      data["ZipCode"] = "is not valid";
    }
    if (props.Auth.userDetail.Country === null) {
      data["Country"] = "is not valid";
    }
    if (props.Auth.userDetail.phone === null) {
      data["phone"] = "is not valid";
    }
    seterrors(data);
  };
  const setPromoCodes = (event) => {
    event.preventDefault();
    let getPromoCode = props.promoCodeProp.filter(
      (codeName) => codeName.code === promoCodes
    );

    if (getPromoCode.length > 0) {
      props.setPromoCodeProp(getPromoCode[0]);
      setshowAlert(true);
      setalertType("alert-success");
      setalertMessage(
        `The promo code you entered has given you a ${getPromoCode[0].percentage}% discount on the total price.`
      );
    } else {
      setshowAlert(true);
      setalertType("alert alert-danger");
      setalertMessage("The Promo code you entered does not have discounts");
    }
  };

  const closeAlertHandler = () => {
    setshowAlert(!showAlert);
    setalertType("");
    setalertMessage("");
  };

  const deliveryOptionChangeHandler = (event) => {
    //get used delivery option from the state
    let deliveryOption = usedDeliveryOption.find(
      (option) => option.id === parseInt(event.target.value)
    );
    if (deliveryOption) {
      setusedDeliveryOption({
        usedDeliveryOption: parseInt(event.target.value),
      });
      setshippingPrice({ shippingPrices: deliveryOption.cost });
    }
  };

  let productsPrices = [];
  // let chosenPaymentMethod = null;
  let currencyKeys = currencyToUse(props.usedCurrencyProp);
  let currencyValue = currencyKeys.value;
  let CartProducts = {};
  let arrayproduct = [];
  let arrayCartproduct = [];

  const cartProduct =
    props.cartProductsProps.length > 0 &&
    props.cartProductsProps.map((cartProduct, index) => {
      let productFromStore = props.productsProps.find(
        (product) => product.id === cartProduct.id
      );
      productsPrices.push({
        price:
          productFromStore.quantity > 0
            ? Math.round(productFromStore.price * currencyValue)
            : 0,
        count: cartProduct.quantity,
      });
      arrayCartproduct.push(props.cartProductsProps[index]);
      arrayproduct.push(productFromStore);
      return (
        <>
          <CheckoutCartProduct
            key={index}
            checkoutProductName={productFromStore.name}
            checkoutProductCategory={productFromStore.category}
            checkoutProductPrice={Math.round(
              productFromStore.price * currencyValue
            )}
            checkoutProductImage={productFromStore.img_name}
            checkoutCartCount={cartProduct.quantity}
            currency={props.usedCurrencyProp}
          />
        </>
      );
    });

  let shippingPrice = shippingPrices
    ? Math.round(shippingPrices * currencyValue)
    : 0;
  let productTotals = productsPrices.reduce(
    (acc, el) => acc + el.price * el.count,
    0
  );
  let vatPercentage = props.vatProps > 0 ? props.vatProps / 100 : 0;
  let vat = productTotals > 0 ? Math.round(productTotals * vatPercentage) : 0;
  let percentageDiscount = props.usedPromoCodeProp
    ? props.usedPromoCodeProp.percentage / 100
    : 0;
  let discountAmount = productTotals * percentageDiscount;
  let shoppingTotal =
    productTotals > 0
      ? productTotals + vat + shippingPrice - discountAmount
      : 0;

  return (
    <div className="container py-4">
      {props.cartTotalProps <= 0 ? <Redirect to="/cart" /> : null}

      {showAlert ? (
        <Alert alertType={alertType} closeAlert={closeAlertHandler}>
          {alertMessage}
        </Alert>
      ) : null}

      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Order Review</span>
            <span className="badge badge-secondary badge-pill">
              {/* {this.props.cartTotalProps} */}
            </span>
          </h4>

          <ul className="list-group mb-3 card-checkout">
            {/* items in cart */}
            {cartProduct}

            {/* used promo codes */}
            {props.usedPromoCodeProp ? (
              <PromoCodeValue
                currency={props.usedCurrencyProp}
                usedPromoCode={props.usedPromoCodeProp}
                discountAmount={discountAmount}
              />
            ) : null}

            {/* checkout totals */}
            <CheckoutCartTotals
              productTotals={productTotals}
              vat={(CartProducts["vat"] = vat)}
              shippingPrice={(CartProducts["shippingPrice"] = shippingPrice)}
              shoppingTotal={(CartProducts["price"] = shoppingTotal)}
              currency={props.usedCurrencyProp}
            />
          </ul>

          {/*promo code form */}
          <div className="col-md-12 col-xl-12 col-sm-12">
            <PromoCodeForm
              setPromoCode={setPromoCodes}
              promoCodeChangeHandler={(event) => promoCodeChangeHandlers(event)}
              promoCode={promoCodes}
            />
          </div>
        </div>
        <div className="col-md-8 order-md-1 ">
          <h4 className="mb-3">Billing Information</h4>
          <form className="shop-form shop-bg-white p-3" noValidate>
            <div className="address-form ">
              <div className="card-address ">
                {props.Auth.userDetail !== undefined && (
                  <ul>
                    <div className="address-input">
                      <li>ชื่อ :</li>
                      <span>
                        <p style={{ color: "red" }}>{errors.firstname}</p>
                        {props.Auth.userDetail.firstname}
                      </span>
                    </div>
                    <div className="address-input">
                      <li>สกุล :</li>
                      <span>
                        <p style={{ color: "red" }}>{errors.lastname}</p>
                        {props.Auth.userDetail.lastname}
                      </span>
                    </div>
                    <div className="address-input">
                      <li>email :</li>
                      <span>{props.Auth.userDetail.email}</span>
                    </div>
                    <div className="address-input">
                      <li>เบอร์โทร :</li>
                      <span>
                        <p style={{ color: "red" }}>{errors.phone}</p>
                        {props.Auth.userDetail.phone}
                      </span>
                    </div>

                    <div className="address-input">
                      <li>ที่อยู่ :</li>
                      <span>
                        <p style={{ color: "red" }}>{errors.Address}</p>
                        {props.Auth.userDetail.Address}
                      </span>
                    </div>

                    <div className="address-input">
                      <li>จังหวัด :</li>
                      <span>
                        <p style={{ color: "red" }}>{errors.city}</p>
                        {props.Auth.userDetail.city}
                      </span>
                    </div>
                    <div className="address-input">
                      <li>รหัสไปรษณีย์ :</li>
                      <span>
                        <p style={{ color: "red" }}>{errors.ZipCode}</p>
                        {props.Auth.userDetail.ZipCode}
                      </span>
                    </div>
                    <div className="address-input">
                      <li>ประเทศ :</li>
                      <span>
                        <p style={{ color: "red" }}>{errors.Country}</p>
                        {props.Auth.userDetail.Country}
                      </span>
                    </div>
                  </ul>
                )}
                <Link to={"/user/"}>
                  <button>Edit</button>
                </Link>
              </div>

              {/* delivery options selection fields */}
              <div className="card-address">
                <h4 className="">Delivery Options</h4>
                <DeliveryOptions
                  currency={props.usedCurrencyProp}
                  deliveryOptions={props.deliveryOptions}
                  usedDeliveryOption={usedDeliveryOption}
                  deliveryOptionChanged={deliveryOptionChangeHandler}
                />
              </div>
            </div>

            {/* payment option selection field */}
            {/* <PaymentOptions
                paymentMethod={this.state.paymentMethod}
                paymentOptionChanged={this.paymentOptionChangeHandler}
              /> */}
            {/* payment section */}
            {/* <div>{chosenPaymentMethod}</div> */}
            <hr className="mb-4" />
            <button
              // disabled={!(this.state.makeOrder && this.state.correctCardInfo)}
              className="btn shop-btn-secondary btn-lg btn-block"
              onClick={
                (event) => {
                  setorders(arrayproduct);
                  setnewproductarray(arrayCartproduct);
                  setnewproduct(CartProducts);
                  confirmOrderHandler(event);
                }

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

const mapDispatchToProps = (dispatch, props) => {
  return {
    confirmOrderProp: (order) => {
      dispatch(confirmOrder(order, props));
    },
    UpdataProducts: (id, update) => {
      dispatch(UpdataQuantity(id, update));
    },

    setPromoCodeProp: (promoCode, percentage) =>
      dispatch(setPromoCode(promoCode, percentage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
