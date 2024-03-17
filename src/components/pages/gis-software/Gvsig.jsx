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

const Gvsig = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Gvsig" title="" />
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

export default Gvsig;
