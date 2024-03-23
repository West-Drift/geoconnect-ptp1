import React from "react";
import { Title } from "./components";
import { gallery1, gallery2, gallery3, gallery4 } from "../assets/assets";

const Contributers = () => {
  return (
    <>
      <div>
        <Title subTitle="Gallery" title="Contributers' Photos" />
      </div>
      <div className="my-20 w-11/12 mx-auto text-center px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <img src={gallery1} alt="" className="rounded-lg " />
          <img src={gallery2} alt="" className="rounded-lg " />
          <img src={gallery3} alt="" className="rounded-lg " />
          <img src={gallery4} alt="" className="rounded-lg " />
        </div>
      </div>
    </>
  );
};

export default Contributers;
