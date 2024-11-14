import React from "react";
import CloseSvg from "../assets/images/svg/close.svg.svg";

const Project1 = ({ isVisible, onClose, projectData }) => {
  if (!projectData) return null;

  return (
    <div className={`popup-wrap ${isVisible ? "visible" : ""}`}>
      <div className="popup-box transform-in">
        <img className="pop-up-img1" src={projectData.image} alt="pop-up-img" />
        <a className="close-btn popup-close" href="#" onClick={onClose}>
          <img src={CloseSvg} alt="Close icon" />
        </a>

        <p className="Ornare">{projectData.description}</p>

        <a href={projectData.link} className="btn-hover" target="_blank" onClick={onClose}>
          View Live
          <svg className="btn-arrow-right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="..." />
          </svg>
        </a>
        <br/>
        <a href={projectData.codeLink} className="btn-hover2" target="_blank" onClick={onClose}>
          View Code
          <svg className="btn-arrow-right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="..." />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Project1;
