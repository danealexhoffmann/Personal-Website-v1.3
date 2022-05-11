import React from "react";
import SocialLinks from "../components/SocialLinks";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Hit me up.</h2>
      <a className="contact-email" href="mailto:danehoffmann@gmail.com">
        danehoffmann@gmail.com
      </a>
      <SocialLinks />
    </div>
  );
};

export default Contact;
