import React from "react";
import "./ShowInLove.css";
import { Link } from "react-router-dom";
import {deleteLoveZimers} from '../../../../service/loveZimerServise'

function ShowInLove(props) {

  const removeItem = async () => {
    if (window.localStorage.user != "null") {
      await deleteLoveZimers(JSON.parse(localStorage.user).id, props.zimer.id);
      let num = props.numLove - 1;
      props.onChange(num);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <Link
            to={`/ShowZimer/${props.zimer.id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={props.zimer.img}
              className="loveImg"
              onClick={props.handleClose}
            ></img>
          </Link>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <h5>{props.zimer.name}</h5>
          <p>{props.zimer.price} ₪</p>
        </div>
        <div className="col-3">
          <button onClick={removeItem} className="remove">
            להסרה
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowInLove;
