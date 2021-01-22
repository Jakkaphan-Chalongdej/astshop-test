import React from "react";
import { Col, Row } from "react-bootstrap";
import "../views/Home/Home.css";
export default function Contact() {
  return (
    <>
      <div className="contact-list">
        {/* <h1>Contact</h1> */}
        <br />
        <br />
        <Row>
          <Col>
            <div
              className="center"
              style={{ marginTop: "100px", marginLeft: "150px" }}
            >
              <img src="/ast2.png" alt="logo-navbaer" />
            </div>
          </Col>
          <Col>
            <p  style={{  marginLeft: "50px" ,fontSize:'18px' }}>
              <br />
              <b style={{fontSize:'20px' }}>
                สำนักงานใหญ่
                <br />
                <br />
              </b>
              ที่อยู่ : 47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี 11120
              <br />
              47/316 Poppular Rd., Ban Mai, Pak Kret,
              <br />
              Nonthaburi 11120 <br />
              <br />
              <br />
              <br />
              <b style={{fontSize:'20px' }}>สำนักงานนครราชสีมา </b>
              <br />
              <br />
              <br />
              ที่อยู่ : 3279/25 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000
              <br />
              3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,
              <br />
              NakhonRatchasima,Thailand 30000 <br />
              <br />
              <b style={{fontSize:'18px' }}>โทรศัพท์/แฟ็กซ์</b> 02-012-3795 / 065-969-3552 <br />
              Tel./Fax. +662-012-3795 <br />
              Mobile : +665-969-3552
              <br />
              Email : ast.allsolutionstech@gmail.com
              <br /> <br />
            </p>
            <div style={{ marginBottom: "100px" }}></div>
          </Col>
        </Row>
      </div>
    </>
  );
}
