import React from "react";
import { Title } from "./components";
import { gallery1, gallery2, gallery3, gallery4 } from "../assets/assets";

const Contributers = () => {
  return (
    <>
      <div>
        <Title subTitle="Gallery" title="Contributers' Photos" />
      </div>
      <div className="my-20 w-9/10 mx-auto text-center px-8">
        <div className="flex items-center justify-between mb-10">
          <img src={gallery1} alt="" className="w-1/4 rounded-lg" />
          <img src={gallery2} alt="" className="w-1/4 rounded-lg" />
          <img src={gallery3} alt="" className="w-1/4 rounded-lg" />
          <img src={gallery4} alt="" className="w-1/4 rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default Contributers;
