import React, { useState, useEffect } from "react";
import QandA from "./QandA/QandA";
import { getQuestions } from "../../service/questionsServise";
import "./Questions.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Questions() {
  const [questions, setquestions] = useState(null);

  useEffect(async () => {
    let tempQuestions = await getQuestions();
    setquestions(tempQuestions);
  }, []);

  return (
    <>
      {questions === null && (
        <div style={{ marginTop: "20%" }}>
          <Loader type="Puff" color="#769925" height={150} width={150} />
        </div>
      )}
      <div>
        {questions !== null &&
          questions.map((question, index) => {
            return (
              <QandA
                key={index}
                question={question.question}
                answer={question.answer}
              ></QandA>
            );
          })}
      </div>
    </>
  );
}

export default Questions;
