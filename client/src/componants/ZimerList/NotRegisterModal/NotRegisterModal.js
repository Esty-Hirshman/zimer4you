import React from "react";
import { Button, Modal } from "react-bootstrap";
import logo from "../../../asset/imgs/logo.png";
import Login from "../../Header/Login/Login";

export default function NotRegisterModal({
  pleaseSignin,
  handleClose,
  signin,
  handleCloseLogin,
  showLogin,
  onUpdate,
  onChange,
  message,
}) {
  return (
    <>
      <Modal show={pleaseSignin} onHide={handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5> {message}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" onClick={signin}>
            לכניסה למערכת
          </Button>
        </Modal.Footer>
      </Modal>
      <Login
        handleClose={handleCloseLogin}
        show={showLogin}
        onUpdate={onUpdate}
        onChange={onChange}
      />
    </>
  );
}
