import React from "react";
import "./ImgInput.css";

function ImgInput(props) {
  const addImage = (e) => {
    var file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      props.onChange(reader.result);
    };
  };
  return (
    <div>
      <label className="custom-file-upload upload-new-image-button">
        <input type="file" accept="image/*" onChange={addImage} />
        {props.title}
      </label>
    </div>
  );
}

export default ImgInput;
