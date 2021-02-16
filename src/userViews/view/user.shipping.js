import React from "react";
import Setting from "../components/setting/setting.layout";
import { connect } from "react-redux";
import { updateUser } from "../../store/actions/actionLogin/auth";
function UserShipping(props) {
  const formdefault = {
    AddressName: "",
    Address: "",
    Country: "",
    ZipCode: "",
    city: "",
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

    const data = {
      AddressName: formData.AddressName,
      Address: formData.Address,
      Country: formData.Country,
      ZipCode: formData.ZipCode,
      city: formData.city,
    };

    props.updateUser(props.Auth.userDetail.data.id, data);
    updateFormData(formdefault);
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
        <div
          className="container-paymant card"
          style={{ padding: "70px,40px" }}
        >
          <header>
            <h1>Delivery Addresses</h1>
          </header>

          {Object.keys(props.Auth.user).length > 0 && (
            <div className="logo">
              <span>AddressName :{props.Auth.user.AddressName}</span>
              <span>Address :{props.Auth.user.Address}</span>
              <span>Country :{props.Auth.user.Country}</span>
              <span>city :{props.Auth.user.city}</span>
              <span>ZipCode :{props.Auth.user.ZipCode}</span>
            </div>
          )}

          <div
            className="info"
            style={{
              gridTemplateColumns: "repeat(1, 1fr)",
              margin: "100px ",
              marginTop: "50px",
            }}
          >
            <div className="billing-info">
              {/* <h4></h4> */}
              <div>
                <label>Address name</label>
                <input
                  name="AddressName"
                  onChange={handleChange}
                  value={formData.AddressName}
                  placeholder="Home , school , office"
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  name="Address"
                  onChange={handleChange}
                  value={formData.Address}
                  placeholder="407 Evergreen Rd."
                />
              </div>
              <div>
                <div>
                  <label>city</label>
                  <input
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    placeholder="Roseville"
                  />
                </div>
                <div>
                  <label htmlFor="zip-code">Zip code</label>
                  <input
                    name="ZipCode"
                    onChange={handleChange}
                    value={formData.ZipCode}
                    placeholder={9567}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  name="Country"
                  onChange={handleChange}
                  value={formData.Country}
                  placeholder={"Country"}
                />
              </div>
              <div>
                <button onClick={handleSubmit}>send</button>
              </div>
            </div>
          </div>
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
