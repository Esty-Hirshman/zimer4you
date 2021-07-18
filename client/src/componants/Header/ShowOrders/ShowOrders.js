import React, { useState, useEffect } from "react";
import "./ShowOrders.css";
import { getOwnersOrders } from "../../../service/zimerOwnerServise";
import Order from "./Order/Order";

function ShowOrders() {
  const [orders, setorders] = useState([]);
  
  useEffect(async () => {
    let allOrders = await getOwnersOrders(JSON.parse(localStorage.owner).zimerName);
    setorders(allOrders.userOrder);

  }, []);

  return (
    <>
      <br />
      {orders.length !== 0 && <h5>הביקורים בצימר שלך</h5>}
      <div className="orderContainer">
        {orders.length === 0 && <h3>לצערינו אין לך הזמנות לצימר</h3>}

        <br />
        <div className="row row-margin">
          <div className="col-2 text">
            <p>שם</p>
          </div>
          <div className="col-2 text">
            <p>מספר זהות</p>
          </div>
          <div className="col-3 text">
            <p>כתובת מייל</p>
          </div>
          <div className="col-2 text">
            <p>תאריכי ההזמנה</p>
          </div>
        </div>
        {orders.map((order,index) => {
          return <Order order={order} key={index}/>;
        })}
      </div>
    </>
  );
}

export default ShowOrders;
