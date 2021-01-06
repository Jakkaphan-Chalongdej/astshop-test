import React from "react";
import { Col, Row } from "react-bootstrap";
import "../views/Home/Home.css";
export default function Contact() {
  return (
    <>
      <div className="contact-list">
        <h1>Contact</h1>
        <br />
        <br />
        
        <Row>
          <Col>
            <div className="center" style={{ marginTop: "200px" }}>
              <img src="/logo-AST.png" alt="logo-navbaer" />
            </div>
          </Col>
          <Col>
            <p>
              <br />
              <b>
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
              <b>สำนักงานนครราชสีมา </b>
              <br />
              <br />
              <br />
              ที่อยู่ : 3279/25 ถ.สืบศิริ ต.ในเมือง อ.เมือง จ.นครราชสีมา 30000
              <br />
              3279/25 Suebsiri Rd, T.Nimueng, A.Mueng,
              <br />
              NakhonRatchasima,Thailand 30000 <br />
              <br />
              โทรศัพท์/แฟ็กซ์ 02-012-3795 / 065-969-3552 <br />
              Tel./Fax. +662-012-3795 <br />
              Mobile : +665-969-3552
              <br />
              Email : ast.allsolutionstech@gmail.com
              <br /> <br />
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
