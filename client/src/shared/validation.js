const errors = {
  required: "שדה חובה",
  validName: "שם יכול להכיל אותיות בלבד",
  validLength: "מידי ארוך, 15 אותיות מקסימום",
  validEmail: "כתובת מייל לא חוקית",
  validIDnumber: "מספר זהות אינו תקין",
  validPhone: "מספר טלפון אינו חוקי",
  validPassword:
    "סיסמא חייבת לכלול לפחות 6 תווים ולהכיל אות אנגלית ומספר",
  validVpassword: "אימות ססמא אינו נכון",
  validAddress: "כתובת לא חוקית, נדרש רחוב, מספר בית ועיר",
};
//---- check name validation -----
const checkName = (name) => {
  if (!isRequired(name)) {
    return errors.required;
  }
  if (!isNameValid(name)) {
    return errors.validName;
  }
  if (name.length > 20) {
    return errors.validLength;
  }
  return null;
};

const isNameValid = (name) => {
  let nameRegex = /^[א-תA-Za-z" "]+$/;
  return nameRegex.test(name);
};
//----check email validation ------
const checkEmail = (email) => {
  if (!isRequired(email)) {
    return errors.required;
  }
  if (!isEmailValid(email)) {
    return errors.validEmail;
  }
  return null;
};

const isEmailValid = (email) => {
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

//----check id number validation-----
const checkIDNumber = (idNumber) => {
  if (!isRequired(idNumber)) {
    return errors.required;
  }
  if (!isIDnumberValid(idNumber)) {
    return errors.validIDnumber;
  }
  return null;
};

const isIDnumberValid = (id) => {
  if (!id.match(/^\d{9}$/)) {
    return false;
  }
  let counter = 0;
  let increaseNum;
  for (let i = 0; i < id.length; i++) {
    increaseNum = Number(id[i]) * ((i % 2) + 1);
    counter += increaseNum > 9 ? increaseNum - 9 : increaseNum;
  }
  return counter % 10 === 0;
};
//----check phone number validation -----
const checkPhoneNumber = (phoneNumber) => {
     
  if (!isRequired(phoneNumber)) {
    return errors.required;
  }
  if (!isPhoneNumberValid(phoneNumber)) {
    return errors.validPhone;
  }
  return null;
};

const isPhoneNumberValid = (phoneNum) => {
  let phoneRegex = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/;
  return phoneRegex.test(phoneNum);
};
//----check password validation ----
export const checkPassword = (password) => {
  if (!isRequired(password)) {
    return errors.required;
  }
  if (!ispasswordValid(password)) {
    return errors.validPassword;
  }
  return null;
};

const ispasswordValid = (password) => {
  let passRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/
  ;
  return passRegex.test(password);
};

//----check verify password-----
 const checkVerifyPassword = (password, verifyPassword) => {
  if (!isRequired(verifyPassword)) {
    return errors.required;
  }
  if (password !== verifyPassword) {
    return errors.validVpassword;
  }
  return null;
};

//----check address validation------
const checkAddress = (address) => {
  if (!isRequired(address)) {
    return errors.required;
  }
  if (!isAddressValid(address)) {
    return errors.validAddress;
  }
  return null;
};

const isAddressValid = (address) => {
  let addressReges = /^["א-ת0-9\s,'-]*$/;
  return addressReges.test(address) && address.split(" ").length > 2;
};

//---check if fieled is empty------
const isRequired = (value) => {
  return value === null ? false : true;
};
export const isContactValuesValid = (values) => {
  const errorMessages = {};
  const errname = checkName(values.name);
  if (errname != null) errorMessages.name = errname;
  const errEmail = checkEmail(values.email);
  if (errEmail != null) errorMessages.email = errEmail;
  const errPhone = checkPhoneNumber(values.phone);
  if (errPhone != null) errorMessages.phone = errPhone;
  const errAddress = checkAddress(values.address);
  if (errAddress != null) errorMessages.address = errAddress;
  return errorMessages;
};

export const isAddZimerValuesValid = (values) => {
  const errorMessages = {};
  const errname = checkName(values.name);
  if (errname != null) errorMessages.name = errname;
  const errPhone = checkPhoneNumber(values.phone);
  if (errPhone != null) errorMessages.phoneNumber = errPhone;
  return errorMessages;
};

export const isSigninValuesValid = (values) => {
  const errorMessages = {};
  const errname = checkName(values.name);
  if (errname != null) errorMessages.name = errname;
  const errId = checkIDNumber(values.id);
  if (errId != null) errorMessages.id = errId;
  const errEmail = checkEmail(values.email);
  if (errEmail != null) errorMessages.email = errEmail;
  const errPassword = checkPassword(values.password);
  if (errPassword != null) errorMessages.password = errPassword;
  const errValidPassword = checkVerifyPassword(values.validPassword,values.password);
  if (errValidPassword != null) errorMessages.validPassword = errValidPassword;
  return errorMessages;
};

export const isLoginValuesValid = (values) => {
  const errorMessages = {};
  const errEmail = checkEmail(values.email);
  if (errEmail != null) errorMessages.email = errEmail;
  const errPassword = checkPassword(values.password);
  if (errPassword != null) errorMessages.password = errPassword;
  return errorMessages;
};

export const isOwnerSigninValuesValid = (values) => {
    const errorMessages = {};
    const errname = checkName(values.zimerName);
    if (errname != null) errorMessages.name = errname;
    const errPassword = checkPassword(values.password);
    if (errPassword != null) errorMessages.password = errPassword;
    const errValidPassword = checkVerifyPassword(values.validPassword,values.password);
    if (errValidPassword != null) errorMessages.validPassword = errValidPassword;
    return errorMessages;
  };

