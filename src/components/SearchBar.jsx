import React from "react";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <>
      <div className="search-wrapper">
        <div className="search-1">
          <div className="input-type-property city" >
            <span >City</span>
            <img src="images/polygon 8.svg"></img>
          </div>
          <div className="input-type-property locality">
            <span >Locality</span>
            <img src="images/polygon 8.svg"></img>
          </div>
          <button style={{ backgroundColor: "#26AAF3" }}>
            {" "}
            <img src="images/search icon.svg"></img>
          </button>
        </div>

        <div className="input-type-property flex">
          <div >
            <input type="radio" placeholder="apartment"></input>
            <span  >Apartment</span>
          </div>
          <div style={{paddingRight:"30px"}}>
            <input type="radio" placeholder="apartment"></input>
            <span >Villa</span>
          </div>
          <div id="plot">
            <input type="radio" placeholder="apartment"></input>
            <span >Plot</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
