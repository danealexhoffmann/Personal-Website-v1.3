import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="title-container">
        <h2 className="projects-title">Projects.</h2>
      </div>

      <div className="cards-container">
        <div className="card one">
          <img
            className="screenshot"
            src="./images/personal-site.jpg"
            alt="Personal Site"
          />
          <h3 className="project-name">Personal Website</h3>
          <p className="project-description portfolio-description">
            My personal website which was built using React, React-dom and pure
            CSS. I built this to tell you a little bit about myself as well as
            show off my portfolio.
          </p>
          <a
            class="project-button"
            href="https://danealexhoffmann.netlify.app/"
          >
            Live Demo
          </a>
          <a
            class="project-button"
            href="https://github.com/danealexhoffmann/Personal-Website-v1.3"
          >
            GitHub
          </a>
        </div>
        <div className="card two">
          <img
            className="screenshot"
            src="./images/daily-planner.jpg"
            alt="Personal Site"
          />
          <h3 className="project-name">Daily Planner</h3>
          <p className="project-description planner-description">
            I built this web-app while learning how to implement Redux inside of
            React. Building this minimal Todo app helped me understand how state
            can be managed effectively using Redux and React-Redux.
          </p>
          <a
            class="project-button"
            href="https://dailyplanner2022.netlify.app/"
          >
            Live Demo
          </a>
          <a
            class="project-button"
            href="https://github.com/danealexhoffmann/Daily-Planner"
          >
            GitHub
          </a>
        </div>
        <div className="card three">
          <img
            className="screenshot"
            src="./images/crypto-dashboard.jpg"
            alt="Personal Site"
          />
          <h3 className="project-name">Crypto Dashboard</h3>
          <p className="project-description dashboard-description">
            I used multiple REST APIs in this web-app to fetch the latest
            information on various crypto currencies, allowing you to make
            coversion calculations, see how a certian currency is peforming in
            the market and see the latest news headlines in the crypto space.
          </p>
          {/* <a
            class="project-button"
            href="https://cryptodailydashboard.netlify.app/"
          >
            Live Demo
          </a> */}
          <a
            class="project-button"
            href="https://github.com/danealexhoffmann/Crypto-Dashboard"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
