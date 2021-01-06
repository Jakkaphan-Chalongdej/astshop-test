import React from "react";
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import  "./menu.css";
import { Dropdown, Navbar, ButtonGroup } from "react-bootstrap";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    backgroundColor:"#f17e0a",
    color:"#fff",
    padding: "0 4px",
  },
}))(Badge);

const menuName = [
  { href: "/", label: "Home" },
  {
    href: "/all",
    label: "All ",
    subMenus: [
      { href: "/all", name: "กล้องวงจรปิด" },
      { href: "/all", name: "เครื่องบันทึกDVR" },
      { href: "/all", name: "  เครื่องสแกน" },
      { href: "/all", name: "  นาฬิกายาม (Guardtour)" },
      { href: "/all", name: "  โดรนถ่ายภาพ (Drone)" },
      { href: "/all", name: "  การ์ด Card" },
      { href: "/all", name: "เครื่องทาบบัตร (Reader Card)" },
      { href: "/all", name: "  เครื่องอ่านการ์ด(Access Control)" },
      { href: "/all", name: "  ชุดกลอนแม่เหล็กไฟฟ้า" },
      { href: "/all", name: "ระบบแจ้งเตือนเพลิงใหม้" },
      { href: "/all", name: "  สัญญาณกันขโมย" },
      { href: "/all", name: " GPS ติดตามรถยนต์" },
      { href: "/all", name: "  Network accessories" },
      { href: "/all", name: "  ประตู" },
      { href: "/all", name: "  เว็บไซต์" },
      { href: "/all", name: "  ตู้สาขาโทรศัพท์" },
      { href: "/all", name: " รั้วไฟฟ้า" },
      { href: "/all", name: "  บ้านอัจฉริยะ (HomeXpert)" },
      { href: "/all", name: "  อุปกรณ์ความปลอดภัยส่วนบุคคล" },
      { href: "/all", name: "  งานจราจร" },
      { href: "/all", name: "  ระบบ POS" },
      { href: "/all", name: " Video Conference" },
      { href: "/all", name: "  ระบบห้องประชุม" },
      { href: "/all", name: " ระบบที่จอดรถ" },
      { href: "/all", name: "  ตู้เซฟ" },
      { href: "/all", name: "  LED Display" },
      { href: "/all", name: "  Accessories" },
      { href: "/all", name: "  ระบบประตูกั้นทางเดิน" },
      { href: "/all", name: " เครื่องทำลายเอกสาร" },
      { href: "/all", name: "  เครื่องบันทึกเวลา" },
      { href: "/all", name: "  รับทำและออกแบบเว็บไซต์" },
      { href: "/all", name: "  ระบบออกบัตรประจำตัว" },
      { href: "/all", name: "  เครื่องพับเอกสาร" },
      { href: "/all", name: "  กริ่งสนทนา (VDO PHONE)" },
    ],
  },
  { href: "/category/camera", label: "Camera" },
  { href: "/sale", label: "Sale" },
  { href: "/contact", label: "Contact" },
];

const MenuComponent = (props) => {
  return (
    <React.Fragment>
      {menuName.map(function (name, i) {
        if (name.subMenus !== undefined) {
          return (
            <>
              <Navbar>
                <Dropdown as={ButtonGroup}>
                  <Navbar>
                  {/* <MenuItem key={i} linkTo={name.href} exact>
                        {name.label}
                      </MenuItem> */}
                  <Dropdown.Toggle id="dropdown1" className='btn btn-primary2'>{name.label}</Dropdown.Toggle>                  
                  <Dropdown.Menu key={i} className='dropdown-menu 'alignRight>
                    {/* <div className="dropdown-menu"> */}
                      {name.subMenus.map(function (subMenu, i) {
                        return (
                          <Dropdown.Item key={i}>
                            <MenuItem key={i} linkTo={subMenu.href}>
                              {subMenu.name}
                            </MenuItem>
                          </Dropdown.Item>
                        );
                      })}
                    {/* </div> */}
                    </Dropdown.Menu>
                  </Navbar>
                </Dropdown>
              </Navbar>
            </>
          );
        } else {
          return (
            <>
              <Navbar>
                <MenuItem key={i} linkTo={name.href} exact>
                  <li>{name.label}</li>
                </MenuItem>
              </Navbar>
            </>
          );
        }
      })}
      <Navbar>
        <MenuItem linkTo={"/cart"}>
          <IconButton aria-label="cart">
            <StyledBadge
              badgeContent={props.cartCount}
              style={{ color: "#6e6e6e" }}
            >
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </MenuItem>
      </Navbar>
    </React.Fragment>
  );
};

MenuComponent.propTypes = {
  cartCount: PropTypes.number,
};

export default MenuComponent;
