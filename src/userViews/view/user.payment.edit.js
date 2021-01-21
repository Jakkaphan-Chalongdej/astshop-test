import React from "react";
import Setting from "../components/setting/setting.layout";
import { GrCreditCard } from "react-icons/gr";

function UserPayMethodsEdit() {
  return (
    <>
      <Setting
        breadCrumbs={[
          {
            label: "payment",
            to: "/user/payment",
          },
        ]}
      >
        <div className="container-paymant card">
          <header>
            <h1>Payment</h1>
          </header>
          <div className="payment-methods">
            <div className="methods">
              <GrCreditCard style={{ fontSize: 100 }} />
            </div>
          </div>
          <div className="info" >
            <div className="billing-info">
              <h4>Billing info</h4>
              <div>
                <label htmlFor="full-name">Full name</label>
                <input type="text" id="full-name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="407 Evergreen Rd."
                />
              </div>
              <div>
                <div>
                  <label htmlFor="city">city</label>
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
                  <option value="TH">Thailang</option>
                </select>
              </div>
            </div>
            <div className="card-info">
              <h4>Credit card info</h4>
              <div>
                <div>
                  <label>Card number</label>
                  <input
                    type="text"
                    id="card-number"
                    placeholder="1234   5678   3456   2456"
                  />
                </div>
                <div>
                  <p style={{ marginTop: "10px" }}>Visa</p>
                </div>
              </div>
              <div>
                <label htmlFor="holder-name">Cardholder name</label>
                <input type="text" id="holder-name" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="exp">Expire date</label>
                <input type="month" id="exp" defaultValue="2021-05" />
              </div>
              <div>
                <div>
                  <label htmlFor="cvv">Cvv</label>
                  <input type="text" id="cvv" placeholder={123} />
                </div>
              </div>
            </div>
            <input type="submit" defaultValue="Proceed" />
          </div>
        </div>
      </Setting>
    </>
  );
}

export default UserPayMethodsEdit;
