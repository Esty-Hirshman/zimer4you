export const getZimers = async () => {
   
  let res = await fetch("http://localhost:8080/zimers/getZimers");
  let zimers = await res.json();
  return zimers;
};

export const getZimersImges = async () => {
   
  let res = await fetch("http://localhost:8080/zimers/getZimersImges");
  let imges = await res.json();
  return imges;
};
export const getZimerById = async (zimerId) => {
   
  let res = await fetch("http://localhost:8080/zimers/getZimerById/" + zimerId);
  let zimerById = await res.json();
  return zimerById;
};

export const getZimerImgesById = async (zimerId) => {
   
  let res = await fetch("http://localhost:8080/zimers/getZimerImgesById/" + zimerId);
  let zimerIngs = await res.json();
  return zimerIngs;
};

export const getNumZimers = async () => {
   
  let res = await fetch("http://localhost:8080/zimers/getNumZimers");
  let numZimers = await res.json();
  return numZimers;
};

export const addComment = async (id, comment) => {
  await fetch("http://localhost:8080/zimers/addComment/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({comment}),
  });
};

export const addDate = async (id, date) => {
  let response = await fetch("http://localhost:8080/zimers/addDate/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({date}),
  });
  const res = await response.text();
    
  return res;
};

export const addZimer = async (zimer) => {
   
    const response = await fetch("http://localhost:8080/zimers/addZimer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(zimer),
    });
    const res = await response.json();
    
    return res;

};

export const isDataChoosed = async (zimerId,date) => {
   
  const response = await fetch("http://localhost:8080/zimers/isDataChoosed/" + zimerId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({date}),
    });
  const res = await response.text();
  return res;
}






