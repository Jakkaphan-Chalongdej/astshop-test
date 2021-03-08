import React from "react";
import "./formprint.css";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
function ComponentToPrint(props) {
  let Orderproduct = props.products.map((productmap, i) => {
    return (
      <Col key={i}>
        <Row>
          <Col>
            <img alt={productmap.name} src={productmap.img_name} />
          </Col>

          <Col>
            <p>Product Name</p>

            {/* <li>{props.product_name}</li> */}
            <li>{productmap.name}</li>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <p>Quantity</p>
            <li>{productmap.order_detail.quantity}</li>
          </Col>
        </Row>
      </Col>
    );
  });
  return (
    <ul className="card-form">
      <div className="card-form-border">
        <div className="form-print-logo">
          <div>
            <img src="../../../ast2.png" alt="logo ast" width="100px" />
          </div>
          <div>
            <span> {props.firstname}</span>
            <span style={{ marginLeft: "5px" }}>{props.lastname}</span>
          </div>
        </div>

        <hr style={{ marginTop: "200px" }} />
        {Orderproduct}
        <hr />
        <Col style={{ marginTop: "300px" }}>
          <Row>
            <Col>
              <label>BILLING INFORMATION </label>
              <hr />
              <div className="form-print2">
                <label>Address </label>
                <li>{props.Address}</li>
              </div>
              <div className="form-print2">
                <label>City </label>
                <li>{props.city}</li>
              </div>
              <div className="form-print2">
                <label>ZipCode </label>
                <li>{props.ZipCode}</li>
              </div>
              <div className="form-print2">
                <label>Country </label>
                <li>{props.Country}</li>
              </div>
            </Col>
            <Col>
              <label>Total </label>
              <hr />
              <div className="form-print">
                <label>vat </label>
                <li>
                  <span style={{ textTransform: "lowercase" }}>
                    {props.currency}
                  </span>
                  {props.vat}
                </li>
              </div>
              <div className="form-print">
                <label>shippingPrice </label>
                <li>
                  <span style={{ textTransform: "lowercase" }}>
                    {props.currency}
                  </span>
                  {props.shippingPrice}
                </li>
              </div>
              <div className="form-print">
                <label>Total price </label>
                <li>
                  <span style={{ textTransform: "lowercase" }}>
                    {props.currency}
                  </span>
                  {props.price}
                </li>
              </div>
            </Col>
          </Row>
        </Col>
      </div>
    </ul>
  );
}
ComponentToPrint.propTypes = {
  idPrint: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  return {
    idPrint: state.product.idPrint,
  };
};
export default connect(mapStateToProps)(ComponentToPrint);
