import React, { useState } from "react";
import FormField from "../Header/Login/FormField/FormField";
import "./AddZimer.css";
import { addZimer, getNumZimers } from "../../service/zimersService";
import InformationAddZimer from "./InformationAddZimer/InformationAddZimer";
import { isAddZimerValuesValid } from "../../shared/validation";
import LoadImages from "./LoadImages/LoadImages";
import CheckCategories from "./CheckCategories/CheckCategories";
import Payment from "./Payment/Payment";
import Addsucssesfully from "./AddSucssesfully/Addsucssesfully";
import { useHistory } from "react-router-dom";

function AddZimer(props) {
  const categories = ["בריכה", "ג'קוזי", "נוף", "נדנדות", "חצר"];

  const [addZimerValues, setaddZimerValues] = useState({
    name: null,
    price: "",
    location: null,
    area: "",
    beds: "",
    phone: null,
  });
  const [addImg, setaddImg] = useState("");
  const [img1, setimg1] = useState("");
  const [img2, setimg2] = useState("");
  const [img3, setimg3] = useState("");
  const [img4, setimg4] = useState("");
  const [errorValue, seterrorValue] = useState({
    name: null,
    phone: null,
    location: null,
    img: null,
    area: null,
    price: null,
    beds: null,
  });
  const [addZimerCategory, setaddZimerCategory] = useState([]);
  const [tempError, settempError] = useState({});
  const [show, setShow] = useState(false);
  const [showUrlImg, setshowUrlImg] = useState(false);
  const [paid, setPaid] = useState(null);
  const [notPaid, setnotPaid] = useState(true);
  const [added, setadded] = useState(false);
  const [clicPaid, setclicPaid] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);
  const [zimerAdded, setzimerAdded] = useState(null)
  let history = useHistory();

 
  function handleOpen() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }
  function handleOpenAdded() {
    setadded(true);
  }
  function handleCloseAdded() {
    setadded(false);
    history.push("/");
  }
  function handleOpenUrlImg() {
    setshowUrlImg(true);
  }
  function handleCloseUrlImg() {
    setshowUrlImg(false);
  }

  const updateAddZimerValues = (e) => {
    setaddZimerValues({
      ...addZimerValues,
      [e.target.name]: e.target.value,
    });
  };
  const checkboxChange = (e) => {
    let addCategory = addZimerCategory;
    if (e.target.checked) {
      addCategory.push(categories[e.target.value]);
    }
    setaddZimerCategory(addCategory);
  };

  const addZimerToData = async (event) => {
    event.preventDefault();
    //new zimer datails validation
    let errors = isAddZimerValuesValid(addZimerValues);
    settempError(errors);
    const errPrice = addZimerValues.price === "" ? "שדה חובה" : null;
    const errBeds = addZimerValues.beds === "" ? "שדה חובה" : null;
    const errArea = addZimerValues.area === "" ? "שדה חובה" : null;
    const errLocation = addZimerValues.location === null ? "שדה חובה" : null;
    const errImg =
      addImg === "" || img1 === "" || img2 === "" || img3 === "" || img4 === ""
        ? "חסרה תמונה או יותר"
        : null;
    seterrorValue({
      img: errImg,
      area: errArea,
      price: errPrice,
      beds: errBeds,
      location: errLocation,
    });
     
    if (
      errBeds === null &&
      errPrice === null &&
      errImg === null &&
      errArea === null &&
      errLocation === null &&
      Object.keys(tempError).length === 0
    ) {                                      // no errors in add zimer fields
      let id = await getNumZimers();
      const zimerToAdd = {                  // init new zimer to add
        id: String(id + 1),
        name: addZimerValues.name,
        price: addZimerValues.price,
        location: addZimerValues.location,
        area: addZimerValues.area,
        beds: addZimerValues.beds,
        category: addZimerCategory,
        img: addImg,
        imges: [img1,img2,img3,img4,addImg],
        phone: addZimerValues.phone
      };
      if (notPaid) {                       //owner did not pay
        setPaid(false);
        return;
      }
      handleOpenAdded();
      setzimerAdded(false)
      let isValid = await addZimer(zimerToAdd);
      if(isValid !== "ok"){ //errors from server
        settempError(isValid)
        return
      }
      let numaddZimer = props.isAddZimer + 1;
      props.onChange(numaddZimer);
      setzimerAdded(true)
      
    }
  };

  return (
    <div className="comp-addZimer">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-2 divStyle">
          <InformationAddZimer />
        </div>
        <div className="col-1"></div>
        <div className="col-5 divStyle">
          <br />
          <div className="addContainer">
            <FormField
              type="telephone"
              value={addZimerValues.phone}
              onChange={updateAddZimerValues}
              name="phone"
              placeholder="מספר הטלפון שלך"
              className="FormField"
              error={tempError.phoneNumber}
            />
            <FormField
              type="text"
              name="name"
              value={addZimerValues.name}
              onChange={updateAddZimerValues}
              placeholder="שם הצימר"
              className="FormField"
              error={tempError.name}
            />
            <FormField
              type="number"
              value={addZimerValues.price}
              onChange={updateAddZimerValues}
              name="price"
              placeholder="כמה עולה הצימר שלך ללילה?"
              className="FormField"
              error={errorValue.price}
            />
            <FormField
              type="text"
              value={addZimerValues.location}
              onChange={updateAddZimerValues}
              name="location"
              placeholder="הזן את כתובת הצימר"
              className="FormField"
              error={errorValue.location}
            />
            <FormField
              type="number"
              value={addZimerValues.beds}
              onChange={updateAddZimerValues}
              name="beds"
              placeholder="מספר מיטות"
              className="FormField"
              error={errorValue.beds}
            />
            <select
              className="FormField"
              value={addZimerValues.area}
              onChange={updateAddZimerValues}
              name="area"
            >
              <option id="0" selected>
                בחר מיקום צימר
              </option>
              <option id="1">צפון</option>
              <option id="2">מרכז</option>
              <option id="3">דרום</option>
            </select>
            <br></br>
            {errorValue.area && (
              <small style={{ color: "red" }}>{errorValue.area}</small>
            )}
            <hr />
            <LoadImages
              handleOpen={handleOpen}
              handleOpenUrlImg={handleOpenUrlImg}
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
              handleCloseUrlImg={handleCloseUrlImg}
              showUrlImg={showUrlImg}
            />
            <hr />
            <CheckCategories checkboxChange={checkboxChange} />
            <button onClick={addZimerToData} className="addbutton">
              הוסף אותי
            </button>
            <Addsucssesfully
              name={addZimerValues.name}
              show={added}
              handleClose={handleCloseAdded}
              added={zimerAdded}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-2 divStyle">
          <Payment
            paid={paid}
            setShowPaypal={setShowPaypal}
            setclicPaid={setclicPaid}
            clicPaid={clicPaid}
            showPaypal={showPaypal}
            setnotPaid={setnotPaid}
            notPaid = {notPaid}
          />
        </div>
      </div>
    </div>
  );
}

export default AddZimer;
