import React from "react";
import Setting from "../components/setting/setting.layout";
import './style.payment.scss'
function UserPayMethods() {
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
      <div className="container-paymant card-paymant"></div>
       
    
      </Setting>
    </>
  );
}

export default UserPayMethods;
