import React from "react";
import {
  Title,
  Programs,
  About,
  Contributers,
  Testimonials,
  Contact,
  Footer,
} from "../../components";

const Grassgis = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Grass gis" title="" />
      </div>
      <Programs />
      <About />
      <Contributers />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Grassgis;
