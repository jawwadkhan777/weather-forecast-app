import "./WeatherApp.scss";
import Temperature from "./components/Temperature";
import Humidity from "./components/Humidity";
import Wind from "./components/Wind";
import { useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { WiNa } from "react-icons/wi";
import PersonalTag from "./components/PersonalTag";

function WeatherApp() {
  const inputRef = useRef(null);
  const [tempData, setTempData] = useState("0");
  const [locationData, setLocationData] = useState("Search Location");
  const [humidityData, setHumidityData] = useState("0");
  const [windData, setWindData] = useState("0");
  const [image, setImage] = useState(
    <WiNa size={150} style={{ color: "#101820" }} />
  );

  const apiKey=process.env.REACT_APP_WEATHER_API_KEY;

  const searchHandle = async () => {
    const element = inputRef.current;

    if (element.value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${apiKey}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();

      setTempData(data.main.temp);
      setLocationData(data.name);
      setHumidityData(data.main.humidity);
      setWindData(data.wind.speed);
      setImage(data.weather[0].icon);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="App_container">
        <div className="App_container_search-bar">
          <input
            type="text"
            className="input"
            placeholder="search"
            ref={inputRef}
          />
          <MdSearch
            size={35}
            style={{ color: "#FEE715", cursor: "pointer" }}
            onClick={searchHandle}
          />
        </div>
        <Temperature
          tempData={tempData}
          locationData={locationData}
          image={image}
        />
        <Humidity humidityData={humidityData} />
        <Wind windData={windData} />
        <PersonalTag />
      </div>
    </div>
  );
}

export default WeatherApp;
