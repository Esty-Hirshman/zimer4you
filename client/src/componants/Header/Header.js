import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { OverlayTrigger, Popover, Navbar, Nav } from "react-bootstrap";
import logo from "../../asset/imgs/logo.png";
import { Icon } from "@iconify/react";
import heartIcon from "@iconify-icons/akar-icons/heart";
import LoveZimers from "./LoveZimers/LoveZimers";
import ZimerSignIn from "./ZimerSignIn/ZimerSignIn";
import UserAcount from "./UserAcount/UserAcount";
import  NotRegisterModal  from "../ZimerList/NotRegisterModal/NotRegisterModal";
import { useHistory } from "react-router-dom";
import Login from "./Login/Login";


function Header(props) {
  const [show, setShow] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [pleaseSignin, setpleaseSignin] = useState(false);
  const [showZimerSignin, setshowZimerSignin] = useState(false);
  const [isExit, setisExit] = useState(false);
  const [statuse, setstatuse] = useState("null");
  const ref = useRef(null);
  let history = useHistory();

  const userPopover = (       //pop over foruser acount
    <Popover
      id="popover-contained"
      className="popover-user"
      data-popper-placement="dwon"
    >
      <Popover.Title as="h3" className="title">
        פרטי חשבון
      </Popover.Title>
      <Popover.Content>
        <UserAcount
          closePopover={closePopover}
          onUpdate={props.onUpdate}
          user={props.user}
        />
      </Popover.Content>
    </Popover>
  );

  useEffect(() => {}, [isExit]);

  const onOpenLogin = (statuse) => {
    if (statuse === "user") OpenLogin();
    else if (statuse === "zimer") handleOpenZimerSignin();
  };
  function closePopover() {
    document.body.click();
  }
  function handleOpen() {
    if (props.user !== "null" && props.user !== null) {
      let num = props.num + 1;
      props.onChange(num);
      setShow(true);
    } else handleOpenNotSigned();
  }

  function handleClose() {
    setShow(false);
  }

  function OpenLogin() {
    setshowLogin(true);
    handleClose();
  }

  function handleCloseLogin() {
    setshowLogin(false);
  }
  
  function handleOpenNotSigned() {
    setpleaseSignin(true);
  }

  function handleCloseNotSigned() {
    setpleaseSignin(false);
  }

  function handleCloseZimerSignin() {
    setshowZimerSignin(false);
  }
  function handleOpenZimerSignin() {
    setshowZimerSignin(true);
  }

  const signin = () => {
    OpenLogin();
    handleCloseNotSigned();
  };

  const exit = () => {
    localStorage.owner = "null";
    localStorage.statuse = "null";
    setstatuse("null");
    setisExit(!isExit);
    history.push("/");
  };
  return (
    <Navbar
      className="Header"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand id="home" href="/">
        <img src={logo} className="logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
         
          <Nav.Link  href="/ZimerList" >בחר צימר</Nav.Link>{/*  */}
          <Nav.Link href="/About">אודות</Nav.Link>
          <Nav.Link href="/Questions">שאלות נפוצות</Nav.Link>
          {(statuse === "zimer" || localStorage.statuse === "zimer") &&<Nav.Link href="/AddZimer">פרסם את הצימר שלך</Nav.Link>}
          {(statuse === "zimer" || localStorage.statuse === "zimer") && (
            <Nav.Link href="/ShowOrders">הזמנות בצימר</Nav.Link>
          )}
        </Nav> ‏
        <div className="col-4"></div>
      </Navbar.Collapse>
      <Navbar.Brand onClick={handleOpen} className="header">
        {" "}
        
        מקומות שאהבתי <Icon icon={heartIcon} style={{ fontSize: "22px" }} />
      </Navbar.Brand>
      
        <LoveZimers
          onUpdate={props.onUpdateZimers}
          handleClose={handleClose}
          show={show}
          numLove={props.num}
          onChange={props.onChange}
          user={props.user}
        />
        <NotRegisterModal
          pleaseSignin={pleaseSignin}
          handleClose={handleCloseNotSigned}
          signin={signin}
          handleCloseSignin={handleCloseLogin}
          showLogin={showLogin}
          onUpdate={props.onUpdate}
          onChange = {props.onChange}
          message={"לא ניתן לצפות בצימרים שאהבתי לפני כניסה למערכת כמשתמש"}
        />
      
      <Navbar.Brand className="header">
        {(window.localStorage.statuse === "null" || (!("statuse" in window.localStorage))) &&(
          <div className="user-menu-container m-dropdown">
            <button className="dropbtn">
              כניסה לחשבון
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </button>
            <div className="dropdown-content">
              <div className="link" id="up" onClick={() => onOpenLogin("user")}>
                כניסה כמשתמש
              </div>
              <div
                className="link"
                id="down"
                onClick={() => onOpenLogin("zimer")}
              >
                כניסה כבעל צימר
              </div>
            </div>
          </div>
        )}
        {(statuse === "zimer" || localStorage.statuse === "zimer") && (
          <div className="user-menu-container m-dropdown">
            <button className="dropbtn">
              {"צימר " + JSON.parse(localStorage.owner).zimerName}
              <svg
           
           
           xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </button>
            <div className="dropdown-content">
              <div className="link" id="up" onClick={exit}>
                יציאה
              </div>
            </div>
          </div>
        )}
        {props.user !== "null" && props.user !== null &&
          (statuse === "user" || localStorage.statuse === "user") && (
            <OverlayTrigger
              ref={(r) => (ref = r)}
              container={ref.current}
              trigger="click"
              placement="auto"
              overlay={userPopover}
              rootClose
            >
              <div>
                {props.user.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
            </OverlayTrigger>
          )}
      </Navbar.Brand>
      <Login
        handleClose={handleCloseLogin}
        show={showLogin}
        onUpdate={props.onUpdate}
        onChange={setstatuse}
      />
      <ZimerSignIn
        handleClose={handleCloseZimerSignin}
        show={showZimerSignin}
        changeOwner={props.changeOwner}
        onChange={setstatuse}
      />
    </Navbar>
    
  );
}

export default Header;
