import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-screen bg--primary bg-cover flex items-center justify-center md:bg-top bg-center ">
      <div className="text-white justify-center text-center items-center  mx-auto w-3/4 space-y-8">
        <h1 className="text-4xl font-bold">GeoConnect </h1>
        <p className="text-lg font-semibold">
          Bridging practical knowledge in Geospatial Engineering. <br />
          Home of expert experiences.
        </p>
        <div className="text-xl">
          <Link className="" to="/get-help">
            <button className="btn hero-btn hover:bg-purple-200">
              Ask Questions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
