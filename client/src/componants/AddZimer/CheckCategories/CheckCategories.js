import React from "react";


export default function CheckCategories({ checkboxChange}) {
  return <div className="row">
              <div className="col-2">
                <input type="checkbox" id="check1" onChange={checkboxChange} value="0" />{" "}
                בריכה
              </div>
              <div className="col-2">
                <input type="checkbox" id="check2" onChange={checkboxChange} value="1" />{" "}
                ג'קוזי
              </div>
              <div className="col-2">
                <input type="checkbox" id="check3" onChange={checkboxChange} value="2" />{" "}
                נוף
              </div>
              <div className="col-2">
                <input type="checkbox" id="check4" onChange={checkboxChange} value="3" />{" "}
                חצר
              </div>
              <div className="col-3">
                <input type="checkbox" id="check5" onChange={checkboxChange} value="4" />{" "}
                נדנדות
              </div>
            </div>;
}
  