import "./Temperature.scss";
import {
  FaCloud,
  FaSun,
  FaMoon,
  FaCloudSun,
  FaCloudMoon,
  FaCloudRain,
  FaSnowflake,
} from "react-icons/fa";
import { MdThunderstorm } from "react-icons/md";
import {WiFog} from "react-icons/wi"

const Temperature = ({ tempData, locationData, image }) => {

  

  return (
    <div className="weather">
      {image==='01d'? <FaSun size={150} style={{ color: "#e43d00", opacity: '0.8' }} /> : image==='01n'? <FaMoon size={150} style={{ color: "#91a3b0", opacity: '0.8' }} /> : image==='02d'? <FaCloudSun size={150} style={{ color: "#FDB813", opacity: '0.8' }}/> : image==='02n'? <FaCloudMoon size={150} style={{ color: "#91a3b0", opacity: '0.8' }} /> : (image==='03d'||image==='03n'||image==='04d'||image==='04n')? <FaCloud size={150} style={{ color: "#91a3b0", opacity: '0.8' }}/> : (image==='09d'||image==='09n'||image==='10d'||image==='10n')? <FaCloudRain size={150} style={{ color: "#91a3b0", opacity: '0.8' }}/> : (image==='11d'||image==='11n')? <MdThunderstorm size={150} style={{ color: "#91a3b0", opacity: '0.8' }} /> : (image==='13d'||image==='13n')? <FaSnowflake size={150} style={{ color: "#91a3b0", opacity: '0.8' }}/> : (image==='50d'||image==='50n')? <WiFog size={150} style={{ color: "#91a3b0", opacity: '0.8' }} /> : image}
      
      <div className="weather_temperature">
        {Math.floor(tempData)+'°C '}
      </div>
      <div className="weather_city">
        {locationData}
      </div>
    </div>
  );
};

export default Temperature;
