import React from "react";
import Social from "./ui/Social";
import Contact1 from "./ui/Contact1";

const ContactMe = () => {
  return (
    <div className="container mx-auto my-10 md:mb-15">
      <h1 className="text-3xl font-semibold md:text-5xl text-accent  md:mb-4 text-center md:text-start">
        Contact Me
      </h1>
      <p className="text-2xl text-center md:text-start">
        Get in touch with me via social media or send me an email.
      </p>
      <Contact1></Contact1>
   
    </div>
  );
};

export default ContactMe;
