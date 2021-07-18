import React, { useState, useEffect } from "react";
import "./DemoChat.css";
import { Modal } from "react-bootstrap";
import { getChat, addResponse } from "../../service/chatServise";
import logo from "../../asset/imgs/logo.png";

function DemoChat() {
  const [massage, setmassage] = useState({
    id: "",
    name: "",
    statuse: localStorage.getItem("statuse"),
    value: "",
    date: "",
    time: "",
  });
  const [show, setshow] = useState(false);
  const [chat, setchat] = useState([]);
  const [sent, setSent] = useState(0);
  const [user, setuser] = useState({});
  const [notSigned, setNotSigned] = useState(false);

  useEffect(async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    setuser(user);
    let today = new Date();
    let date =
      today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setmassage({               //init new massage to add to chat
      id: "",
      name: user !== null ? user.name : "",
      statuse: localStorage.getItem("statuse"),
      value: "",
      date: date,
      time: time,
    });
    let tempChat = await getChat();
    tempChat.reverse()
    setchat(tempChat);
  }, [sent, show]);

  const addRes = async (value) => {
    if (value.name === "" && value.statuse === "zimer") {
      setmassage({
        ...massage,
        name: JSON.parse(localStorage.owner).zimerName,
      });
    }
    if (value.value !== "") {
      await addResponse(value);    //add masage to chat
    }
  };

  const handleOpen = () => {
    if (localStorage.user === "null" && localStorage.owner === "null") {
      setNotSigned(true);
    } else {
      setNotSigned(false);
    }
    setshow(true);
  };
  const handleClose = () => {
    setshow(false);
  };

  return (
    <div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          className="chat-modal show-modal"
        >
          <Modal.Header className="signin">
            <Modal.Title>
              <img src={logo} className="logoModal"></img> צ'אט בין משתמשים
              לבעלי צימרים
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {notSigned && (
              <p>עדיין לא נכנסת למערכת ולכן לא תוכל לשוחח, מחכים לך שתכנס..</p>
            )}
            {!notSigned && (
              <div className="all-chat">
                 {!notSigned && (
              <input
                className="input-send-chat"
                placeholder={" כתוב כאן..."}
                onKeyDown={async (e) => {
                  if (e.key === "Enter") {      //sent new massage by pressing enter
                    setmassage({
                      ...massage,
                      id: chat.length + 1,
                      value: e.target.value,
                    });
                    let temp = massage;
                    temp.id = chat.length + 1;
                    temp.value = e.target.value;
                    if (temp.name === "" && temp.statuse === "zimer")
                      temp.name = JSON.parse(localStorage.owner).zimerName;
                    await addRes(temp);
                    let num = sent + 1;
                    setSent(num);
                    e.target.value = "";
                  }
                }}
              ></input>
              
            )}
            <hr/>
                {chat.map((massage, index) => {          //show all chat
                  return (
                    <div key={index}>
                      {massage.statuse === "zimer" && (
                        <div className="chat-zimer">
                          <p className="p-value-guide">{massage.value}</p>
                          <div className="div-guide-det">
                            <p className="pguide1">צימר {massage.name}</p>
                            <div className="div-to-det-guide">
                              <p className="pguide2">{massage.date}</p>
                              <p className="pguide3">{massage.time}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      {massage.statuse === "user" && (
                        <div className="chat-user ">
                          <p className="p-value-bicy">{massage.value}</p>
                          <div className="div-bicy-det">
                            <p className="pbicy1">{massage.name}</p>
                            <div className="div-to-det-bicy">
                              <p className="pbicy2">{massage.date}</p>
                              <p className="pbicy3">{massage.time}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
           
          </Modal.Body>
        </Modal>

        <div className="chatButton" onClick={handleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6vw"
            height="6vw"
            fill="currentColor"
            class="bi bi-chat-quote-fill"
            viewBox="0 0 16 16"
            color="#46720cd2"
          >
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM7.194 6.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DemoChat;
