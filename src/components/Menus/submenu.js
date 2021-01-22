import React from "react";
import "./submenu.scss";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import '../../App.css'
const menu1 = [
  { href: "/category/camera", name: "กล้องวงจรปิด" },
  { href: "/all", name: "  โดรนถ่ายภาพ (Drone)" },
  { href: "/all", name: "เครื่องบันทึกDVR" },
  { href: "/all", name: " ชุดกลอนแม่เหล็กไฟฟ้า" },
  { href: "/all", name: "สัญญาณกันขโมย" },
  { href: "/all", name: " รั้วไฟฟ้า" },
  { href: "/all", name: "  อุปกรณ์ความปลอดภัยส่วนบุคคล" },
  { href: "/all", name: " เครื่องทำลายเอกสาร" },
  { href: "/all", name: "  ระบบประตูกั้นทางเดิน" },
  { href: "/all", name: "  ตู้เซฟ" },
  { href: "/all", name: "ระบบแจ้งเตือนเพลิงใหม้" },
];

const menu2 = [

  { href: "/all", name: "  Network accessories" },
  { href: "/all", name: " ระบบห้องประชุม" },
  { href: "/all", name: " Video Conference" },
  { href: "/all", name: "  ตู้สาขาโทรศัพท์" },
  { href: "/all", name: " เครื่องสแกน" },
  { href: "/all", name: " การ์ด Card" },
  { href: "/all", name: "เครื่องทาบบัตร (Reader Card)" },
  { href: "/all", name: " เครื่องอ่านการ์ด(Access Control)" },
  { href: "/all", name: "  เครื่องบันทึกเวลา" },
  { href: "/all", name: "  ระบบออกบัตรประจำตัว" },
  { href: "/all", name: " GPS ติดตามรถยนต์" },
  
  

];

const menu3 = [
  
  { href: "/all", name: "  ประตูอัตโนมัติ" },
  { href: "/all", name: "Digital Door Lock" },
  { href: "/all", name: "  กริ่งสนทนา (VDO PHONE)" },
  { href: "/all", name: "  บ้านอัจฉริยะ (HomeXpert)" },

  
 
];

const menu4 = [
 
  { href: "/all", name: "  LED Display" },
  { href: "/all", name: "  นาฬิกายาม (Guardtour)" },
  { href: "/all", name: "  Accessories" },
  { href: "/all", name: "  ระบบ POS" },
  { href: "/all", name: " ระบบที่จอดรถ" },
  { href: "/all", name: " LED Display" },
  { href: "/all", name: " เครื่องบันทึกเวลา" },
];

export default function Submenu() {
  return (
    <>
      <ul>
        <li className="menu-item ">
          <Link className="link-styles" to="/all">
            Category
          </Link>
          <i className="menu-icon fas fa-angle-down" />
          <ul className="submenu ">
            <li className="submenu-item">
              {/* menu1 */}
              <ul className="submenu-top">
                <li className="submenu-top-item ">
                  <p className="submenu-title ">Security</p>

                  {menu1.map(function (menu1, i) {
                    return (
                      <>
                        <ul className="submenu-list ">
                          <Link
                            className="link-styles"
                            key={i}
                            to={menu1.href}
                            exact
                          >
                            <Col>{menu1.name}</Col>
                          </Link>
                        </ul>
                      </>
                    );
                  })}
                </li>
                {/* menu2 */}
                <li className="submenu-top-item ">
                  <p className="submenu-title"> Office Automation </p>
                  {menu2.map(function (menu2, i) {
                    return (
                      <>
                        <ul className="submenu-list">
                          <Link
                            className="link-styles"
                            key={i}
                            to={menu2.href}
                            exact
                          >
                            <Col>{menu2.name}</Col>
                          </Link>
                        </ul>
                      </>
                    );
                  })}
                </li>
                {/* menu3 */}
                <li className="submenu-top-item ">
                  <p className="submenu-title">Home</p>
                  {menu3.map(function (menu3, i) {
                    return (
                      <>
                        <ul className="submenu-list">
                          <Link
                            className="link-styles"
                            key={i}
                            to={menu3.href}
                            exact
                          >
                            <Col>{menu3.name}</Col>
                          </Link>
                        </ul>
                      </>
                    );
                  })}
                </li>

                {/* menu4 */}
                <li className="submenu-top-item ">
                  <p className="submenu-title">อื่นๆ</p>
                  {menu4.map(function (menu4, i) {
                    return (
                      <>
                        <ul className="submenu-list">
                          <Link
                            className="link-styles"
                            key={i}
                            to={menu4.href}
                            exact
                          >
                            <Col>{menu4.name}</Col>
                          </Link>
                        </ul>
                      </>
                    );
                  })}
                </li>
              </ul>
              {/* End .submenu-top */}
            </li>
            {/* End .submenu-item*/}
            <ul className="backgroundsubmenu" />
          </ul>
        </li>
      </ul>
    </>
  );
}
