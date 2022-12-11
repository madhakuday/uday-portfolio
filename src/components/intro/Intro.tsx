import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
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
              alt="uday..."
            />
          </div>
        </div>
        <div className="about__content">
          <p>
            {/* I’ve spent the last several months in a remote environment, working
            with HTML, CSS, JavaScript, building everything from landing pages
            to APIs. My experience as a teacher in an international school
            helped me collaborate with fellow developers from all over the
            world. Additionally, working with kids isn’t an easy task, however,
            it has helped me become efficient, productive, and fast even in a
            very stressful environment, which is an important skill in the tech
            industry. */}
            {/* Hello folks , my name is Uday and i am full stack devloper with 1
            year of expiraince <br /> and i am focus on MERN stack devlopment ,
            and i am also fmailery with some of how to make good landing page or
            a fuill page , i am also make admin dashboard's , aprt from that i
            wotrk with sevarail libaray or fram workd likes ( ant-d , mui ,
            svelte , redux etc...) */}
            Hello folks , <br /> my name is Uday and i am full stack devloper
            with 1 year of experience <br /> and i am focus on MERN stack
            devlopment , and i am also familiar with how to make landing pages
            or a full page site with good and efficient code , i am also makes
            admin dashboard's , apart from that i work with several libaray or
            frameworks like ( ant-d , mui , svelte , redux etc...) , <br />
            if you have interest to work with me you can contact me
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          <br />
          <br />
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
        </div>
      </div>
    </section>
  );
};

export default Intro;
