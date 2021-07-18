import React from "react";
import "./Comments.css";
import StarRatings from "react-star-ratings";

function Comments(props) {
  
  return (
    <div className="commen-contaner">
      <div className="comment-name">
        {" "}
        <p className="commen-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>{" "}
        </p>
        {props.name}
      </div>
      <div className="comment-comment">
        {" "}
        <p className="commen-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-chat-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
          </svg>
        </p>
        {props.text}
        <div className="comment-comment">
          <p className="commen-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-bar-chart-fill"
              viewBox="0 0 16 16"
              color="rgb(127, 180, 21)"
            >
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
            </svg>
          </p>
          <StarRatings
            starDimension="1.5vw"
            starSpacing="0.25vw"
            rating={props.rating}
            starRatedColor=" rgb(135, 202, 0)"
            starEmptyColor="rgb(223, 223, 223)"
            starHoverColor=" rgb(135, 202, 0)"
          />
        </div>
      </div>
    </div>
  );
}

export default Comments;
