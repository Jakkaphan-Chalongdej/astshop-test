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

  console.log("Print", props.Print.users);

  return (
    <div>
      <Button onClick={handlePrint}>Print this out!</Button>
      {props.Print.users !== undefined && (
        <ComponentToPrint
          ref={componentRef}
          id={props.Print.id}
          products={props.Print.products}
          quantity={props.Print.quantity}
          price={props.Print.price}
          phone={props.Print.users[0].phone}
          firstname={props.Print.users[0].firstname}
          lastname={props.Print.users[0].lastname}
          Address={props.Print.users[0].Address}
          city={props.Print.users[0].city}
          ZipCode={props.Print.users[0].ZipCode}
          Country={props.Print.users[0].Country}
          vat={props.Print.vat}
          currency={props.Print.currency}
          shippingPrice={props.Print.shippingPrice}
        />
      )}
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
    auth: state.auth.userDetail,
    usedCurrencyProp: state.product.usedCurrency,
    Print: state.product.Print,
  };
};
export default connect(mapStateToProps)(PrintOrder);
