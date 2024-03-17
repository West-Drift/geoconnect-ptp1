import React from "react";
import { Title, Contact, Footer } from "../components";

const GetHelp = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="Q & A Hub" title="Get help from the community" />
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default GetHelp;
