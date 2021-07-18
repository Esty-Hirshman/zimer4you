import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import home from "../../asset/imgs/17.jpg";
import { Icon, InlineIcon } from "@iconify/react";
import arrowCircleLeftOutline from "@iconify-icons/eva/arrow-circle-left-outline";

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      <div className="row">
        <div className="col-2"></div>
        <div className="homeText col-3">
          <div
            style={{ marginTop: "20%", marginRight: "5%", marginLeft: "5%" }}
          >
            <p>
              אתם רוצים לצאת לחופשה קצרה, מסכמים עם הבוס על העדרות מהעבודה,
              מדמינים את הנוף, את השיכשוך במי הבריכה, מתענגים על חומו של הג'קוזי
              ו- רק רוצים למצוא את הצימר המושלם...
              <br />
              כאן תוכלו לצפות בתמונות, להשוות מחירים ולבחור לכם חופשה מפנקת,
              חלומית ומושלמת! קדימה, ארזו מזוודות, אנחנו בדרך לחופש....
            </p>
            <br />
            <Link to={`/ZimerLIst`} style={{ textDecoration: "none" }}>
              <button className="homeButton">
                קדימה, נתחיל...{" "}
                <Icon
                  icon={arrowCircleLeftOutline}
                  style={{ fontSize: "26px" }}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
