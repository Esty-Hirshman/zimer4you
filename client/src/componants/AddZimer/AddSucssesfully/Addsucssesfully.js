import React from "react";
import { Modal } from "react-bootstrap";
import logo from "../../../asset/imgs/logo.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Addsucssesfully(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img>הצימר נוסף בהצלחה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!props.added &&
            <div style={{ marginTop: "10%" }}>
              <h4 style={{color:"#82a30c"}}>מעבד נתונים....</h4>
              <Loader type="Puff" color="#769925" height={150} width={150} />
            </div>
          }
          {props.added && (
            <div>
              <h5>תודה רבה!</h5>
              <p>הצימר {props.name} נוסף לרשימת הצימרים של zimer4you</p>
              <p>נשמח לראות אותך שוב...</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addsucssesfully;
