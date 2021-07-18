import React from "react";
import "./FormField.css";

function FormField(props) {
  return (
    <div>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        placeholder={props.placeholder}
        className="FormField"
      ></input>
      <br></br>
      {props.error && <small style={{ color: "red" }}>{props.error}</small>}
    </div>
  );
}

export default FormField;
