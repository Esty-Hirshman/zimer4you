export const getOwnersOrders = async(name)=>{
    let res = await fetch('http://localhost:8080/zimerOwner/getOwnersOrders',{
      method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name}),
    })
    let orders = await res.json();
    return orders;
};

export const addZimerOwner = async (owner) => {
     
    let res = await fetch("http://localhost:8080/zimerOwner/addZimerOwner", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(owner),
    });
    return await res.json();

};

export const isOwnerIn = async (name,password) => {
    
    let res = await fetch("http://localhost:8080/zimerOwner/isOwnerIn",{
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({name,password}),
    });
    return res.json();
  };

  export const addOrder = async (zimerName, newOrder) => {
    await fetch("http://localhost:8080/zimerOwner/addOrder" , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({zimerName,newOrder}),
    });
  };


  export const getNumOwners = async()=>{
    let res = await fetch('http://localhost:8080/zimerOwner/getNumOwners',)
    return res.json();
};