import React from "react";
import { Icon } from "@iconify/react";
import Paypal from "./Paypal/Paypal";
import arrowDownCircle from "@iconify-icons/bi/arrow-down-circle";
import arrowDownCircleFill from "@iconify-icons/bi/arrow-down-circle-fill";

export default function Payment({
  paid,
  setShowPaypal,
  setclicPaid,
  clicPaid,
  showPaypal,
  setnotPaid,
  notPaid,
  history,
}) {
  return (
    <>
      {" "}
      <br />
      <div
        style={{
          marginTop: "20%",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4vw"
          height="4vw"
          fill="currentColor"
          class="bi bi-credit-card"
          viewBox="0 0 16 16"
          color="#769925"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
          <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
        </svg>
      </div>
      <p className="payment">אנא שלם על הפרסום באתר כאן:</p>
      {paid !== false && (
        <Icon
          icon={arrowDownCircle}
          style={{
            color: "#769925",
            fontSize: "2vw",
          }}
        />
      )}
      {paid === false && (
        <Icon
          icon={arrowDownCircleFill}
          style={{
            color: "#769925",
            fontSize: "2.5vw",
          }}
        />
      )}
      <br />
      {notPaid === true && (
        <>
          <small
            style={{
              color: "red",
            }}
          >
            עדיין לא שלמת, לא ניתן לפרסם את הצימר ללא תשלום
          </small>
          <br />
        </>
      )}
      <button
        className="paymentButton"
        onClick={() => setShowPaypal(true)}
        onMouseOver={() => setclicPaid(true)}
        onMouseLeave={() => setclicPaid(false)}
      >
        לתשלום:
        {clicPaid && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3nw"
            height="1.3vw"
            fill="currentColor"
            class="bi bi-credit-card"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
          </svg>
        )}
      </button>
      <br />
      {showPaypal && (
        <div>
          <br />
          <small
            style={{
              color: "#769925",
            }}
          >
            {" "}
            התשלום מאובטח דרך paypal כדי לשמור על בטחונך
          </small>
          <br />
          <Paypal history={history} price="150" setnotPaid={setnotPaid} />
          <br />
        </div>
      )}
    </>
  );
}
