import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Zimer from "./Zimer/Zimer.js";
import Search from "./Search/Search.js";
import "./ZimerList.css";
import { getZimers,getZimersImges } from "../../service/zimersService";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import logo from '../../asset/imgs/logo.png'

function ZimerList(props) {
  const [searchValues, setsearchValues] = useState({
    area: "",
    category: "",
    beds: 0,
    price: 0,
  });
  const [zimerList, setzimerList] = useState([]);
  const [choosedZimers, setchoosedZimers] = useState([]);
  const [empty, setempty] = useState(false);
  const [imges, setimges] = useState(false);


  useEffect(() => {
  }, [imges]);

  useEffect(async () => {
    let newZimersList = await getZimers();
    await newZimersList.map( (zimer)=>{
      zimer.img = logo
    })
    setchoosedZimers(newZimersList);
    setzimerList(newZimersList);
    let zimerImegs =await getZimersImges()
    newZimersList.map((zimer,index)=>{
      zimer.img = zimerImegs[index].img 
    })
    // setchoosedZimers(zimerList);
    setzimerList(newZimersList);
    setimges(true)
  }, [props.isAddZimer]);

  

  useEffect(() => {
    choosedZimers.length === 0 ? setempty(true) : setempty(false);
  }, [choosedZimers.length]);

  function isChoosed(item) {  
    //check if zimer is filtered, set true if filtered and show to user
    if (searchValues.area !== "" && searchValues.area !== item.area) {
      return false;
    }
  
    if (
      searchValues.category !== "" &&
      searchValues.category !== item.category[0] &&
      searchValues.category !== item.category[1] &&
      searchValues.category !== item.category[2] &&
      searchValues.category !== item.category[3] &&
      searchValues.category !== item.category[4]
    ) {
      return false;
    }
    if (
      Number(searchValues.beds) !== 0 &&
      Number(searchValues.beds) !== Number(item.beds)
    ) {
      return false;
    }
    if (
      Number(searchValues.price) !== 0 &&
      Number(searchValues.price) < Number(item.price)
    ) {
      return false;
    }

    return true;
  }

  const searchZimer = () => {
    setchoosedZimers(zimerList.filter(isChoosed));
  };

  return (
    <>
    
      <div className="searchSpace"></div>
      <div className="bgSearch">
        <div className="searchSpace"></div>
        <div className="containerSearch">
          <Search searchValues={searchValues} onChange={setsearchValues} />
          <div className="col-6">
            <Link to="#zimerContainerId">
              <button className="search" onClick={searchZimer}>
                חיפוש
              </button>
            </Link>
          </div>
        </div>
      </div>
      {zimerList.length === 0 &&<div style={{marginTop:"10%"}}><Loader
        type="Puff"
        color="#769925"
        height={150}
        width={150}
      /></div>}
      {(empty && zimerList.length !== 0) && (
        <div>
          <h2 className="empty">לא נמצאו תוצאות...</h2>
        </div>
      )}
      {zimerList !== [] && (
        <div className="zimerContainer" id="zimerContainerId">
          <div className="row">
            {choosedZimers.map((item, index) => {
              return (
                <div key={index} className="col-4">
                  <Zimer
                    clean={props.updateZimers}
                    zimer={item}
                    isLoveChange={props.isLoveChange}
                    onChange={props.onChange}
                    onUpdate={props.onUpdate}
                    user={props.user}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default ZimerList;
