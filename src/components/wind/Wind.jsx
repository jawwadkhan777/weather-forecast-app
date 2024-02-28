import React from "react";
import "./Wind.scss";
import { FaWind } from "react-icons/fa";

const Wind = ({windData}) => {
  return (
    <div className="wind">
      <FaWind size={35} style={{color: "#52b1d2"}} />
      <div className="wind_details">
        <div className="wind_details_speed">{Math.floor(windData)+' km/h'}</div>
        <div className="wind_details_tag">Wind-Speed</div>
      </div>
    </div>
  );
};

export default Wind;
