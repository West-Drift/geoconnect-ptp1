import React, { useRef } from "react";
import { Title } from "./components";
import {
  backIcon,
  nextIcon,
  user1,
  user2,
  user3,
  user4,
} from "../assets/assets";
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
      <div className="my-20 mx-auto px-2 sm:px-8 md:px-16 lg:px-28 relative ">
        <img
          src={nextIcon}
          alt=""
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 ss:p-3 sm:p-4 w-8 ss:w-10 sm:w-12 rounded-full cursor-pointer bg-primary2"
          onClick={slideForward}
        />
        <img
          src={backIcon}
          alt=""
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 ss:p-3 sm:p-4 w-8 ss:w-10 sm:w-12 rounded-full cursor-pointer bg-primary2"
          onClick={slideBackward}
        />
        <div className="overflow-hidden">
          <ul
            ref={slider}
            style={{ width: "200%" }}
            className="flex overflow-x-hidden transition-all duration-500"
          >
            <li className="list-none w-1/2 p-5 flex flex-col">
              <div className="shadow-md p-4 sm:p-8 rounded-lg text-gray-600 leading-3 sm:leading-7 flex flex-col flex-grow">
                <div className="flex items-center mb-5 text-sm">
                  <img
                    src={user1}
                    alt=""
                    className="w-10 ss:w-12 sm:w-16 rounded-full mr-2.5 border-4 border-primary2"
                  />
                  <div>
                    <h3 className="text-xs ss:text-base text-primary2">
                      Clair Bridgit
                    </h3>
                    <span className="text-xs ss:text-base">
                      GeoConnect, USA
                    </span>
                  </div>
                </div>
                <p className="text-xs ss:text-base">
                  Seamless platform offering a plethora of Geospatial services
                  for all levels. I particularly love how the platform solves
                  the issue of data acquisition and solving software and
                  equipment issues.
                </p>
              </div>
            </li>
            <li className="list-none w-1/2 p-5">
              <div className="shadow-md p-4 sm:p-8 rounded-lg text-gray-600 leading-5 sm:leading-7">
                <div className="flex items-center mb-5 text-sm">
                  <img
                    src={user2}
                    alt=""
                    className="w-10 ss:w-12 sm:w-16 rounded-full mr-2.5 border-4 border-primary2"
                  />
                  <div>
                    <h3 className="text-xs ss:text-base text-primary2">
                      Sanjeer Kumar
                    </h3>
                    <span className="text-xs ss:text-base">
                      GeoConnect, Kenya
                    </span>
                  </div>
                </div>
                <p className="text-xs ss:text-base">
                  Seamless platform offering a plethora of Geospatial services
                  for all levels. I particularly love how the platform solves
                  the issue of data acquisition and solving software and
                  equipment issues.
                </p>
              </div>
            </li>
            <li className="list-none w-1/2 p-5">
              <div className="shadow-md p-4 sm:p-8 rounded-lg text-gray-600 leading-5 sm:leading-7">
                <div className="flex items-center mb-5 text-sm">
                  <img
                    src={user3}
                    alt=""
                    className="w-10 ss:w-12 sm:w-16 rounded-full mr-2.5 border-4 border-primary2"
                  />
                  <div>
                    <h3 className="text-xs ss:text-base text-primary2">
                      Becky Campbell
                    </h3>
                    <span className="text-xs ss:text-base">
                      GeoConnect, Canada
                    </span>
                  </div>
                </div>
                <p className="text-xs ss:text-base">
                  Seamless platform offering a plethora of Geospatial services
                  for all levels. I particularly love how the platform solves
                  the issue of data acquisition and solving software and
                  equipment issues.
                </p>
              </div>
            </li>
            <li className="list-none w-1/2 p-5">
              <div className="shadow-md p-4 sm:p-8 rounded-lg text-gray-600 leading-5 sm:leading-7">
                <div className="flex items-center mb-5 text-sm">
                  <img
                    src={user4}
                    alt=""
                    className="w-10 ss:w-12 sm:w-16 rounded-full mr-2.5 border-4 border-primary2"
                  />
                  <div>
                    <h3 className="text-xs ss:text-base text-primary2">
                      David Burnes
                    </h3>
                    <span className="text-xs ss:text-base">
                      GeoConnect, Australia
                    </span>
                  </div>
                </div>
                <p className="text-xs ss:text-base">
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
      <div className="w-full min-h-10 bg-transparent text-white flex items-center justify-center">
        <Link className="" to="/sign-up">
          <button className="btn dark-btn  hover:bg-indigo-500">
            Join the Community
          </button>
        </Link>
      </div>
    </>
  );
};

export default Testimonials;
