import React, { useState } from "react";
import ZimerCalendar from "./ZimerCalendar/ZimerCalendar";
import { Icon } from "@iconify/react";
import bxCalendar from "@iconify-icons/bx/bx-calendar";
import "./Dates.css";
import PleaseLoginModal from "../PleaseLoginModal/PleaseLoginModal";

function Dates(props) {
  const [show, setShow] = useState(false);
  const [pleaseSignin, setpleaseSignin] = useState(false);

  function handleOpen() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function handleCloseNotRegisted() {
    setpleaseSignin(false);
  }
  function handleOpenNotRegisted() {
    setpleaseSignin(true);
  }
  

  const openDates = () => {
    if (window.localStorage.user != "null") {
      handleOpen();
    } else {
      handleOpenNotRegisted();
    }
  };
  return (
    <div>
      <button className="dateButton" onClick={openDates}>
        <Icon icon={bxCalendar} /> {props.massage}
      </button>
      <ZimerCalendar
        handleClose={handleClose}
        show={show}
        zimerId={props.zimerId}
        zimerName={props.zimerName}
      />
      <PleaseLoginModal 
      pleaseSignin={pleaseSignin}
      handleClose={handleCloseNotRegisted}
      message={"לא ניתן לבחור תאריכים לנופש בצימר לפני כניסה לחשבון כמשתמש"}
      />
    </div>
  );
}

export default Dates;
