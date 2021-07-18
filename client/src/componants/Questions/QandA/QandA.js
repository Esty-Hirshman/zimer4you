import React, { useState, useEffect } from "react";
import "./QandA.css";
import { Icon } from "@iconify/react";
import arrowUpFill from '@iconify-icons/eva/arrow-up-fill';
import arrowLeftFill from '@iconify-icons/eva/arrow-left-fill';


function QandA(props) {
  const [answer, setanswer] = useState(false);

  useEffect(() => {}, [answer]);
  const showAnswer = () => {
    setanswer(!answer);
  };
  return (
    <div className="row">
      <div  onClick={showAnswer} className="green col-1" style={{width:"8.3333333%"}}>
        {!answer &&<Icon icon={arrowLeftFill} 
          
          style={{ color: "black" ,fontSize:"2vw",color:"white"}}
        />}
        {answer &&<Icon icon={arrowUpFill} 
        style={{ color: "black" ,fontSize:"2vw",color:"white" ,marginTop:"50%"}}/>}
        </div>
      <div className="questionContainer col-10">
      <h5 className="question">
        {props.question}
      </h5>
      {answer && <p className="answer">{props.answer}</p>}
      </div>
    </div>
  );
}

export default QandA;
