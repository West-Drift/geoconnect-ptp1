import React from "react";
import "./Contact.css";
import { Title } from "../components";
import {
  locationIcon,
  mailIcon,
  msgIcon,
  phoneIcon,
} from "../../assets/assets";

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
      <div className="contact container">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msgIcon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form and find out more about
            the services and several ways in which you can contribute further to
            the development of this website.
          </p>
          <ul>
            <li>
              <img src={mailIcon} alt="" />
              Contact@GeoConnect.dev
            </li>
            <li>
              <img src={phoneIcon} alt="" />
              +254-706-328-458
            </li>
            <li>
              <img src={locationIcon} alt="" />
              3rd Parklands Ave <br />
              30270 Parklands, Kenya
            </li>
          </ul>
        </div>

        <div className="contact-col">
          <form action="" onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label htmlFor="">Write your feedback here</label>
            <textarea
              name="feedback"
              rows="6"
              placeholder="Enter your feedback"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
