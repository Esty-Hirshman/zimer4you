import React from "react";
import "./SearchField.css";
import { useEffect } from "react";

function SearchField(props) {
  let searchvalue;
  let searchname;

  const setValue = () => {
    switch (props.name) {
      case "בחר איזור":
        searchname = "erea";
        return;
      case "בחר קטגוריה":
        searchname = "category";
        return;
      case "מספר מיטות":
        searchname = "beds";
        return;
      case "טווח מחיר":
        searchname = "price";
        return;
      default:
        return
    }
  };

  useEffect(() => {
    setValue();
  }, [props.name]);

  return (
    <div>
      <select
        className="select"
        onChange={(e) =>
          props.onChange(e.target.value === props.name ? "" : e.target.value)
        }
        value={searchvalue}
        name={searchname}
      >
        <option selected>{props.name}</option>
        {props.options.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default SearchField;
