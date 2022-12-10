import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/uday2.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://media.istockphoto.com/id/1212702108/photo/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-white-background-happy.jpg?s=612x612&w=0&k=20&c=HD-AH8Za_W5sqOdscMwomuPS87sHA3EF4-ynusKy2y0="
              // src={ME}
            />
          </div>
        </div>
        <div className="about__content">
          <p>
            I’ve spent the last several months in a remote environment, working
            with HTML, CSS, JavaScript, building everything from landing pages
            to APIs. My experience as a teacher in an international school
            helped me collaborate with fellow developers from all over the
            world. Additionally, working with kids isn’t an easy task, however,
            it has helped me become efficient, productive, and fast even in a
            very stressful environment, which is an important skill in the tech
            industry.
          </p>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>

          {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
