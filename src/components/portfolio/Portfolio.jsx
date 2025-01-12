import "./portfolio.css";

import IMG1 from "../../assets/CURE.png";
import IMG2 from "../../assets/Go.png";
import IMG3 from "../../assets/portfolio.png";
import IMG4 from "../../assets/zkcreate.png";
import IMG5 from "../../assets/WebInspect.png";
import IMG6 from "../../assets/fakenews.jpeg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "CURE",
      img: IMG1,
      description:
        "CURE is a decentralized platform for healthcare records management.",
      technologies: "Tezos | React Js| Node Js | IPFS | AES & RSA ",
      link: "https://cure-centralized-user-registry-for-experts.vercel.app/",
      github: "https://github.com/sugashsm/CURE---Centralized-User-Registry-for-Experts",
    },
    {
      id: 2,
      title: "ZKCreate",
      img: IMG4,
      description:
        "ZKCreate is a decentralized social media platform integrated with Zero Knowledge Proofs",
      technologies: "React Js | Node Js | IPFS | ZK-SNARKs",
      link: "https://github.com/sugashsm/ZKCreate/tree/master",
      github: "https://github.com/sugashsm/ZKCreate",
    },
    {
      id: 3,
      title: "Go-Through",
      img: IMG2,
      description: "Webapplication Security Scanner Tool checks for SQL Injection, XSS, CSRF ",
      technologies: "CLI | SQL Injection | XSS | CSRF",
      link: "https://github.com/sugashsm/Go-Thr0ugh",
      github: "https://github.com/sugashsm/Go-Thr0ugh",
    },
    {
      id: 4,
      title: "React-Portfolio",
      img: IMG3,
      description:
        "A portfolio website built with React.js",
      technologies: "Html | CSS | React Js",
      link: "https://sugash-portfolio.vercel.app/",
      github: "https://github.com/sugashsm/Sugash-Portfolio",
    },
    {
      id: 5,
      title: "WebInspect",
      img: IMG5,
      description:
        "WebInspect is a  CLI tool for extracting and analyzing browser artifacts like history, downloads with filtering option.",
      technologies: "CLI | Python",
      link:"https://github.com/sugashsm/webinspect",
      github: "https://github.com/sugashsm/webinspect",
    },
    {
      id: 6,
      title: "Fake News Classifer",
      img: IMG6,
      description:
        "A machine learning project that uses Naive Bayes and Passive Agreesive Classifer to detect and classify fake news .",
      technologies: "ML | NLP | Algorithms",
      link: "https://github.com/sugashsm/Fake-News-Classifier",
      github: "https://github.com/sugashsm/Fake-News-Classifier",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>

              {/* Conditionally render the "Live Demo" button */}
              {!(pro.id === 2 || pro.id === 3 || pro.id === 5 || pro.id === 6) && (  // Remove Live Demo for ZKCreate, Go-Through, WebInspect, and Fake News
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


export default Portfolio;

