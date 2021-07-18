import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ZimerImges from "./ZimerImges/ZimerImges";
import GoogleMap from "./GoogleMap/GoogleMap";
import { getZimerById, addComment, getZimerImgesById } from "../../service/zimersService";
import { HashLink as Link } from "react-router-hash-link";
import googleMaps from "@iconify-icons/logos/google-maps";
import "./ShowZimer.css";
import Dates from "./Dates/Dates";
import Contact from "./Contact/Contact";
import GuestBook from "./Guestbook/GuestBook";
import NewComment from "./Guestbook/NewComment/NewComment";
import { Icon } from "@iconify/react";
import checkmarkCircle20Regular from "@iconify-icons/fluent/checkmark-circle-20-regular";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import logo from "../../asset/imgs/logo.png"

function ShowZimer(props) {
  const [showNewComment, setShowNewComment] = useState(false);
  const [zimerToShow, setzimerToShow] = useState(null);
  const [addImgs, setaddImgs] = useState(false)

  const [locationInMap, setlocationInMap] = useState({ lat: 0, lng: 0 });
  const zimerId = useParams().id;
  const openShowNewComment = () => setShowNewComment(true);
  const closeShowNewComment = () => setShowNewComment(false);

  useEffect(async () => {
    let zimer = await getZimerById(zimerId);
    zimer.img = logo
    zimer.imges = [logo,logo,logo,logo,logo]
    await setzimerToShow(zimer);
    setlocationInMap({lat: zimer.latitude,lng: zimer.longitude})
    let images = await getZimerImgesById(zimerId)
    zimer.imges = images.imges
    zimer.img = images.img
    setzimerToShow(zimer)
    setaddImgs(true)
  }, [showNewComment]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {}, [addImgs])

  const addNewcomment = async (comment, rating) => {
    const newComment = {
      name: localStorage.user !== "null"? JSON.parse(localStorage.user).name : JSON.parse(localStorage.owner).zimerName,
      comment: comment,
      rating: rating,
    };
    await addComment(zimerToShow.id, newComment);
    setzimerToShow({
      ...zimerToShow,
      comment: [...zimerToShow.comments, newComment],
    });
    closeShowNewComment();
  };
  return (
    <div>
      {zimerToShow === null &&<div style={{marginTop:"8%"}}><Loader
        type="Puff"
        color="#769925"
        height={150}
        width={150}
      /></div>}
      {zimerToShow !== null && (
        <div>
          <div className="top">
            {zimerToShow !== null && <h4>{zimerToShow.name}</h4>}
            <h5>מחכים לכם אצלינו!</h5>
          </div>
          <div className="spase"></div>
          <div className="row show-zimer-container">
            <div className="col-4 divStyle" style={{ marginRight: "5%" }}>
             <ZimerImges images={zimerToShow.imges} />
            </div>
            <div className="col-1"></div>
            {
              <div className="col-3 divStyle">
                <h3 style={{ marginTop: "10%" }}>{zimerToShow.name}</h3>

                <h5>{"צימר מדהים ב" + zimerToShow.area}</h5>

                <p>{"  מיקום - " + " " + zimerToShow.location}</p>
                <p>{" מחיר - " + " " + zimerToShow.price + " ₪ "}</p>
                <h6>{" תיאור נוסף - "}</h6>

                {!(zimerToShow.category === undefined) && (
                  <p>
                    {zimerToShow.category.map((item, index) => {
                      return (
                        item != null && (
                          <small key={index}>
                            <Icon
                              icon={checkmarkCircle20Regular}
                              style={{ color: "green" }}
                            />{" "}
                            {item}
                          </small>
                        )
                      );
                    })}
                  </p>
                )}

                <p>{"מספר מיטות - " + zimerToShow.beds}</p>

                <Dates
                  massage="בחירת תאריכים"
                  zimerId={zimerId}
                  zimerName={zimerToShow.name}
                  onUpdate={props.onUpdate}
                  onChange={props.onChange}
                >
                  {" "}
                </Dates>
                <Link to="#zimerMap" style={{ textDecoration: "none" }}>
                  <div className="goto">
                    <p>
                      <Icon icon={googleMaps} /> איך מגיעים? מפת הגעה{" "}
                    </p>
                  </div>
                </Link>
              </div>
            }
            <div className="col-1"></div>
            <div className="col-2 divStyle">
              <Contact
                phone={zimerToShow.phone}
                zimer={zimerToShow.name}
                onUpdate={props.onUpdate}
              />
            </div>
          </div>
          <br />
          <div className="showZimer-guestBook">
            <p className="ShowZimer-guestBookText">ספר אורחים</p>
            <div className="showZimer-addComment" onClick={openShowNewComment}>
              הוסף תגובה
            </div>
            {!(zimerToShow.comments === undefined) && (
              <GuestBook comments={zimerToShow.comments} />
            )}
            <br />

            <NewComment
              userNow={props.userNow}
              show={showNewComment}
              handleClose={closeShowNewComment}
              addNewcomment={addNewcomment}
            />
          </div>
          <div className="show-zimer-container">
            <h3 className="map-text">מפת הגעה:</h3>
            <div className="row" id="zimerMap">
              <div className="col-3"></div>
              <div className="col-6" style={{ height: "100%" }}>
                {
                  <GoogleMap
                    lat={locationInMap.lat}
                    lng={locationInMap.lng}
                    name={zimerToShow.name}
                    className="googlemap"
                  />
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowZimer;
