import React, { useState } from "react";
import {BiRupee} from "react-icons/bi"

import { RiHeart3Fill } from "react-icons/ri";
import "../components/SearchCard.css";

const SearchCard = ({ heading,info}) => {
  const [toggleHeart, setToggleHeart] = useState(false);
  function changeColor() {
    setToggleHeart(!toggleHeart);
  }
  return (
    <>
      <div className="ex-prop-wrapper">
        <h3> {heading}</h3>
        <div className="  cards flex">
          {info.map((item, index) => {
            return (
              <div className="cards ">
                <div className="card-wrapper " id="me">
                  <div className="img-wrapper" key={index}>
                    <img src={item.image}></img>

                    <div id="cost" className="flex"><BiRupee style={{color:"black"}} /> {item.price}Lac</div>
                    <div className="form-check"></div>
                  </div>
                  <div id="property-details">
                    <div className="property-name">
                      <div>
                        <h6>{item.name}</h6>

                        <p>
                          {item.state} , {item.city}
                        </p>
                      </div>
                      <div className="icons-wrapper">
                        <img src="images/share icon.svg"></img>
                       
                        <RiHeart3Fill
                          style={{ fontSize: "30px"}}
                          className={toggleHeart ? "heart active" : "heart"}
                          onClick={changeColor}
                        />
                      </div>
                    </div>
                    <div className="png flex">
                      <div className="rooms flex">
                        <img src="images/bathtub.svg"></img>
                        <p>{item.bathrooms} Bathroom</p>
                      </div>
                      <div className="rooms flex">
                        <img src="images/bed.svg"></img>
                        <p>{item.bedrooms} Bedrooms</p>
                      </div>
                    </div>
                    <div className="flex">
                      <span>{item.furnishing_status}</span>
                      <span>{item.construction_status}</span>
                      <span>{item.registration_status}</span>
                    </div>
                    <div className="form-check flex">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={item.city}
                        id="flexCheckDefault"
                      />
                      <p>Add to compare</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchCard;
