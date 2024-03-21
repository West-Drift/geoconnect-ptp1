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

const Plotters = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Plotters" title="" />
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

export default Plotters;
