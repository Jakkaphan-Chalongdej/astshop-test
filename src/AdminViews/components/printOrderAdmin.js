import React from "react";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "../../components/print/FormToPrint";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
function PrintOrder(props) {
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Button onClick={handlePrint}>Print this out!</Button>
      <ComponentToPrint
        ref={componentRef}
        id={props.Print.id}
        product_name={props.Print.product_name}
        img={props.Print.img}
        firstname={props.Print.firstname}
        quantity={props.Print.quantity}
        price={props.Print.price}
        Address={props.Print.Address}
        city={props.Print.city}
        ZipCode={props.Print.ZipCode}
        Country={props.Print.Country}
        vat={props.Print.vat}
        currency={props.Print.currency}
        shippingPrice={props.Print.shippingPrice}
      />
    </div>
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
    usedCurrencyProp: state.product.usedCurrency,
    Print: state.product.Print,
  };
};
export default connect(mapStateToProps)(PrintOrder);
