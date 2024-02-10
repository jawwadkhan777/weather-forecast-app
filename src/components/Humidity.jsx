import React from "react";
import "./Humidity.scss";
import { MdOpacity } from "react-icons/md";

const Humidity = ({humidityData}) => {
  return (
    <div className="humidity">
      <MdOpacity size={35} style={{color: "#52b1d2"}}/>
      <div className="humidity_details">
        <div className="humidity_details_rate">{humidityData+'%'}</div>
        <div className="humidity_details_tag">Humidity</div>
      </div>
    </div>
  );
};

export default Humidity;
