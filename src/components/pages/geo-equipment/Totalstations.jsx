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

const Totalstations = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Total stations" title="" />
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

export default Totalstations;
