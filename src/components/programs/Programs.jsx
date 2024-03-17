import React from "react";
import "./Programs.css";
import {
  program1,
  program2,
  program3,
  programIcon1,
  programIcon2,
  programIcon3,
} from "../../assets/assets";

import { Title } from "../components";

const Programs = () => {
  return (
    <>
      <div>
        <Title subTitle="Our PROGRAM" title="What We Offer" />
      </div>
      <div className="programs container">
        <div className="program ">
          <img src={program1} alt="" className="program1" />
          <div className="caption">
            <img src={programIcon1} alt="" />
            <p>Gesspatial Software</p>
          </div>
        </div>
        <div className="program">
          <img src={program2} alt="" className="program2" />
          <div className="caption">
            <img src={programIcon2} alt="" />
            <p>Gesspatial Equipment</p>
          </div>
        </div>
        <div className="program">
          <img src={program3} alt="" className="program3" />
          <div className="caption">
            <img src={programIcon3} alt="" />
            <p>Resources</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
