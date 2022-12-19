import React from "react";
import "../components/ExProp.css";
import ExPropCard  from "../components/ExPropCard"
import {exclusiveimages} from "../components/Images4Banner"
const ExProp = () => {
  return (
    <>
      <div className="exprop-wrapper flex">
        <div>
          <h1>Let's find your dream home</h1>
          <span>Bringing you one step closer</span>
        </div>
        <div className="search-wrapper">
        <div className="search-1">
          <div className="input-type-property city" >
            <span >Explore properties</span>
            <img src="images/black search icon.svg" alt="icon"></img>
          </div>
          </div>
        </div>
      </div>
      <ExPropCard images={exclusiveimages}/>
    </>
    
  );
};

export default ExProp;
