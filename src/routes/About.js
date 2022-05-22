import React from "react";
import { NavLink } from "react-router-dom";
import reactNative from "../icons/react-native.svg";
import redux from "../icons/redux.svg";
import javascript from "../icons/javascript.svg";
import nodejs from "../icons/nodejs.svg";
import git from "../icons/git.svg";
import html5 from "../icons/html-5.svg";
import css3 from "../icons/css3.svg";
import vscode from "../icons/visual-studio-code-2019.svg";
import adobecc from "../icons/adobe-creative-cloud.svg";
import figma from "../icons/figma.svg";
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
      <div className="skills-div">
        <h3 className="skills-title">skills and tools:</h3>
        <div className="skills-items">
          <ul className="skills-list-one">
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={reactNative} alt="reactLogo" />
                <figcaption>React</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={redux} alt="redux" />
                <figcaption>Redux</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={javascript} alt="javascript" />
                <figcaption>Javascript</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={nodejs} alt="nodejs" />
                <figcaption>Nodejs</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={git} alt="git" />
                <figcaption>Git</figcaption>
              </figure>
            </li>
          </ul>
          <ul className="skills-list-two">
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={html5} alt="html5" />
                <figcaption>HTML 5</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={css3} alt="css3" />
                <figcaption>CSS 3</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={vscode} alt="vscode" />
                <figcaption>VS Code</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={figma} alt="figma" />
                <figcaption>Figma</figcaption>
              </figure>
            </li>
            <li className="skills-item">
              <figure>
                <img className="skill-icon" src={adobecc} alt="adobecc" />
                <figcaption>Adobe CC</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
      <div className="projects-btn-div">
        <NavLink className="projects-link" exact to="/projects">
          <p className="projects-page">See My Projects</p>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
