import React, { useState, useEffect } from "react";
import "./Login.css";
import { Button, Modal } from "react-bootstrap";
import FormField from "./FormField/FormField";
import { isLoginValuesValid } from "../../../shared/validation.js";
import logo from "../../../asset/imgs/logo.png";
import {
  loginUser,
  changePassword,
} from "../../../service/userService.js";
import SignIn from "./SignIn/SignIn";

function Login(props) {
  const [loginValuse, setloginValuse] = useState({
    email: null,
    password: null,
  });
  const [loginErrors, setloginErrors] = useState({});
  const [isSigned, setisSigned] = useState(true);
  const [mailSent, setmailSent] = useState(false);
  const [newUser, setnewUser] = useState(false);
  const [showSignin, setshowSignin] = useState(false);
  const [notRegisterd, setnotRegisterd] = useState(false);

  useEffect(() => {}, [newUser]);
  useEffect(() => {}, [isSigned]);

  const updatValues = (e) => {
    setloginValuse({
      ...loginValuse,
      [e.target.name]: e.target.value,
    });
  };
  function handleOpenSignin() {
    setshowSignin(true);
    props.handleClose();
  }

  function handleCloseSignin() {
    setshowSignin(false);
  }
  const login = async () => {
    //validation in client
    let errors = isLoginValuesValid(loginValuse);
    setloginErrors(errors);
    if (Object.keys(errors).length !== 0) {
      //if errors in field return
      return;
    }
    let user = await loginUser(loginValuse);
    //if errorsin server
    if (user.id === undefined && user !== "false") {
      setloginErrors(user);
      return;
    }
    props.onUpdate(user);
    setnewUser(true); //set user
    setloginErrors({});
    if (user === "false") {
      setisSigned(false);
    } else {
      setisSigned(true);
      setloginValuse({
        email: null,
        password: null,
      });
      localStorage.statuse = "user";
      props.onChange("user");
      props.handleClose();
    }
  };

  
  const getPasswordInMail = async () => {
    if (loginValuse.email === null) {
      setloginErrors({
        ...loginErrors,
        email: "הזן מייל תחילה",
      });
    } else {
      //random new passwors
      var newPassword =
        Math.random().toString(36).slice(-7) +"6"+     
        Math.random().toString(36).toUpperCase().slice(-1);
        let res = await changePassword(loginValuse.email, newPassword);
        if(res === "ok"){
          setmailSent(true);
        }else{
          setnotRegisterd(true);
        }
    }
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> כניסה{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <small onClick={handleOpenSignin}>
            עדיין אין לך חשבון?
            <small className="login"> לחץ להרשמה </small>
          </small>
          <br />
          <FormField
            type="password"
            name="password"
            value={loginValuse.password}
            onChange={updatValues}
            placeholder="*ססמא"
            error={loginErrors.password}
          />
          <br></br>
          <FormField
            type="text"
            name="email"
            value={loginValuse.email}
            onChange={updatValues}
            placeholder="*מייל"
            error={loginErrors.email}
          />
          <br />
          {!isSigned && Object.keys(loginErrors).length !== 0 &&(
            <small style={{ color: "red" }}>הסיסמא או המייל שגויים</small>
          )}
          <br />
          {!mailSent &&  (
            <small onClick={getPasswordInMail} className="getpassword">
              שכחת ססמא? לחץ לקבלת סיסמא במייל
            </small>
          )}
          {mailSent && <small>הזן את הסיסמא שנשלחה אליך למייל</small>}
          {!isSigned && Object.keys(loginErrors).length === 0 && (
            <div>עדיין לא נרשמת, אנא הרשם</div>
          )}
          <br/>
          {notRegisterd && <small>אינך רשום, אנא הרשם</small>}
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" onClick={login}>
            אישור
          </Button>
        </Modal.Footer>
      </Modal>

      <SignIn
        handleClose={handleCloseSignin}
        show={showSignin}
        onUpdate={props.onUpdate}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Login;
