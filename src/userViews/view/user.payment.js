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
       
    
      </Setting>
    </>
  );
}

export default UserPayMethods;
