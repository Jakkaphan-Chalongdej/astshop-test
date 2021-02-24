import React from "react";
import "./formprint.css";
import { Row, Col } from "react-bootstrap";
export class ComponentToPrint extends React.PureComponent {
  render() {
 
    return (
      <ul className="card-form">
        <div className="card-form-border">
          <div className="form-print-logo">
            <div>
              <img src="../../../ast2.png" alt="logo ast" width="100px" />
            </div>
            <div>
              <span> {this.props.firstname}</span>
              <span style={{ marginLeft: "5px" }}>{this.props.lastname}</span>
            </div>
          </div>

          <hr style={{ marginTop: "200px" }} />
          <Col>
            <Row>
              <Col>
                <img alt={this.props.img}
                  src={`../../../resources/static/assets/tmp/${this.props.img}`}
                />
              </Col>
              <Col>
                <p>Product Name</p>
                <li>{this.props.product_name}</li>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <p>Quantity</p>
                <li>{this.props.quantity}</li>
              </Col>
            </Row>
          </Col>
          <hr />
          <Col style={{ marginTop: "300px" }}>
            <Row>
              <Col>
                <label>BILLING INFORMATION </label>
                <hr />
                <div className="form-print2">
                  <label>Address </label>
                  <li>{this.props.Address}</li>
                </div>
                <div className="form-print2">
                  <label>City </label>
                  <li>{this.props.city}</li>
                </div>
                <div className="form-print2">
                  <label>ZipCode </label>
                  <li>{this.props.ZipCode}</li>
                </div>
                <div className="form-print2">
                  <label>Country </label>
                  <li>{this.props.Country}</li>
                </div>
              </Col>
              <Col>
                <label>Total </label>
                <hr />
                <div className="form-print">
                  <label>vat </label>
                  <li>
                    <span style={{ textTransform: "lowercase" }}>
                      {this.props.currency}
                    </span>
                    {this.props.vat}
                  </li>
                </div>
                <div className="form-print">
                  <label>shippingPrice </label>
                  <li>
                    <span style={{ textTransform: "lowercase" }}>
                      {this.props.currency}
                    </span>
                    {this.props.shippingPrice}
                  </li>
                </div>
                <div className="form-print">
                  <label>Total price </label>
                  <li>
                    <span style={{ textTransform: "lowercase" }}>
                      {this.props.currency}
                    </span>
                    {this.props.price}
                  </li>
                </div>
              </Col>
            </Row>
          </Col>
          {/* <li>{this.props.updatedAt}</li> */}
        </div>
      </ul>
    );
  }
}

// export default ComponentToPrint;
