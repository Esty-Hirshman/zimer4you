import React, { useState, useEffect } from "react";
import SearchField from "./SearchField/SearchField.js";
import "./Search.css";
import { getZimers } from "../../../service/zimersService";

export default function Search(props) {
  const [area, setarea] = useState("");
  const [category, setcategory] = useState("");
  const [bads, setbads] = useState(0);
  const [price, setprice] = useState(0);
  const [numBeds, setnumBeds] = useState([]);
  const [prices, setprices] = useState([]);

  useEffect(async () => {
    let tempBeds = [];
    let tempPrices = [];
    let zimers = await getZimers();
    for (let i = 0; i < zimers.length; i++) {
      if (!tempBeds.includes(Number(zimers[i].beds))) {
        tempBeds.push(Number(zimers[i].beds));
      }
      if (!tempPrices.includes(Number(zimers[i].price))) {
        tempPrices.push(Number(zimers[i].price));
      }
    }

    
    tempBeds.sort((a, b) => a - b); //sort beds array
    setnumBeds(tempBeds);
    tempPrices.sort((a, b) => a - b); //sort price array
    setprices(tempPrices);
  }, []);

  useEffect(() => {
    props.onChange({
      area: area,
      category: category,
      beds: Number(bads),
      price: Number(price),
    });
  }, [area, category, bads, price]);

  return (
    <>
      <div className="row">
        <div className="col-3">
          <SearchField
            searchValues={props.searchValues}
            name={"בחר איזור"}
            options={["צפון", "דרום", "מרכז"]}
            onChange={setarea}
          />
        </div>
        <div className="col-3">
          <SearchField
            searchValues={props.searchValues}
            name={"בחר קטגוריה"}
            options={["בריכה", "ג'קוזי", "חצר גדולה", "נדנדות", "נוף"]}
            onChange={setcategory}
          />
        </div>
        <div className="col-3">
          <SearchField
            searchValues={props.searchValues}
            name={"מספר מיטות"}
            options={numBeds}
            onChange={setbads}
          />
        </div>
        <div className="col-3">
          <SearchField
            searchValues={props.searchValues}
            name={"טווח מחיר"}
            options={prices}
            onChange={setprice}
          />
        </div>
      </div>
    </>
  );
}
