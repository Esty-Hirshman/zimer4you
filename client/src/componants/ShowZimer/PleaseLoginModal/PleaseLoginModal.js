import React from 'react'
import { Modal } from "react-bootstrap";
import logo from "../../../asset/imgs/logo.png";
function PleaseLoginModal(props) {
    return (
        <div>
            <Modal show={props.pleaseSignin} onHide={props.handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5> {props.message}</h5>
        </Modal.Body>
        <Modal.Footer>
          מחכים לך שתכנס
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default PleaseLoginModal
