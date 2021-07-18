import React, { useState, useEffect } from "react";
import "./SignIn.css";
import { Button, Modal } from "react-bootstrap";
import FormField from "../FormField/FormField";
import { isSigninValuesValid } from "../../../../shared/validation.js";
import { addUser,isNewUser } from "../../../../service/userService.js";
import logo from "../../../../asset/imgs/logo.png";

function SignIn(props) {
  const [signinValuse, setsigninValuse] = useState({
    name: null,
    id: null,
    email: null,
    password: null,
    validPassword: null,
  });
  const [signinErrors, setsigninErrors] = useState({});
  const [checkIsNew, setcheckIsNew] = useState(true);
  const [isAddUser, setisAddUser] = useState(false);

  useEffect(() => {}, [checkIsNew]);

  const updatValues = (e) => {
    setsigninValuse({
      ...signinValuse,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async () => {
    //check validation in client
    let errors = isSigninValuesValid(signinValuse);
    setsigninErrors(errors);
    if (Object.keys(errors).length !== 0) {
      //if errors in sign in field
      return;
    }
    let newUser = { ...signinValuse, loveZimers: [] };
    let isNew =await isNewUser(newUser.id); //check if new user is already signed
    if (isNew === "true") {
      //check validation in srver
      errors = await addUser(newUser);
      if (errors !== "ok") {
        setsigninErrors(errors);
        return;
      }
      setsigninValuse({ name: null, id: null, email: null });
      setsigninErrors({});
      localStorage.statuse = "user"; //add and change new user
      props.onChange("user");
      props.onUpdate(newUser);
      props.handleClose();
      setcheckIsNew(true);
      setisAddUser(!isAddUser);
    } else {
      setcheckIsNew(false);
    }
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> הרשמה{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormField
            type="id"
            name="id"
            value={signinValuse.id}
            onChange={updatValues}
            placeholder="*מספר זהות"
            error={signinErrors.id}
          />
          <br></br>
          <FormField
            type="text"
            name="name"
            value={signinValuse.name}
            onChange={updatValues}
            placeholder="*שם "
            error={signinErrors.name}
          />
          <br></br>
          <FormField
            type="text"
            name="email"
            value={signinValuse.email}
            onChange={updatValues}
            placeholder="*מייל"
            error={signinErrors.email}
          />
          <br></br>
          <FormField
            type="password"
            name="password"
            value={signinValuse.password}
            onChange={updatValues}
            placeholder="*סיסמא"
            error={signinErrors.password}
          />
          <br></br>
          <FormField
            type="password"
            name="validPassword"
            value={signinValuse.validPassword}
            onChange={updatValues}
            placeholder="*אימות ססמא"
            error={signinErrors.validPassword}
          />
          <br />
          {!checkIsNew && <small>משתמש זה קיים במערכת, אנא הכנס</small>}
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" onClick={signIn}>
            אישור
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignIn;
