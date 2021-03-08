import React from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./FormToPrint";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
function PrintOrder(props) {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
console.log('order',props.auth.username)
  return (
    <>
      <Button onClick={handlePrint}>Print this out!</Button>
      <ComponentToPrint
        ref={componentRef}
        id={props.Print.id}
        // product_name={product.name}
        products={props.Print.products}
        firstname={props.auth.firstname}
        quantity={props.Print.quantity}
        price={props.Print.price}
        Address={props.auth.Address}
        city={props.auth.city}
        ZipCode={props.auth.ZipCode}
        Country={props.auth.Country}
        vat={props.Print.vat}
        currency={props.Print.currency}
        shippingPrice={props.Print.shippingPrice}
      />
    </>
  );
}
PrintOrder.propTypes = {
  Print: PropTypes.object.isRequired,
  orderUser: PropTypes.array.isRequired,
  usedCurrencyProp: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    orderUser: state.product.orderUser,
    auth: state.auth.userDetail,
    usedCurrencyProp: state.product.usedCurrency,
    Print: state.product.Print,
  };
};
export default connect(mapStateToProps)(PrintOrder);
