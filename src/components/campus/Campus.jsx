import React from "react";
import "./Campus.css";
import { gallery1, gallery2, gallery3, gallery4 } from "../../assets/assets";

import { Title } from "../components";

const Campus = () => {
  return (
    <>
      <div>
        <Title subTitle="Gallery" title="Contributers Photos" />
      </div>
      <div className="campus container">
        <div className="gallery">
          <img src={gallery1} alt="" />
          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Campus;
