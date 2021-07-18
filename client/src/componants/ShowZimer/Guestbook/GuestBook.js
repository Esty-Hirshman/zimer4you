import React from "react";
import Comments from "./Comments/Comments";

export default function guestBook(props) {
    
  return (
    <>
      {props.comments.map((commen ,index) => {
        return <Comments key={index} name={commen.name} text={commen.comment} rating={commen.rating}/>;
      })}
    </>
  );
}
