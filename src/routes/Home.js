import React from "react";
import SocialLinks from "../components/SocialLinks";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-title-container">
          <h1 className="home-title">
            Dane Alex
            <br />
            Hoffmann.
          </h1>
        </div>
        <h2 className="home-subtext">software developer & visual designer</h2>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Home;
