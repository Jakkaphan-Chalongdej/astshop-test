import React from "react";
import Setting from "../components/setting/setting.layout";
import Maps from "../components/Google.map/map";
function UserShipping() {

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
          <Maps  />
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
                  type="text"
                  id="full-name"
                  placeholder="Home , school , office"
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="407 Evergreen Rd."
                />
              </div>
              <div>
                <div>
                  <label>city</label>
                  <input type="text" id="city" placeholder="Roseville" />
                </div>
                <div>
                  <label htmlFor="zip-code">Zip code</label>
                  <input type="text" id="zip-code" placeholder={95673} />
                </div>
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <select id="country">
                  <option value="USA">United States</option>
                  <option value="TH">Thailand</option>
                </select>
              </div>
            </div>
          </div>
       
        </div>
      </Setting>
    </>
  );
}

export default UserShipping;
