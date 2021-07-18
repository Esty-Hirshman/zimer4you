export const getUserLoveZimers = async(userId)=>{
     
    let res = await fetch('http://localhost:8080/loveZimers/getUserLoveZimers/'+userId);
    let zimers = await res.json();
    return zimers;
};


export const clearLoveZimers = async (id) => {
     
   let res = await fetch("http://localhost:8080/loveZimers/clearLoveZimers/"+id, {
       method: "PUT",
       headers: {
           "Content-Type": "application/json",
       }
       
   });
   return await res.text();
   
};

export const addToLoveZimmers = async (userId,loveZimerId) => {
    
   let res = await fetch("http://localhost:8080/loveZimers/addToLoveZimmers/"+userId, {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify({loveZimerId}),
   });
   return await res.text();
   
};

export const deleteLoveZimers = async (id,loveZimer) => {
     
   let res = await fetch("http://localhost:8080/loveZimers/deleteLoveZimers/"+id, {
       method: "DELETE",
       headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify({loveZimer}),
   });
   return await res.text();
   
};