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

const Gismaterials = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Gis materials" title="" />
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

export default Gismaterials;
