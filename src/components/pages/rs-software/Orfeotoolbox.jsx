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

const Orfeotoolbox = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Orfeo toolbox" title="" />
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

export default Orfeotoolbox;
