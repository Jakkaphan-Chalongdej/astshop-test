import React from "react";
import Setting from "../components/setting/setting.layout";
import { connect } from "react-redux";
import { updateUser } from "../../store/actions/actionLogin/auth";
import { Row, Col } from "react-bootstrap";
import "./address.css";
function UserShipping(props) {
  const formdefault = {
    AddressName: null,
    Address: null,
    Country: null,
    ZipCode: null,
    city: null,
  };
  const [formData, updateFormData] = React.useState(formdefault);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const data = {};
    if (formData.AddressName !== null && formData.AddressName !== "") {
      data["AddressName"] = formData.AddressName;
    }
    if (formData.Address !== null && formData.Address !== "") {
      data["Address"] = formData.Address;
    }
    if (formData.Country !== null && formData.Country !== "") {
      data["Country"] = formData.Country;
    }
    if (formData.ZipCode !== null && formData.ZipCode !== "") {
      data["ZipCode"] = formData.ZipCode;
    }
    if (formData.city !== null && formData.city !== "") {
      data["city"] = formData.city;
    }
    props.updateUser(props.Auth.user.id, data);
    updateFormData(formdefault);
    props.history.push("/user/delivery-addresses");
  }
  return (
    <>
      <Setting
        breadCrumbs={[
          {
            label: "Delivery Addresses",
            to: "/user/delivery-addresses",
          },
        ]}
      >
        <div className="container-paymant container-address">
          <header>
            <h1>ที่จัดส่ง</h1>
          </header>
          <Row>
            <Col sm={12} md={6} xl={6} className="address-form-col">
              {Object.keys(props.Auth.userDetail).length > 0 && (
                <div className="address-form ">
                  <div className="card-address ">
                    <ul>
                      <div className="address-input">
                        <li>ชื่อที่อยู่ :</li>
                        <span>{props.Auth.userDetail.AddressName}</span>
                      </div>
                      <div className="address-input">
                        <li>ที่อยู่ :</li>
                        <span>{props.Auth.userDetail.Address}</span>
                      </div>
                      <div className="address-input">
                        <li>จังหวัด :</li>
                        <span>{props.Auth.userDetail.city}</span>
                      </div>
                      <div className="address-input">
                        <li>รหัสไปรษณีย์ :</li>
                        <span>{props.Auth.userDetail.ZipCode}</span>
                      </div>

                      <div className="address-input">
                        <li>ประเทศ :</li>
                        <span>{props.Auth.userDetail.Country}</span>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
            </Col>
            <Col sm={12} md={6} xl={6} className="address-form-col">
              <div className="address-form address-form-2  ">
                <div className="address-input">
                  <label>ชื่อที่อยู่</label>
                  <input
                    name="AddressName"
                    onChange={handleChange}
                    value={formData.AddressName}
                    placeholder="Home , school , office"
                  />
                </div>
                <div className="address-input">
                  <label>ที่อยู่</label>
                  <input
                    name="Address"
                    onChange={handleChange}
                    value={formData.Address}
                    placeholder="407 Evergreen Rd."
                  />
                </div>
                <div>
                  <div className="address-input">
                    <label>จังหวัด</label>
                    <input
                      name="city"
                      onChange={handleChange}
                      value={formData.city}
                      placeholder="Roseville"
                    />
                  </div>
                  <div className="address-input">
                    <label htmlFor="zip-code">รหัสไปรษณีย์</label>
                    <input
                      name="ZipCode"
                      onChange={handleChange}
                      value={formData.ZipCode}
                      placeholder={9567}
                    />
                  </div>
                </div>
                <div className="address-input">
                  <label htmlFor="country">ประเทศ</label>
                  <input
                    name="Country"
                    onChange={handleChange}
                    value={formData.Country}
                    placeholder={"Country"}
                  />
                </div>
                <div>
                  <button onClick={handleSubmit}>update</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Setting>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    Auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (id, update) => dispatch(updateUser(id, update)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShipping);
