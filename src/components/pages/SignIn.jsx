import React from "react";
import { Title, Testimonials, Contact, Footer } from "../components";

const SignIn = () => {
  return (
    <>
      <div className="h-pgs">
        <Title subTitle="SignUp" title="Join the Community" />
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default SignIn;
