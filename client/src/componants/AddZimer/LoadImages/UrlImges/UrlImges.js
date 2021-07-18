import React from "react";
import { Button, Modal } from "react-bootstrap";
import logo from "../../../../asset/imgs/logo.png";
import FormField from "../../../Header/Login/FormField/FormField";

function UrlImges({
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
  const saveImages = (e) => {
    switch (e.target.name) {
      case "setimg1":
        setimg1(e.target.value);
        break;
      case "setimg2":
        setimg2(e.target.value);
        break;
      case "setimg3":
        setimg3(e.target.value);
        break;
      case "setimg4":
        setimg4(e.target.value);
        break;
      case "setaddImg":
        setaddImg(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> העלאת תמונות מהאינטרנט{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <small
            style={{
              color: "#769925",
            }}
          >
            תמונה ראשית של הצימר
          </small>
          <FormField
            type="text"
            name="setaddImg"
            value={addImg}
            onChange={saveImages}
            placeholder="תמונה ראשית"
            error=""
          />
          {addImg === "" &&
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3vw"
              height="1.3vw"
              fill="currentColor"
              class="bi bi-image"
              viewBox="0 0 16 16"
              color="#82a30c"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
          }
          {addImg !== "" && <img src={addImg} className="showImgUpload"></img>}
          <br />
          <p
            style={{
              color: "#769925",
            }}
          >
            העתק כתובות URL של תמונות הגלריה
          </p>
          <FormField
            type="text"
            name="setimg1"
            value={img1}
            onChange={saveImages}
            placeholder="תמונת גלריה 1"
            error=""
          />
          {img1 === "" &&
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3vw"
              height="1.3vw"
              fill="currentColor"
              class="bi bi-image"
              viewBox="0 0 16 16"
              color="#82a30c"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
          }
          {img1 !== "" && <img src={img1} className="showImgUpload"></img>}
          <FormField
            type="text"
            name="setimg2"
            value={img2}
            onChange={saveImages}
            placeholder="תמונת גלריה 2"
            error=""
          />
          {img2 === "" &&
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3vw"
              height="1.3vw"
              fill="currentColor"
              class="bi bi-image"
              viewBox="0 0 16 16"
              color="#82a30c"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
          }
          {img2 !== "" && <img src={img2} className="showImgUpload"></img>}
          <FormField
            type="text"
            name="setimg3"
            value={img3}
            onChange={saveImages}
            placeholder="תמונת גלריה 3"
            error=""
          />
          {img3 === "" &&
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3vw"
              height="1.3vw"
              fill="currentColor"
              class="bi bi-image"
              viewBox="0 0 16 16"
              color="#82a30c"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
          }
          {img3 !== "" && <img src={img3} className="showImgUpload"></img>}
          <FormField
            type="text"
            name="setimg4"
            value={img4}
            onChange={saveImages}
            placeholder="תמונת גלריה 4"
            error=""
          />
          {img4 === "" &&
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.3vw"
              height="1.3vw"
              fill="currentColor"
              class="bi bi-image"
              viewBox="0 0 16 16"
              color="#82a30c"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
          }
          {img4 !== "" && <img src={img4} className="showImgUpload"></img>}
        </Modal.Body>
        <Modal.Footer>
          <Button className="clean" onClick={handleClose}>
            שמירה
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UrlImges;
