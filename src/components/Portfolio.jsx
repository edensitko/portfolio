import React, { useState, useEffect } from "react";
import ContentSvg from "../assets/images/svg/content-svg.svg";
import ContentImg from "../assets/images/content-img.png";
import ProjectImg2 from "../assets/sources/cr.png";
import ProjectImg1 from "../assets/sources/chs.png";
import ProjectImg6 from "../assets/sources/motiv.png";

import ProjectImg3 from "../assets/sources/ib.png";
import ProjectImg4 from "../assets/sources/vac.png";
import ProjectImg5 from "../assets/sources/ft.png";
import { Link } from "react-router-dom";
import Project1 from "./project1";

const Portfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handlePopupOpen = (projectData) => {
    setSelectedProject(projectData);
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setIsPopupVisible(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Self shef - recipe app",
      description: "Cooking recipes app is a React-based web project where users can view recipes, add, search, and delete recipes.",
      image: ProjectImg1,
      codeLink: "https://github.com/edensitko/selfshef",
      link: "https://edensitko.github.io/selfshef/",
    },
    {
      title: "Crypto API",
      description: "Crypto Fetch API is a jQuery and Ajax-powered project that retrieves real-time cryptocurrency data.",
      image: ProjectImg2,
      codeLink: "https://github.com/edensitko/crypto-project",
      link: "https://edensitko.github.io/crypto-project/",
    },
    {
      title: "iBalance money management",
      description: "Tracking balance of transactions, every user can make list of his transactions and see his reports, incomes and expenses, day and month and more! Try now...",
      image: ProjectImg3,
      codeLink: "https://github.com/edensitko/iBalance",
      link: "https://i-balance-uj83.vercel.app/",
    },
    {
      title: "Vacations Site ",
      description: "A web app that allows users to search for vacation and add them to favorites. Built with Angular, Node.js, and SQL.",
      image: ProjectImg4,
      codeLink: "https://github.com/edensitko/edenSite",
      link: "https://edensitko.github.io/edenSite/",
    },
    {
      title: "Football Memory Game",
      description: "Memory React Game is a React-based web project where players flip cards to find matching pairs, enhancing memory skills.",
      image: ProjectImg5,
      link: "https://edensitko.github.io/footballmemory/",
      codeLink: "https://github.com/edensitko/footballmemory",
    },
    {
      title: "Motiv - fitness app for Schools",
      description: "flutter app live in the app store, for schools to manage their students and teachers, and to manage the fitness classes.",
      image: ProjectImg6,
      link: "https://edensitko.github.io/footballmemory/",
      codeLink: "https://github.com/edensitko/footballmemory",
    },
  ];

  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">Portfolio.</h2>
          <div className="line"></div>
        </div>
        <div className="portfolios-group-main">
          {projects.map((project, index) => (
            <div key={index} className="project-card zoom_in">
              <div className="image-container" onClick={() => handlePopupOpen(project)}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="btn-read-more" onClick={() => handlePopupOpen(project)}>
                 About the project
                </button>
              </div>
            </div>
          ))}
        </div>

      
      </section>

      {selectedProject && (
        <Project1
          isVisible={isPopupVisible}
          onClose={handlePopupClose}
          projectData={selectedProject}
        />
      )}
    </>
  );
};

export default Portfolio;
