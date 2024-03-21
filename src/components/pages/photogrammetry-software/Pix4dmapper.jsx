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

const Pix4dmapper = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Pix4dmapper" title="" />
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

export default Pix4dmapper;
