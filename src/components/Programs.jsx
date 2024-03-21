import React from "react";
import { Title } from "./components";
import {
  program1,
  program2,
  program3,
  programIcon1,
  programIcon2,
  programIcon3,
} from "../assets/assets";

const Programs = () => {
  return (
    <>
      <div>
        <Title subTitle="Our PROGRAM" title="What We Offer" />
      </div>
      <div className="my-20 w-9/10 mx-auto flex items-center justify-between px-8">
        <div className="w-1/3 relative">
          <img src={program1} alt="" className="w-full rounded-lg block" />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-blue-900 bg-opacity-30 flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-56 transition-all duration-400">
            <img src={programIcon1} alt="" className="w-15 mb-2.5" />
            <p>Geospatial Software</p>
          </div>
        </div>
        <div className="w-1/3 relative">
          <img src={program2} alt="" className="w-full rounded-lg block" />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-blue-900 bg-opacity-30 flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-56 transition-all duration-400">
            <img src={programIcon2} alt="" className="w-15 mb-2.5" />
            <p>Geospatial Equipment</p>
          </div>
        </div>
        <div className="w-1/3 relative">
          <img src={program3} alt="" className="w-full rounded-lg block" />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-blue-900 bg-opacity-30 flex items-center justify-center flex-col text-white cursor-pointer opacity-0 pt-56 transition-all duration-400">
            <img src={programIcon3} alt="" className="w-15 mb-2.5" />
            <p>Resources</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
