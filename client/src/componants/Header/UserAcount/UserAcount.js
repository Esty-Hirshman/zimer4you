import React, { useState } from "react";
import "./UserAcount.css";
import { Icon } from "@iconify/react";
import userCircleSolid from "@iconify-icons/teenyicons/user-circle-solid";
import { changePassword } from "../../../service/userService";
import FormField from "../Login/FormField/FormField";
import { useHistory } from "react-router-dom";
import { checkPassword } from "../../../shared/validation";


function UserAcount(props) {
  const [newPassword, setnwePassword] = useState(null);
  const [toChange, settoChange] = useState(false);
  const [changed, setchanged] = useState(false);
  const [passwordError, setpasswordError] = useState(null);
  let history = useHistory();

  const outOfAcount = () => {
    localStorage.user = "null";
    localStorage.statuse = "null";
    history.push("/ZimerList");
    props.onUpdate("null");
    
  };

  const savePassword = (e) => {
    setnwePassword(e.target.value);
  };
  const saveNewPassword = async () => {
    let error = checkPassword(newPassword);
    setpasswordError(error);
    if (error === null) {
      await changePassword(props.user.email,props.user.password, newPassword);
      setchanged(true);
      
    }
  };
  return (
    <div>
      <Icon icon={userCircleSolid} className="user" />
      <br />
      <p className="deFooters">שם: </p>
      <p>{props.user.name}</p>
      <p className="deFooters">מספר זהות: </p>
      <p>{props.user.id}</p>
      <p className="deFooters">כתובת מייל: </p>
      <p>{props.user.email}</p>
      <small onClick={() => settoChange(true)} className="changePassword">
        שינוי סיסמא
      </small>

      {toChange && (
        <>
          <FormField
            type="password"
            name="password"
            value={newPassword}
            onChange={savePassword}
            placeholder="*סיסמא חדשה"
            error={passwordError}
          />
          {!changed && (
            <small onClick={saveNewPassword} className="changePassword">
              אישור הסיסמא
            </small>
          )}
        </>
      )}
      {changed && <small>הסיסמא שונתה בהצלחה</small>}
      <br />
      <button onClick={outOfAcount} className="acountButton">
        יציאה מחשבונך
      </button>
    </div>
  );
}

export default UserAcount;
