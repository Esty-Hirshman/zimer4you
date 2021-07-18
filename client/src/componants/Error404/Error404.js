import React from "react";
import { useHistory } from "react-router-dom";
import "./Error404.css";
import error from "../../asset/imgs/error2.png";

function Error404() {
  let history = useHistory();
  return (
    <div>
      <img src={error} className="errorImg"></img>
      <br />
      <button className="errorButtom" onClick={() => history.push("/")}>
        חזרה לדף הבית
      </button>
    </div>
  );
}

export default Error404;
