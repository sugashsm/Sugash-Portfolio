import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.jpg'

// import ME from '../../assets/Sugash Srimari Rajendran image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Interests</h5>
              <small> Cyber Security | Blockchain | Web Development | AI/ML</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Achievements</h5>
              <small>Won the 1st prize in the "CryptoSheild Hackathon" National Level Hackathon</small>
            </article>
          </div>
          <p>
          As a passionate and dedicated Computer Science Engineering student specializing in Cyber Security, I am on a mission to leverage technology to solve real-world problems. With a diverse skill set encompassing programming, web technologies, and data analysis, I have successfully completed multiple projects that demonstrate my technical prowess and innovative thinking.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
