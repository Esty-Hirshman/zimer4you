import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import ShowInLove from "./ShowInLove/ShowInLove";
import "./LoveZimers.css";
import {
  getUserLoveZimers,
  clearLoveZimers,
} from "../../../service/loveZimerServise";
import logo from "../../../asset/imgs/logo.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function LoveZimers(props) {
  const [currentUser, setcurrentUser] = useState(null);
  const [zimerLoveList, setzimerLoveList] = useState(null);

  useEffect(async () => {
    if (props.user != null && props.user != "null") {
      await setcurrentUser(props.user);
      let userZimers = await getUserLoveZimers(props.user.id);
      await setzimerLoveList(userZimers);
    }
  }, [props.numLove]);

  const clean = async () => {
    //clean loveZimer
    let isClean = await clearLoveZimers(props.user.id, []);
    if (isClean === "ok") {
      await props.onChange(0);
      props.onUpdate();
    }
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> צימרים שאהבתי{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {zimerLoveList === null &&<div style={{ marginTop: "10%" }}>
              <Loader type="Puff" color="#769925" height={100} width={100} />
            </div>
          }
          {currentUser !== null &&
            zimerLoveList !== null &&
            zimerLoveList.length === 0 && (
              <div>
                <h5>לא נמצאו מועדפים.</h5>
                <p>
                  שמרו את הצימרים שאהבתם ע"י לחיצה על כפתור "אהבתי" הקיים בכל
                  אחד מהצמרים
                </p>
              </div>
            )}
          {zimerLoveList !== null && zimerLoveList.map((item, index) => {
            return (
              <div key={index}>
                <ShowInLove
                  zimer={item}
                  handleClose={props.handleClose}
                  onChange={props.onChange}
                  numLove={props.numLove}
                  onUpdate={props.onUpdate}
                ></ShowInLove>
                <hr />
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button className="clean" onClick={clean}>
            ניקוי צימרים שאהבתי
          </Button>
          <Button className="clean" onClick={props.handleClose}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoveZimers;
