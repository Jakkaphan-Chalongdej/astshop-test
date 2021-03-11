import React from "react";
import "./formprint.css";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
function ComponentToPrint(props) {
  let Orderproduct =
    props.products !== undefined &&
    props.products.map((productmap, i) => {
      return (
        <Col key={i}>
          <Row>
            <Col>
              <img alt={productmap.name} src={productmap.img_name} />
            </Col>

            <Col>
              <p>ชื่อสินค้า</p>

              {/* <li>{props.product_name}</li> */}
              <li>{productmap.name}</li>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <p>จำนวน</p>
              <li>{`${productmap.order_detail.quantity.toLocaleString()} ชิ้น`}</li>
            </Col>
          </Row>
        </Col>
      );
    });
  return (
    <ul className="card-form">
      <div className="card-form-border">
        <div className="print-header">
          <h3>บริษัท ออลล์โซลูชั่นส์เทค จำกัด </h3>
          <h3>ALL SOLUTIONS TECH CO.,LTD.</h3>
          <h6>3279/25 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000</h6>
        </div>
        <div className="form-print-logo">
          <div>
            <img src="../../../ast2.png" alt="logo ast" width="100px" />
          </div>
          <div >
            {`ชื่อ ${props.firstname}`}
            <span style={{ marginLeft: "5px" }}>
              {`สกุล ${props.lastname}`}
            </span>
          </div>
        </div>
        <hr style={{ marginTop: "100px" }} />
        {Orderproduct}
        <hr />
        <Col style={{ marginTop: "100px" }}>
          <h6 style={{ textAlign: "left" }}>การชำระเงิน</h6>

          <hr />
          <div className="form-print-payment-head">
            <ul>
              <li>
                เมื่อชำระเงินเรียบร้อยแล้ว กรุณาแจ้งทางร้าน ผ่านทางโทรศัพท์
              </li>
              <li>ทาง E-Mail หรือส่ง Fax. มาที่เบอร์ 044-353569</li>
            </ul>
            <li>
              <b>ชื่อบัญชี บริษัท ออลล์เว็บ เทคโนโลยี่ จำกัด</b>
            </li>
          </div>
          <br />
          <div className="form-print-payment">
            <span>
              <img src="/ktb.jpg" alt="ธนาคารกรุงไทย" />
            </span>
            <div className="form-payment">
              <li>ธนาคารกรุงไทย สาขาเดอะมอลล์ นครราชสีมา </li>
              <li> ประเภทออมทรัพย์</li>
            </div>
            <li>398-0-03765-7</li>
          </div>
          <hr />
          <div className="form-print-payment">
            <span>
              <img src="/scb-logo-desktop.svg" alt="ธนาคารไทยพาณิชย์" />
            </span>
            <div className="form-payment">
              <li>ธนาคารไทยพาณิชย์ สาขาเดอะมอลล์ นครราชสีมา </li>
              <li> ประเภทออมทรัพย์</li>
            </div>
            <li>813-2-63730-7</li>
          </div>
          <br />
          <Row style={{ marginTop: "120px" }}>
            <Col>
              <h6>ที่อยู่จัดส่ง </h6>
              <hr />
              <div className="form-print2">
                <label>ที่อยู่ </label>
                <li>{props.Address}</li>
              </div>
              <div className="form-print2">
                <label>จังหวัด </label>
                <li>{props.city}</li>
              </div>
              <div className="form-print2">
                <label>รหัสไปรษณีย์ </label>
                <li>{props.ZipCode}</li>
              </div>
              <div className="form-print2">
                <label>ประเทศ </label>
                <li>{props.Country}</li>
              </div>
              <div className="form-print2">
                <label>เบอร์โทร </label>
                <li>{`0${props.phone}`}</li>
              </div>
            </Col>
            <Col>
              <h6>สรุปยอด </h6>
              <hr />
              <div className="form-print">
                <label>ภาษี </label>
                <li>
                  <span style={{ textTransform: "lowercase" }}>
                    {props.currency}
                  </span>

                  {props.vat.toLocaleString()}
                </li>
              </div>
              <div className="form-print">
                <label>ค่าส่ง </label>
                <li>
                  <span style={{ textTransform: "lowercase" }}>
                    {props.currency}
                  </span>
                  {props.shippingPrice.toLocaleString()}
                </li>
              </div>
              <div className="form-print">
                <label>ยอดเงินสุทธิ</label>
                <li>
                  <span style={{ textTransform: "lowercase" }}>
                    {props.currency}
                  </span>

                  {props.price.toLocaleString()}
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
