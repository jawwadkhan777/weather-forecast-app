import React from "react";
import "./About.scss";
import { MdInfoOutline } from "react-icons/md";
import img1 from "../../assets/aboutImg1.jpg";
import img2 from "../../assets/aboutimg2.jpg";
import img3 from "../../assets/aboutImg3.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about_left">
        <div className="about_left_heading">
          <span>About</span>
          <span> WeatherHub:</span>
        </div>
        <div className="about_left_content">
          <span>
            Welcome to WeatherHub,
            <br />
            It redefines your weather experience with precision, accuracy, and a
            touch of meteorological magic.
          </span>
        </div>

        <div className="about_left_mission">
          <span>Its Mission</span>
          <br />
          <span>
            To provide you with the most accurate, reliable, and visually
            appealing weather forecasts. We believe that understanding the
            weather shouldn't be a mundane task but an exciting journey into the
            atmospheric wonders that surround us.
          </span>
        </div>

        <div className="about_left_question">
          <span>What Sets WeatherHub Apart?</span>
          <div>
            <div>
              <div>
                <MdInfoOutline size={40} style={{ color: "#52b1d2" }} />
              </div>
              <div>
                It delivers a level of accuracy in forecasts that provides you
                with the strongest and most reliable weather information,
                ensuring you stay prepared at all times.
              </div>
            </div>
            <div>
              <div>
                <MdInfoOutline size={40} style={{ color: "#52b1d2" }} />
              </div>
              <div>
                Experience the joy of navigating the world of weather, where it
                transforms data into visually engaging graphics.
              </div>
            </div>
            <div>
              <div>
                <MdInfoOutline size={40} style={{ color: "#52b1d2" }} />
              </div>
              <div>
                WeatherHub not only provides numbers but also offers accurate
                and detailed information, including temperature in degrees
                Celsius, city-specific recommendations, humidity levels, and
                wind speeds, keeping you informed about every aspect.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_right">
        <img src={img1} alt="loading..." />
        <img src={img2} alt="loading..." />
        <img src={img3} alt="loading..." />
      </div>
    </div>
  );
}

export default About;
