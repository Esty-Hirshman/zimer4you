export const getChat = async()=>{
    let res = await fetch('http://localhost:8080/chat/getChat');
    let chat = await res.json();
    return chat;
};


export const addResponse = async (massage) => {
    let res = await fetch("http://localhost:8080/chat/addResponse", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({massage}),
    });
    return await res.text()
};