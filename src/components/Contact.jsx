import React from "react";
import { Title } from "./components";
import { locationIcon, mailIcon, msgIcon, phoneIcon } from "../assets/assets";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cf9acac0-dd61-4969-bc69-a7f095565c36");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div>
        <Title subTitle="Contact Us" title="Get in Touch" />
      </div>
      <div
        className="my-20 mx-auto flex flex-col md:flex-row items-start justify-between 
      w-full md:w-11/12 px-8 sm:px-6 md:px-0"
      >
        <div className="w-full md:w-1/2 text-primary3 mb-10 md:mb-0 px-4">
          <h3 className="text-primary1 font-medium text-2xl flex items-center mb-5">
            Send us a message
            <img src={msgIcon} alt="" className="w-8 ml-2.5" />
          </h3>
          <p className="max-w-md leading-7">
            Feel free to reach out through contact form and find out more about
            the services and several ways in which you can contribute further to
            the development of this website.
          </p>
          <ul className="space-y-5 mt-5">
            <li className="flex items-center">
              <img src={mailIcon} alt="" className="w-6 mr-2.5" />
              Contact@GeoConnect.dev
            </li>
            <li className="flex items-center">
              <img src={phoneIcon} alt="" className="w-6 mr-2.5" />
              +254-706-328-458
            </li>
            <li className="flex items-center">
              <img src={locationIcon} alt="" className="w-6 mr-2.5" />
              3rd Parklands Ave <br />
              30270 Parklands, Kenya
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 px-4 md:px-8">
          <form
            action=""
            onSubmit={onSubmit}
            className="text-center sm:text-left"
          >
            <label htmlFor="" className="text-primary3">
              Your name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="block w-full bg-primary4 p-4 border-0 outline-none mb-4 mt-1 resize-none rounded-xl"
            />
            <label htmlFor="" className="text-primary3">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
              className="block w-full bg-primary4 p-4 border-0 outline-none mb-4 mt-1 resize-none rounded-xl"
            />
            <label htmlFor="" className="text-primary3">
              Write your feedback here
            </label>
            <textarea
              name="feedback"
              rows="6"
              placeholder="Enter your feedback"
              required
              className="block w-full bg-primary4 p-4 border-0 outline-none mb-4 mt-1 resize-none rounded-xl"
            ></textarea>
            <button type="submit" className="btn dark-btn mt-5">
              Submit now
            </button>
          </form>
          <span className="block my-5">{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
