import  NotRegisterModal from "../NotRegisterModal/NotRegisterModal";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Zimer.css";
import swimmingPool from "@iconify-icons/fa-solid/swimming-pool";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { addToLoveZimmers} from '../../../service/loveZimerServise'
import locationPin from '@iconify-icons/cil/location-pin';
import badgeName from "@iconify-icons/si-glyph/badge-name";
import coinsIcon from "@iconify-icons/fa-solid/coins";


function Zimer(props) {
  const [pleaseSignin, setpleaseSignin] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [added, setadded] = useState(false);
  let swimingPool = false;
  if (
    props.zimer.category[0] === "בריכה" ||
    props.zimer.category[1] === "בריכה" ||
    props.zimer.category[2] === "בריכה" ||
    props.zimer.category[3] === "בריכה" ||
    props.zimer.category[4] === "בריכה"
  ) {
    swimingPool = true;  //check if zimer has swimming pool
  }

  useEffect(() => {
    setadded(false);
  }, [props.clean]);

  function handleOpen() {
    setpleaseSignin(true);
  }

  function handleClose() {
    setpleaseSignin(false);
  }

  function handleOpenLogin() {
    setshowLogin(true);
  }

  function handleCloseLogin() {
    setshowLogin(false);
  }
  const signin = () => {
    handleOpenLogin();
    handleClose();
  };
  const addToLove = async () => {
    if (window.localStorage.user !== "null") {
      //try to add zimer to love zimers
      let isAdded = await addToLoveZimmers(JSON.parse(localStorage.user).id, props.zimer.id)
      //if zimer already was in love zimers list
      if(isAdded === "false"){
        toast(
                "הצימר " + props.zimer.name + " כבר נמצא ברשימת המקומות שאהבת "
              );
              return;
      }else{
        const temp = props.isLoveChange;
        props.onChange(temp + 1);
        toast(" הצימר " + props.zimer.name + " נוסף לרשימת המקומות שאהבת");
        setadded(true);
      }  
    } else {
      handleOpen();
    }
  };

  return (
    <div className="zimer">
      <div style={{ backgroundColor: "white" }}>
        <button className="love" onClick={addToLove}>
          אהבתי{" "}
          {added && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
              color="red"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          )}
          {!added && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
              color="red"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          )}
        </button>
      </div>
      <Link
        to={`/ShowZimer/${props.zimer.id}`}
        style={{ textDecoration: "none" }}
      >
        <div
          style={{ backgroundImage: "url(" + props.zimer.img + ")" }}
          className="zimerImg"
        ></div>

        <div className="moreDeFooters">
          <br />
          <h5>
            <Icon icon={badgeName} style={{ fontSize: "1.5vw" }} />{" "}
            {props.zimer.name}{" "}
          </h5>
          <p>
            <Icon icon={coinsIcon} style={{ fontSize: "1.4vw" }} />{" "}
            {props.zimer.price + " ₪"}
          </p>
          <p className="location">
            <Icon icon={locationPin} style={{ fontSize: "1.4vw" }} />{" "}
            {props.zimer.location}
          </p>
          {swimingPool && (
            <p>
              <Icon icon={swimmingPool} style={{ fontSize: "1.4vw" }} /> בריכת
              שחיה
            </p>
          )}
        </div>
        <div className="col-12">
          <button className="daFooters">לפרטים נוספים</button>
        </div>
      </Link>
      <NotRegisterModal
        pleaseSignin={pleaseSignin}
        handleClose={handleClose}
        signin={signin}
        handleCloseLogin={handleCloseLogin}
        showLogin={showLogin}
        onUpdate={props.onUpdate}
        onChange={props.onChange}
        message={"לא ניתן להוסיף לצימרים שאהבתי לפני כניסה למערכת"}
      />
    </div>
  );
}

export default Zimer;
