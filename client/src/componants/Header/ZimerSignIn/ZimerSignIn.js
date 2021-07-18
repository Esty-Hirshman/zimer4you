import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import FormField from "../Login/FormField/FormField";
import { isOwnerSigninValuesValid } from "../../../shared/validation.js";
import { addZimerOwner, isOwnerIn,getNumOwners } from "../../../service/zimerOwnerServise";
import logo from "../../../asset/imgs/logo.png";

function ZimerSignIn(props) {
  const [zimerSigninValuse, setzimerSigninValuse] = useState({
    zimerName: null,
    password: null,
    validPassword: null,
  });
  const [zimerSigninErrors, setsigninErrors] = useState({});
  const [checkIsNew, setcheckIsNew] = useState(true);
  const [isAddOner, setisAddOner] = useState(false);
  const [showSignIn, setshowSignIn] = useState(false);
  const [signIn, setsignIn] = useState(false);

  useEffect(() => {}, [checkIsNew]);

  const updatValues = (e) => {
    setzimerSigninValuse({
      ...zimerSigninValuse,
      [e.target.name]: e.target.value,
    });
  };

  const loginZimer = async () => {
    let currenuOwner = null;
    if (!showSignIn) {
      //if owner logins
      setzimerSigninValuse({
        ...zimerSigninValuse,
        validPassword: zimerSigninValuse.password,
      });
      let isIn = await isOwnerIn(
        zimerSigninValuse.zimerName,
        zimerSigninValuse.password
      );
      if (isIn !== "false") {
        props.changeOwner(isIn);
        currenuOwner = isIn;
      } else {
        setsignIn(true);
      }
    } else {
      //  if owner signin
      let errors = isOwnerSigninValuesValid(zimerSigninValuse);
      setsigninErrors(errors);
      if (Object.keys(errors).length !== 0) {
        return;
      }
      let id = await getNumOwners();
      let newOwner = {
        id: id,
        ...zimerSigninValuse,
        userOrder: [],
      };
      let isIn = await isOwnerIn(
        zimerSigninValuse.zimerName,
        zimerSigninValuse.password
      );
      if (isIn === "false") {
        await addZimerOwner(newOwner)
        props.changeOwner(newOwner);
        currenuOwner = newOwner;
        setsigninErrors({});
        setcheckIsNew(true);
        setisAddOner(!isAddOner);
      } else {
        setcheckIsNew(false);
      }
    }
    if (currenuOwner !== null) {
      localStorage.statuse = "zimer";
      props.onChange("zimer");
      props.handleClose();
      setzimerSigninValuse({
        zimerName: null,
        password: null,
        validPassword: null,
      });
      setsignIn(false);
    }
  };

  const handleOpenLogin =async () =>{
    await setshowSignIn(!showSignIn);
  }

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> הרשמה{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <br></br>
          {showSignIn && (
            <>
              <FormField
                type="text"
                name="zimerName"
                value={zimerSigninValuse.zimerName}
                onChange={updatValues}
                placeholder="שם הצימר שלך"
                error={zimerSigninErrors.name}
              />

              <br></br>
              <FormField
                type="password"
                name="password"
                value={zimerSigninValuse.password}
                onChange={updatValues}
                placeholder="*סיסמא"
                error={zimerSigninErrors.password}
              />
              <br></br>
              <FormField
                type="password"
                name="validPassword"
                value={zimerSigninValuse.validPassword}
                onChange={updatValues}
                placeholder="*אימות ססמא"
                error={zimerSigninErrors.validPassword}
              />
              <br />
              {!checkIsNew && (
                <small onClick={handleOpenLogin} className="login">
                  משתמש זה קיים במערכת, לחץ לכניסה
                </small>
              )}
            </>
          )}
          {!showSignIn && (
            <>
              <FormField
                type="text"
                name="zimerName"
                value={zimerSigninValuse.zimerName}
                onChange={updatValues}
                placeholder="שם הצימר שלך"
                error={zimerSigninErrors.zimerName}
              />

              <br></br>
              <FormField
                type="password"
                name="password"
                value={zimerSigninValuse.password}
                onChange={updatValues}
                placeholder="*סיסמא"
                error={zimerSigninErrors.password}
              />
              <br></br>
              {signIn && <small>משתמש לא קיים, אנא הרשם</small>}
              <br />
              {checkIsNew && (
                <small onClick={handleOpenLogin}>
                  עדיין אין לך חשבון?
                  <small className="login"> הרשם </small>
                </small>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" onClick={loginZimer}>
            אישור
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ZimerSignIn;
