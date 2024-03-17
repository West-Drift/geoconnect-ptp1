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

const Anubis = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Anubis" title="" />
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

export default Anubis;
