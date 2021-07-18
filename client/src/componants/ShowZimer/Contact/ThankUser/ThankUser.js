import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import logo from "../../../../asset/imgs/logo.png";
import {contactByEmail} from "../../../../service/userService"

function ThankUser(props) {
  const [isOK, setisOK] = useState(false);

  useEffect(() => {}, [isOK]);

  const save =async () => {  //email when user contact
    setisOK(true);
    await contactByEmail(props.email,props.name,props.zimer)
   };


  const close = () => {
    setisOK(false);
    props.handleClose();
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> אימות פרטי התקשרות{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isOK && (
            <>
              <p>תודה רבה {props.name}! נהיה בקשר...</p>
              <small>
                מייל מ{props.zimer} נשלח אליך לכתובת: {props.email}
              </small>
            </>
          )}
          {!isOK && (
            <div>
              <h4>שלום {props.name}</h4>
              <h6>נשמח לעמוד איתך בקשר באמצעות</h6>
              <p> מייל: {props.email}</p>
              <p> טלפון: {props.phone}</p>
              <p>האם אלו פרטיך הנכונים?</p>
              <small>אם תאשר נשלח אליך מייל ליצירת קשר</small>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!isOK && (
            <Button className="contact" onClick={props.handleClose}>
              שינוי
            </Button>
          )}

          {!isOK && (
            <Button className="contact" onClick={save}>
              כן! שמור
            </Button>
          )}
          {isOK && (
            <Button className="contact" onClick={close}>
              סגור
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ThankUser;
