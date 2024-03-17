import React from "react";
import "./About.css";
import { about, playIcon } from "../../assets/assets";

const About = () => {
  return (
    <div className="about container">
      <div className="about-left">
        <img src={about} alt="" className="about-img" />
        <img src={playIcon} alt="" className="playIcon" />
      </div>
      <div className="about-right">
        <h3>ABOUT GEOCONNECT</h3>
        <h2>Bridging Practical Knowledge in Geospatial Engineering</h2>
        <p>
          Address the lack of accessible and detailed information on specific
          practical aspects of geospatial engineering.
        </p>
        <p>
          Foster a collaborative platform for students and professionals to
          share experiences, challenges, and solutions.
        </p>
        <p>
          Provide insights into the integration of GIS, survey, and remote
          sensing technologies for comprehensive understanding.
        </p>
      </div>
    </div>
  );
};

export default About;
