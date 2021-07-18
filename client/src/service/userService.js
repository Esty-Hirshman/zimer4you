

export const addUser = async (userDatails) => {
      
    let res = await fetch("http://localhost:8080/users/signIn", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userDatails),
    });
    let response =await res.json()
    return response
};


export const loginUser = async (userDatails) => {
   
 let res = await fetch("http://localhost:8080/users/login/", {
     method: "PUT",
     headers: {
         "Content-Type": "application/json",
     },
     body: JSON.stringify(userDatails),
 });
 let response =await res.json()
 return response
};

export const getUserId = async (userId) => {
    let res = await fetch("http://localhost:8080/users/" + userId);
    let userById = await res.json();
    return userById;
  };

  export const changePassword = async (email,oldPassword, newPassword) => {
    
    const res = await fetch("http://localhost:8080/users/changePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email,oldPassword,newPassword}),
    });
    let response =await res.text();
    return response
  };

  
export const isNewUser = async (userId) => {
   
  let res = await fetch("http://localhost:8080/users/isNewUser/" + userId);
  let response = await res.text();
  return response;
};

export const contactByEmail = async (email,name,zimer) => {
  let res = await fetch("http://localhost:8080/users/contactByEmail",{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email,name,zimer}),
  } );
  let response = await res.text();
  return response;
};

export const contacValidation = async (data) => {
  let res = await fetch("http://localhost:8080/users/contacValidation",{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  } );
  let response = await res.json();
  return response;
};




