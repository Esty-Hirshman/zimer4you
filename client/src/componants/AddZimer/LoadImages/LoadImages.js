import React from "react";
import FileImges from "./FileImges/FileImges";
import UrlImges from "./UrlImges/UrlImges";

export default function LoadImages({
  handleOpen,
  handleOpenUrlImg,
  handleClose,
  show,
  errorValue,
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
  handleCloseUrlImg,
  showUrlImg,
}) {
  return (
    <>
      <small>בחר את האפשרות המועדפת להעלת תמונות הצימר</small>
      <br />
      <button onClick={handleOpen} className="images">
      <small style={{ fontSize: "1.2vw" }}>  העלה קבצי תמונה מהמחשב </small>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2vw"
          height="1.2vw"
          fill="currentColor"
          class="bi bi-upload"
          viewBox="0 0 16 16"
        >
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
        </svg>
      </button>
      <button onClick={handleOpenUrlImg} className="images">
        <small style={{ fontSize: "1.2vw" }}> העתק קישורי תמונות </small>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.3vw"
          height="1.3vw"
          fill="currentColor"
          class="bi bi-cloud-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
          />
          <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
        </svg>
      </button>

      <FileImges
        handleClose={handleClose}
        show={show}
        errorValue={errorValue}
        setaddImg={setaddImg}
        setimg1={setimg1}
        setimg2={setimg2}
        setimg3={setimg3}
        setimg4={setimg4}
        addImg={addImg}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
      />
      <UrlImges
        handleClose={handleCloseUrlImg}
        show={showUrlImg}
        errorValue={errorValue}
        setaddImg={setaddImg}
        setimg1={setimg1}
        setimg2={setimg2}
        setimg3={setimg3}
        setimg4={setimg4}
        addImg={addImg}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
      />
      {errorValue.img && (
        <small
          style={{
            color: "red",
          }}
        >
          {errorValue.img}
        </small>
      )}
    </>
  );
}
