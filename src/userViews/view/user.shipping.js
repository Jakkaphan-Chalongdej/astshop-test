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
    if (formData.AddressName !== null) {
      data["AddressName"] = formData.AddressName;
    }
    if (formData.Address !== null) {
      data["Address"] = formData.Address;
    }
    if (formData.Country !== null) {
      data["Country"] = formData.Country;
    }
    if (formData.ZipCode !== null) {
      data["ZipCode"] = formData.ZipCode;
    }
    if (formData.city !== null) {
      data["city"] = formData.city;
    }
    console.log(data);
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
            <h1>Delivery Addresses</h1>
          </header>
          <Row>
            <Col sm={12} md={6} xl={6} className="address-form-col">
              {Object.keys(props.Auth.user).length > 0 && (
                <div className="address-form ">
                  <div className="card-address ">
                    <ul>
                      <div className="address-input">
                        <li>AddressName :</li>
                        <span>{props.Auth.user.AddressName}</span>
                      </div>
                      <div className="address-input">
                        <li>Address :</li>
                        <span>{props.Auth.user.Address}</span>
                      </div>
                      <div className="address-input">
                        <li>ZipCode :</li>
                        <span>{props.Auth.user.ZipCode}</span>
                      </div>
                      <div className="address-input">
                        <li>city :</li>
                        <span>{props.Auth.user.city}</span>
                      </div>
                      <div className="address-input">
                        <li>Country :</li>
                        <span>{props.Auth.user.Country}</span>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
            </Col>
            <Col sm={12} md={6} xl={6} className="address-form-col">
              <div className="address-form address-form-2  ">
                <div className="address-input">
                  <label>Address name</label>
                  <input
                    name="AddressName"
                    onChange={handleChange}
                    value={formData.AddressName}
                    placeholder="Home , school , office"
                  />
                </div>
                <div className="address-input">
                  <label>Address</label>
                  <input
                    name="Address"
                    onChange={handleChange}
                    value={formData.Address}
                    placeholder="407 Evergreen Rd."
                  />
                </div>
                <div>
                  <div className="address-input">
                    <label>city</label>
                    <input
                      name="city"
                      onChange={handleChange}
                      value={formData.city}
                      placeholder="Roseville"
                    />
                  </div>
                  <div className="address-input">
                    <label htmlFor="zip-code">Zip code</label>
                    <input
                      name="ZipCode"
                      onChange={handleChange}
                      value={formData.ZipCode}
                      placeholder={9567}
                    />
                  </div>
                </div>
                <div className="address-input">
                  <label htmlFor="country">Country</label>
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
