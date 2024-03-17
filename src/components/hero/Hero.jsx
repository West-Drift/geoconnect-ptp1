import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-screen bg--primary bg-cover font-[Poppins] md:bg-top bg-center">
      <div className="flex flex-col justify-center text-center items-center h-screen">
        <h1 className=" md:text-5xl text-3xl text-white py-6 font-semibold text-center">
          Bridging Practical Knowledge in Geospatial Engineering
        </h1>
        <p className="text-white text-4x1 font-sm text-center mt-8">
          This is a Web development project that aims to equip geospatial
          engineers with necessary practical skills set with a focus on the
          fields of GIS and remote sensing and their related software. <br />
          This project targets everyone who utilizes geospatial related
          software, especially students
        </p>
        <div className="text-xl mt-9">
          <Link className="" to="/get-help">
            <button className="btn dark-btn">Ask Questions</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
