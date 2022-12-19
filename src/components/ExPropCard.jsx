import React from "react";
import "../components/ExProp.css";
const ExPropCard = ({ images }) => {
  return (
    <>
      <div className="ex-prop-wrapper" >
        <h2>Exclusive properties</h2>
      <div className="ex-prop-images flex">
        
        {images.map((image, index ) => {
          return (
            <div key={index}>
              <img className="card_image" src={image.image} alt="" />
              <h4>{image.name}</h4>
              <span>{image.about}</span>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default ExPropCard;
