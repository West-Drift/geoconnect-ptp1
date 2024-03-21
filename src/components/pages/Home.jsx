import React, { useState } from "react";
import {
  Hero,
  Programs,
  About,
  Campus,
  Testimonials,
  Contact,
  Footer,
  VideoPlayer,
} from "../components";

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Hero />
      <Programs />
      <About setPlayState={setPlayState} />
      <Campus />
      <Testimonials />
      <Contact />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default Home;
