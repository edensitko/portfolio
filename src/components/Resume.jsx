import React, { useEffect, useRef } from "react";
import htmlImage from "../assets/sources/html.png";
import cssImg from "../assets/sources/css.png";
import jqueryImg from "../assets/sources/jquery.png";
import nodeImg from "../assets/sources/node.png";
import ReactImage from "../assets/sources/react.png";
import angularImg from "../assets/sources/angular.png";
import jsImg from "../assets/sources/js.png";
import tsImg from "../assets/sources/ts.png";
import phpImg from "../assets/sources/php.png";
import figmaImg from "../assets/images/figma-img.png";
import flutterImg from "../assets/sources/flutter.png";
import firebaseImg from "../assets/sources/firebase.png";
import mysqlImg from "../assets/sources/mysql.png";
import postmanImg from "../assets/sources/postman.png";
import gitImage from "../assets/sources/git.png";




const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* <!-- ====================================== Section Education Experience ===================================== --> */}
      <section className="education-experience" id="resume">
        <div className="row">
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Education.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">full-stack web</p>
                <p className="cursus university">
                 John brice / Jan 2023 - Aug 2023
                </p>
                <p className="cursus">
                Completed a comprehensive Full-Stack Development course, 
                covering front-end and back-end technologies.
                 Gained hands-on experience with frameworks like React and Node.js,
                  database management with MongoDB, and essential skills in API development, version control, and deployment.
                   Developed proficiency in building, testing, 
                and deploying dynamic web applications from scratch
                </p>
              </div>
            </div>
       
            
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Experience.
              </h2>
              <div className="line"></div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">web developer</p>
                <p className="cursus university"> Freelance / Mar 2022 - Oct 2023</p>
                <p className="cursus">
                Developed and maintained websites for clients in various industries, used 
                HTML, CSS, JavaScript, and WordPress to build custom sites and implement design changes .
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor"> website developer</p>
                <p className="cursus university">morevision / Mar 2024 -  Now</p>
                <p className="cursus">
                  build and maintain websites for company clients using WordPress,
                  HTML, CSS, PHP and JavaScript. Collaborate with the developing team to create
                  effective designs  ui/ux . Optimize sites for speed and search engine optimization.
                </p>
              </div>
            </div>
            <div className="education position-relative fade_up">
              <div className="side_circle_ring">
                <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
                </div>
              </div>
              <div className="small_yellow_border_main">
                <p className="bachelor">mobile developer</p>
                <p className="cursus university">freelance / Apr 2024 - Now</p>
                <p className="cursus">
               As a developer i learned mobile development techs such as Flutter , dart tools like Xcode and more ...
               and have been working on a project for a client in the field of sports and fitness.
               the app is launched and available on the app store and google play (meety).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
      
        <div id="progress" ref={progressRef}>
      
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Design Skill ===================================== --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Code Skills.
          </h2>
          <div className="line"></div>
          
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main html flip_up">
            <img src={htmlImage} alt="html-img" />
            <div className="skill-counter-main">
              <p>HTML</p>
            </div>
            
          </div>
          
          <div className="design-skills-img-main css flip_up">
            <img src={cssImg} alt="photoshop-img" />
            <div className="skill-counter-main photoshop-text">
              <p>Css</p>
         
            </div>
          </div>
          <div className="design-skills-img-main jquery flip_up">
            <img src={jqueryImg} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p> jQUERY</p>
            </div>
          </div>

          <div className="design-skills-img-main node flip_up">
            <img src={nodeImg} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>Node.js</p>
            </div>
          </div>
          <div className="design-skills-img-main angular flip_up">
            <img src={angularImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>Angular</p>
            </div>
          </div>
        </div>
      </section>
      <section className="design-skill-section">
        <div className="heading-container">
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main react flip_up">
            <img src={ReactImage} alt="figma-img" />
            <div className="skill-counter-main">
              <p>React</p>
            </div>
          </div>
          <div className="design-skills-img-main js flip_up">
            <img src={jsImg} alt="css-img" />
            <div className="skill-counter-main photoshop-text">
              <p>Javascript</p>
            </div>
            
          </div>
          <div className="design-skills-img-main ts flip_up">
            <img src={tsImg} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p> TypeScript</p>
            </div>
          </div>

          <div className="design-skills-img-main php flip_up">
            <img src={phpImg} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>php</p>
            </div>
          </div>
          <div className="design-skills-img-main flutter flip_up">
            <img src={flutterImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>Flutter</p>
            </div>
          </div>
        </div>
      </section>
      <br/>      <br/>

      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            More Skills.
          </h2>
          <div className="line"></div>
          
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main git flip_up">
            <img src={gitImage} alt="html-img" />
            <div className="skill-counter-main">
              <p>Git/Github</p>
            </div>
            
          </div>
          
          <div className="design-skills-img-main figma flip_up">
            <img src={figmaImg} alt="photoshop-img" />
            <div className="skill-counter-main photoshop-text">
              <p>Figma</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd firebase flip_up">
            <img src={firebaseImg} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p> Firebase</p>
            </div>
          </div>

          <div className="design-skills-img-main sketch sql flip_up">
            <img src={mysqlImg} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>sql</p>
            </div>
          </div>
          <div className="design-skills-img-main invision postman flip_up">
            <img src={postmanImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>postman</p>
            </div>
          </div>
        </div>
      </section>
    
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
 
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
