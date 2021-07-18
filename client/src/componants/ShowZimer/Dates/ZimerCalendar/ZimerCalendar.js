import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import {  addDate,isDataChoosed } from "../../../../service/zimersService";
import {  Modal } from "react-bootstrap";
import "./ZimerCalendar.css";
import { toast } from "react-toastify";
import {  addOrder } from "../../../../service/zimerOwnerServise";
import logo from "../../../../asset/imgs/logo.png";

function ZimerCalendar(props) {
  const [dateState, setDateState] = useState(new Date());
  const [isCatch, setisCatch] = useState(null);
  const [userDates, setuserDates] = useState([]);
  const [userOrderd, setUserOrderd] = useState(false)
  const [notOrdered, setnotOrdered] = useState(false)

  useEffect(() => {}, [isCatch,notOrdered]);

  const changeDate = (e) => {
    setDateState(e);
  };

  const saveDates = async () => {
    let choosenDate = moment(dateState).format("YYYY-MM-DD");
    const dateOK = await isDataChoosed(props.zimerId,choosenDate);
    if (dateOK != "ok") {           //if data is already caught by another
      setisCatch(true);  
    } else {
      toast("  התאריך " + " " + choosenDate + " נשמר לך");
      await addDate(props.zimerId, choosenDate);
      let dates = userDates;
      dates.push(choosenDate);
      setuserDates(dates);
      setisCatch(false);
    }
  };


  const exitDatesAndSave = async () => {
    let order = {               
      userName: JSON.parse(localStorage.user).name,
      userId: JSON.parse(localStorage.user).id,
      userEmail: JSON.parse(localStorage.user).email,
      dates: userDates,
    }
    await addOrder(props.zimerName,order)
    setUserOrderd(true)
    
  };

  const exit=()=>{
    if(!userOrderd){
      setnotOrdered(true)
    }
    setUserOrderd(false)
    
  }

  const exitFinish =()=>{
    setnotOrdered(false)
    setUserOrderd(false)
    props.handleClose();
  }
  return (
    <div>
      <Modal show={props.show} onHide={exit}>
        <Modal.Header className="signin">
          <Modal.Title className="signin">
            <img src={logo} className="logoModal"></img> באלו ימים תבקר אצלינו?{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {!notOrdered && !userOrderd &&<div className="calendar-div">
            <small style={{ color: "rgb(114, 160, 21)" }}>
              *** שים לב, ניתן לתפוס יותר מיום אחד ***
            </small>
            <Calendar onChange={changeDate} value={dateState} />
            <p style={{ textAlign: "center" }}>
              בחרת את תאריך: <b>{moment(dateState).format("MMMM Do YYYY")}</b>
            </p>
            {isCatch && (
              <p>
                <small style={{ color: "red" }}>
                  תאריך זה תפוס, אנא בחר אחר
                </small>
              </p>
            )}
            <div>
            <button onClick={saveDates} className="modalButton dates-buttom">
              שמור לי תאריך זה
            </button>
            <button className="modalButton dates-buttom" onClick={exitDatesAndSave}>
            תפוס לי את הצימר
          </button>
          </div>
          </div>}
          {!notOrdered && userOrderd &&<div>
            <p>שלום {JSON.parse(localStorage.user).name}</p>
            <p>שמרנו לך את הצימר {props.zimerName}</p>
            <p>בתאריכים שבקשת : </p>
          {userDates.map((date, index)=>{
            return <small key={index}>{" * "+ date}</small>
          })}
          <br/>
          <small>אנא צור קשר עם בעל הצימר...</small>
          <br/>
            <button onClick={exitFinish} style={{width:"4vw"}} className="modalButton dates-buttom">
              יציאה
            </button>
            </div>}
            {notOrdered &&<div>
              <p>לא תפסת את הצימר,</p>
              <p>אם תצא התאריכים שתפסת לא ישמרו לך.</p>
              <p>האם אתה בטוח שברצונך לצאת?</p>
              </div>}
        </Modal.Body>
        <Modal.Footer>
          {!notOrdered && !userOrderd &&<button className="modalButton dates-buttom"  onClick={exit}>יציאה</button>}
          {notOrdered &&<>
            <button onClick={exitFinish} style={{width:"3vw"}} className="modalButton dates-buttom">
              כן!
            </button>
            <button className="modalButton dates-buttom" style={{width:"3vw"}} onClick={()=>setnotOrdered(false)}>
            לא
          </button>
            </>}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ZimerCalendar;
