export const getQuestions = async()=>{
    let res = await fetch('http://localhost:8080/questions/getAll');
    let questions = await res.json();
    return questions;
};





