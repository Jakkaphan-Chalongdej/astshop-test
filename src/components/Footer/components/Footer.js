import {  Row, Col, Card } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Card.Footer style={{ marginTop: "200px" }}>
        <Row className="footers">
          <Col>
            <div className="center">
              <img src="/logo-AST.png" alt="logo-navbaer" />
            </div>
          </Col>
          <Col>
            <h3>
              บริษัท ออลล์โซลูชั่นส์เทค จำกัด
              <br />
              ALL SOLUTIONS TECH CO.,LTD.
              <br />
            </h3>
            <p>
              <br />
              <b>
                สำนักงานใหญ่
                <br />
              </b>
              ที่อยู่ : 47/316 ถ.ป๊อปปูล่า ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี 11120
              <br />
              47/316 Poppular Rd., Ban Mai, Pak Kret,
              <br />
              Nonthaburi 11120 <br />
              <br />
              <b>สำนักงานนครราชสีมา </b>
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
          <Col style={{ marginLeft: "50px" }}>
            <h3>สอบถามข้อมูลเกี่ยวกับ </h3>
            <br />
            <p>
              {" "}
              กล้องวงจรปิด,
              <br />
              จำหน่ายกล้องวงจรปิด,
              <br />
              เครื่องสแกนลายนิ้วมือ,
              <br />
              สัญญาณกันขโมยบ้าน, <br />
              ตู้สาขาโทรศัพท์, <br />
              วางระบบ Network,
              <br />
              ติดตั้งประตู AutoDoor,
              <br />
              แผงไม้กั้น, <br />
              วางระบบ CarPark, <br />
              ออกแบบระบบขายหน้าร้าน POS <br />
              ระบบซื้อมาขายไป <br />
              ระบบจ่ายเงินเดือนและอีกมากมาย
            </p>
          </Col>
        </Row>
      </Card.Footer>
    </div>
  );
}
export default Footer;
