import { React, useEffect } from "react";
import mapper from "../Assets/mapper.PNG";
import portfolioWebsite from "../Assets/website-portrait.png";
import render from "../Assets/render.png";
import scheduler from "../Assets/scheduler.png";
import folio from "../Assets/folio.PNG";
import gen from "../Assets/gen.PNG";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div name="projects" className="project-section">
      <div className="wave-container wave-container-projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f5f1e7"
            fillOpacity="1"
            d="M0,256L40,240C80,224,160,192,240,154.7C320,117,400,75,480,74.7C560,75,640,117,720,165.3C800,213,880,267,960,288C1040,309,1120,299,1200,266.7C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center text-center pt-36 pb-20"
      >
        <p className="border-b-4 border-[#ebbe5d] text-5xl font-bold">
          Projects
        </p>
        <p className="text-[1.3rem] mt-8 px-5">
          A list of my most recent projects and works.
        </p>
        <div className="projects-wrapper flex flex-col justify-center items-center">
          {/* Project 1 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div
              data-aos="fade-up"
              className="project-description flex flex-col justify-start items-start w-[35%] pr-10"
            >
              <p className="text-3xl font-bold md:text-4xl text-left">Generative Archive</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                Vue / Tailwind
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                A web app containing a collection of generative art algorithms, drawn using the p5.js library.
                <br></br>
                <br></br>
                Users have the options to regenerate a new output and/or save the desired output from the algorithm.
                <br></br>
                <br></br>
              </p>
              <div className="project-links flex flex-row">
                <a
                  href="https://generative-archive.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl w-6 mr-3"
                >
                  <TfiWorld />
                </a>
                
                <a
                  href="https://github.com/minhvo1/archive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl w-6"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div data-aos="fade-up" className="project-img">
              <img className="" src={gen} alt="gen-img" />
            </div>
          </div>
          {/* Project 1 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div
              data-aos="fade-up"
              className="project-description flex flex-col justify-start items-start w-[35%] pr-10"
            >
              <p className="text-3xl font-bold md:text-4xl text-left">Folio</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                NodeJS / React / Express / PostgreSQL
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                A stock trading app that allows users to buy, sell assets and
                track their performances using a real time API.
                <br></br>
                <br></br>
                Has a competition feature that allows users to compete in
                trading against each other and win rewards.
                <br></br>
                <br></br>
              </p>
              <a
                href="https://github.com/minhvo1/final-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl w-6"
              >
                <FaGithub />
              </a>
            </div>
            <div data-aos="fade-up" className="project-img">
              <img className="" src={folio} alt="folio-img" />
            </div>
          </div>
          {/* Project 2 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div
              data-aos="fade-up"
              className="project-description flex flex-col justify-start items-start w-[35%] pr-10"
            >
              <p className="text-3xl font-bold md:text-4xl text-left">
                mapper.
              </p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                NodeJS / Express / PostgreSQL / Sass
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                A full-stack map app that allows users to create their own maps
                with custom markers and view other users’ maps.
                <br></br>
                <br></br>
                Features include full Leaflet map, user login/registration,
                add/remove maps, favorite maps and a user profile page.
                <br></br>
                <br></br>
              </p>
              <a
                href="https://github.com/minhvo1/mapper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl w-6"
              >
                <FaGithub />
              </a>
            </div>
            <div data-aos="fade-up" className="project-img">
              <img className="" src={mapper} alt="mapper-img" />
            </div>
          </div>
          {/* Project 2 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div
              data-aos="fade-up"
              className="project-description flex flex-col justify-start items-start w-[35%] pr-10"
            >
              <p className="text-3xl font-bold md:text-4xl text-left">
                Interview Scheduler
              </p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                React / Express / PostgreSQL
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                A React application that allows users to book and cancel
                appointments.
                <br></br>
                <br></br>
                Implemented unit and integration testing with Jest, Cypress and
                Storybook.
                <br></br>
                <br></br>
              </p>
              <a
                href="https://github.com/minhvo1/scheduler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl w-6"
              >
                <FaGithub />
              </a>
            </div>
            <div data-aos="fade-up" className="project-img">
              <img className="" src={scheduler} alt="scheduler-img" />
            </div>
          </div>
          {/* Project 3 */}
          <div className="project project-website h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              className="project-description flex flex-col justify-start items-start w-[35%] pr-10"
            >
              <p className="text-3xl font-bold md:text-4xl text-left">
                Portfolio Website
              </p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                React / Tailwind
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                A mobile responsive portfolio website built from scratch.
                <br></br>
                <br></br>
              </p>
              <a
                href="https://github.com/minhvo1/portfolio-website/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl w-6"
              >
                <FaGithub />
              </a>
            </div>
            <div data-aos="fade-up" className="project-img">
              <img
                className="project-img-website project-img-website-fit"
                src={portfolioWebsite}
                alt="portfolio-website-img"
              />
            </div>
          </div>

          {/* Project 4 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div
              data-aos="fade-up"
              data-aos-offset="50"
              className="project-description flex flex-col justify-start items-start w-[35%] pr-10"
            >
              <p className="text-3xl font-bold md:text-4xl text-left">
                Voxel Designer
              </p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]"></p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                Designed and modelled 3D voxel-styled assets for various clients
                including The Sandbox Game and RTFKT Studios (Nike).
              </p>
            </div>
            <div data-aos="fade-up" className="project-img">
              <img
                className="project-img-website"
                src={render}
                alt="render-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wave-container wave-container-projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f5f1e7"
            fillOpacity="1"
            d="M0,256L60,256C120,256,240,256,360,224C480,192,600,128,720,96C840,64,960,64,1080,85.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Projects;
