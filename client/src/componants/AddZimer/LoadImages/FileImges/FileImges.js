import React from "react";
import ImgInput from "./ImgInput/ImgInput";
import { Button, Modal } from "react-bootstrap";
import logo from "../../../../asset/imgs/logo.png";

export default function FileImges({
  show,
  handleClose,
  setaddImg,
  setimg1,
  setimg2,
  setimg3,
  setimg4,
  addImg,
  img1,
  img2,
  img3,
  img4,
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> העלאת תמונות לצימר שלי
            מהמחשב{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {addImg !== "" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-square"
              viewBox="0 0 16 16"
              color=" rgb(135, 202, 0)"
              width="24px"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
            </svg>
          )}
          <ImgInput onChange={setaddImg} title="העלה תמונת צימר" />
          <br />
          <p
            style={{
              color: "#769925",
            }}
          >
            בחר 4 תמונות נוספות להצגה בגלרית הצימר
          </p>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
              {img1 !== "" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                  color=" rgb(135, 202, 0)"
                  width="24px"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              )}
              <ImgInput onChange={setimg1} title="תמונה מספר 1" />
            </div>
            <div className="col-2">
              {img2 !== "" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                  color=" rgb(135, 202, 0)"
                  width="24px"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              )}
              <ImgInput onChange={setimg2} title="תמונה מספר 2" />
            </div>
            <div className="col-2">
              {img3 !== "" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                  color=" rgb(135, 202, 0)"
                  width="24px"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              )}
              <ImgInput onChange={setimg3} title="תמונה מספר 3" />
            </div>
            <div className="col-2">
              {img4 !== "" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-square"
                  viewBox="0 0 16 16"
                  color=" rgb(135, 202, 0)"
                  width="24px"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                </svg>
              )}
              <ImgInput onChange={setimg4} title="תמונה מספר 4" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="clean" onClick={handleClose}>
            שמירה
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
