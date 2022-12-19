import React, { useState } from "react";

import { RiHeart3Fill } from "react-icons/ri";
import "../components/SearchCard.css";

const SearchCard = ({ info }) => {
  return (
    <>
      <div className="ex-prop-wrapper">
        <h2>Exclusive properties</h2>
        <div className="ex-prop-images flex">
          {info.map((item, index) => {
            return (
              <div>
                <div className="card-wrapper" id="me">
                  <div className="img-wrapper" key={index}>
                    <a href="/Editcard.js">
                      {" "}
                      <img src={item.image}></img>
                    </a>
                    <div id="cost"> {item.price}Lakhs</div>
                    <div className="form-check"></div>
                  </div>
                  <div id="property-details">
                    <div className="property-name">
                      <div>
                        <h6>{item.name}</h6>

                        <p>
                          {item.state},{item.city}
                        </p>
                      </div>
                      <div className="icons-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
                <RiHeart3Fill
                  style={{ fontSize: "25px" }}
                 
                 
                />
              </div>
                    </div>
                    <div className="png flex">
                      <div className="rooms flex">
                        <img src="images/bathtub.png"></img>
                        <p>{item.bathrooms}</p>
                      </div>
                      <div className="rooms flex">
                        <img src="images/bed.png"></img>
                        <p>{item.bedrooms}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <span>{item.furnishing_status}</span>
                      <span>{item.construction_status}</span>
                      <span>{item.registration_status}</span>
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
