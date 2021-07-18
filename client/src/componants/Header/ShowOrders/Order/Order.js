import React from "react";
import "./Order.css";
import moment from "moment";

function Order(props) {
  
  const dateOver = (date) => {
    let currentDate = new Date();
    let today = moment(currentDate).format("YYYY-MM-DD");
    return today > date;
  };
  return (
    <div className="order">
      <div className="row">
        <div className="col-2 orderDetails">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7vw"
            height="1.7vw"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
            color=" rgb(127, 180, 21)"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>

          <p>{" " + props.order.userName}</p>
        </div>
        <div className="col-2 orderDetails">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7vw"
            height="1.7vw"
            fill="currentColor"
            class="bi bi-card-heading"
            viewBox="0 0 16 16"
            color="#769925"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
          </svg>
          <p>{"  " + props.order.userId}</p>
        </div>
        <div className="col-3 orderDetails">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7vw"
            height="1.7vw"
            fill="currentColor"
            class="bi bi-envelope"
            viewBox="0 0 16 16"
            color="#769925"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
          </svg>
          <p>{"  " + props.order.userEmail}</p>
        </div>
        <div className="col-2">
          <p className="dates-text">מבקר בתאריכים:</p>
        </div>
        <div className="col-2 Details">
          <ul className="showDates">
            {props.order.dates.map((date, index) => {
              return (
                <p
                  key={index}
                  style={
                    dateOver(date) ? { color: " #d9d9d9" } : { color: "black" }
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.1vw"
                    height="1.1vw"
                    fill="currentColor"
                    class="bi bi-calendar-date-fill"
                    viewBox="0 0 16 16"
                    color="#769925"
                  >
                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                    <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                  </svg>
                  {" " + date + "  "}
                </p>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Order;
