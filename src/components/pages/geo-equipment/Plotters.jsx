import React from "react";
import {
  Title,
  Programs,
  About,
  Campus,
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
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Plotters;
