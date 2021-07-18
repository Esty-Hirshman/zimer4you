import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import phoneOutline from '@iconify-icons/eva/phone-outline';
import FormField from "../../Header/Login/FormField/FormField";
import ThankUser from "./ThankUser/ThankUser";
import { isContactValuesValid } from "../../../shared/validation";
import {contacValidation} from '../../../service/userService'
import PleaseLoginModal from "../PleaseLoginModal/PleaseLoginModal";


function Contact(props) {
  const [contactValues, setcontactValues] = useState({
    name: null,
    email: null,
    phone: null,
    address: null,
  });
  const [inputValues, setinputValues] = useState({});
  const [pleaseSignin, setpleaseSignin] = useState(false);
  const [show, setShow] = useState(false);
  const [errorMessageValue, seterrorMessageValue] = useState({});

  function handleClose() {
    setpleaseSignin(false);
  }
  function handleOpen() {
    setpleaseSignin(true);
  }

  
  useEffect(() => {
    let valusePlaceholder = {};
    let user = JSON.parse(localStorage.user);
    if (window.localStorage.user != "null") {
      valusePlaceholder = { name: user.name, email: user.email };
      setcontactValues({
        ...contactValues,
        name: user.name,
        email: user.email,
      });
    } else {
      valusePlaceholder = { name: "*שם מלא", email: "*מייל" };
    }
    setinputValues(valusePlaceholder);
  }, []);

  function handleOpenContact() {
    setShow(true);
  }

  function handleCloseContact() {
    setShow(false);
  }
  useEffect(() => {}, [
    contactValues.name,
    contactValues.email,
    contactValues.phone,
    contactValues.address,
  ]);

  const updatValues = (e) => {
    setcontactValues({
      ...contactValues,
      [e.target.name]: e.target.value,
    });
  };

  const sendDetails = async(event) => {
    if (window.localStorage.user != "null") {
      event.preventDefault();
      let errors = isContactValuesValid(contactValues);
      let serverErrors = await contacValidation(contactValues)
      if(Object.keys(errors).length !== 0 ){
        seterrorMessageValue(errors); 
        return
      };
      if(serverErrors !== "ok" ){
        seterrorMessageValue(serverErrors); 
        return
      }
      else{
        handleOpenContact()
        seterrorMessageValue({})
      }
    }
    else{
      handleOpen()
    }
  };
  return (
    <div>
      <p style={{ marginTop: "2%" }}>צור קשר עם בעל הצימר</p>
      <hr></hr>
      <p style={{ color: "#769925" }}>
      <Icon icon={phoneOutline} /> {"  " + props.phone}
      </p>
      <hr />
      <small>השאר את פרטיך וניצור איתך קשר</small>
      <br />
      <FormField
        type="text"
        name="name"
        value={contactValues.name}
        onChange={updatValues}
        placeholder={inputValues.name}
        error={errorMessageValue.name}
      />
      <br />
      <FormField
        type="email"
        name="email"
        value={contactValues.email}
        onChange={updatValues}
        placeholder={inputValues.email}
        error={errorMessageValue.email}
      />
      <br />
      <FormField
        type="telephone"
        name="phone"
        value={contactValues.phone}
        onChange={updatValues}
        placeholder="מספר טלפון"
        error={errorMessageValue.phone}
      />
      <br />
      <FormField
        type="text"
        name="address"
        value={contactValues.address}
        onChange={updatValues}
        placeholder="כתובת"
        error={errorMessageValue.address}
      />
      <hr></hr>
      <button className="contact" onClick={sendDetails}>
        שליחה
      </button>
      <PleaseLoginModal 
        pleaseSignin={pleaseSignin}
        handleClose={handleClose}
        message={"לא ניתן ליצור קשר עם בעל הצימר לפני כניסה לחשבון כלקוח"}
        />
      <ThankUser
        name={contactValues.name}
        email={contactValues.email}
        phone={contactValues.phone}
        handleClose={handleCloseContact}
        show={show}
        zimer={props.zimer}
      />
    </div>
  );
}

export default Contact;
