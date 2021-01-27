import React, { useState } from "react";
import Setting from "../components/setting/setting.layout";

import "./style.payment.scss";

function UserPayMethodsEdit() {
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const show = () => {
    setShowForm(true);
    setShowForm2(false);
  };
  const show2 = () => {
    setShowForm2(true);
    setShowForm(false);
  };
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
        <div className="container-paymant card-paymant ">
          <div className="container-paymants ">
            <div className="info-payment">
              <h1>Payment Card</h1>
            </div>
            <form className="modal-payment form-payment">
              <header className="header-payment ">
                <div className="card-type-payment">
                  <div
                    className={`card-payment ${showForm && "active"}`}
                    onClick={show}
                  >
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Visa.png" alt='' />
                  </div>
                  <div
                    className={`card-payment ${showForm2 && "active"}`}
                    onClick={show2}
                  >
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/MC.png" alt=''/>
                  </div>
                </div>
              </header>
              <div className="content-payment">
                <div className="form-payment">
                  <div className="form-row-payment">
                    <div className="input-group-payment">
                      <label>Name on card</label>
                      <input placeholder type="text" />
                    </div>
                  </div>
                  <div className="form-row-payment">
                    <div className="input-group-payment">
                      <label>Card Number</label>
                      <input maxlength={16} placeholder type="text" />
                    </div>
                  </div>

                  <div className="form-row-payment">
                    <div className="input-group-payment ">
                      <label>Expiry Date</label>
                      <div className="col-payment">
                        <input
                          maxlength={2}
                          style={{ width: "140px" }}
                          placeholder="MM "
                        />

                        <input
                          maxlength={4}
                          style={{ width: "140px" }}
                          placeholder=" YYYY"
                        />
                      </div>
                    </div>

                    <div className="input-group-payment">
                      <label>CVS</label>
                      <input maxlength={3}  placeholder=" 568"type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <footer className="footer mb-4">
                <button className="button">Complete Payment</button>
              </footer>
            </form>
          </div>
        </div>
      </Setting>
    </>
  );
}

export default UserPayMethodsEdit;
