 import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import logo from "../../../../asset/imgs/logo.png";
import "./NewComment.css";
import StarRatings from "react-star-ratings";

export default function NewComment(props) {

  const [newComment, setNewcomment] = useState(null);
  const [rating, setRating] = useState(0);
  function upDateComment(event) {
    setNewcomment(event.target.value);
  }

  const addcomment = () => {
    if (newComment !== null) {
      props.addNewcomment(newComment, rating);
      setNewcomment(null);
    }
    else{
      props.addNewcomment("", rating);
      setNewcomment(null);
    }
  };
  return (
    <>
      {props.userNow !== "null" && (
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header className="signin">
            <Modal.Title className="signin flex-space-between">
              <div>
                <img src={logo} className="logoModal"></img>הוסף תגובה{" "}
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="textArea">
              <textarea onChange={upDateComment}></textarea>
            </div>
            <br />
            <small>דרגו אותנו:</small>
            <br />
            <StarRatings
              starDimension="1.7vw"
              starSpacing="0.25vw"
              changeRating={setRating}
              rating={rating}
              starRatedColor=" rgb(135, 202, 0)"
              starEmptyColor="rgb(223, 223, 223)"
              starHoverColor=" rgb(135, 202, 0)"
            />
          </Modal.Body>
          <Modal.Footer>
            <div className="newcomment-ok" onClick={addcomment}>
              אישור
            </div>
          </Modal.Footer>
        </Modal>
      )}
      {props.userNow === "null" && (
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header className="signin">
            <Modal.Title className="signin">
              <img src={logo} className="logoModal"></img>אזהרה!{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> עדיין לא נכנסת למערכת,</p>
            <p>לכן אינך יכול להגיב</p>
          </Modal.Body>
          <Modal.Footer>מחכים לך שתכנס</Modal.Footer>
        </Modal>
      )}
    </>
  );
}
