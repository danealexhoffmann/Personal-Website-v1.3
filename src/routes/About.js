import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="image-div">
        <img
          className="profile"
          src="./images/dane-profile.jpg"
          alt="Dane Hoffmann"
        />
      </div>
      <div className="text-div">
        <h2 className="about-title">About.</h2>
        <p className="about-subtext">
          I am a software developer and digital designer from Cape Town, South
          Africa. I am passionate about finding the intersection between
          beautiful design and seamless functionality. In my spare time you can
          find me looking for new music and artists to obsess about.
        </p>
        <a
          id="resume"
          class="button"
          href="https://drive.google.com/file/d/1ySQx-zn0rr7fnfA_87SNfO4G6cyaxhXO/view?usp=sharing"
        >
          See My Resume!
        </a>
      </div>
    </div>
  );
};

export default About;
