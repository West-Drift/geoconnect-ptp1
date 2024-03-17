import React, { useRef } from "react";
import "./Testimonials.css";
import { Title } from "../components";
import {
  backIcon,
  nextIcon,
  user1,
  user2,
  user3,
  user4,
} from "../../assets/assets";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translate(${tx}%)`;
  };

  return (
    <>
      <div>
        <Title subTitle="OUR COMMUNITY" title="Message from the Community" />
      </div>
      <div className="testimonials container">
        <img
          src={nextIcon}
          alt=""
          className="nextIcon"
          onClick={slideForward}
        />
        <img
          src={backIcon}
          alt=""
          className="backIcon"
          onClick={slideBackward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt="" />
                  <div>
                    <h3>Clair Bridgit</h3>
                    <span>GeoConnect, USA</span>
                  </div>
                </div>
                <p>
                  Seamless platform offering a plethora of Geospatial services
                  for all levels. I particularly love how the platform solves
                  the issue of data acquisition and solving software and
                  equipment issues.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user2} alt="" />
                  <div>
                    <h3>Sanjeer Kumar</h3>
                    <span>GeoConnect, Kenya</span>
                  </div>
                </div>
                <p>
                  Seamless platform offering a plethora of Geospatial services
                  for all levels. I particularly love how the platform solves
                  the issue of data acquisition and solving software and
                  equipment issues.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user3} alt="" />
                  <div>
                    <h3>Becky Campbell</h3>
                    <span>GeoConnect, Canada</span>
                  </div>
                </div>
                <p>
                  Seamless platform offering a plethora of Geospatial services
                  for all levels. I particularly love how the platform solves
                  the issue of data acquisition and solving software and
                  equipment issues.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user4} alt="" />
                  <div>
                    <h3>David Burnes</h3>
                    <span>GeoConnect, Australia</span>
                  </div>
                </div>
                <p>
                  Seamless platform offering a plethora of Geospatial services
                  for all levels. I particularly love how the platform solves
                  the issue of data acquisition and solving software and
                  equipment issues.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-t">
        <Link className="" to="/sign-up">
          <button className="btn dark-btn">Join the Community</button>
        </Link>
      </div>
    </>
  );
};

export default Testimonials;
