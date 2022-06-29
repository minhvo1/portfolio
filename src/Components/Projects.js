import React from 'react'
import mapper from '../Assets/mapper.PNG'

const Projects = () => {
  return (
    <div name="projects" className="project-section">
      <div class="wave-container wave-container-projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f5f1e7"
            fill-opacity="1"
            d="M0,256L40,240C80,224,160,192,240,154.7C320,117,400,75,480,74.7C560,75,640,117,720,165.3C800,213,880,267,960,288C1040,309,1120,299,1200,266.7C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center text-center pt-36 pb-20">
        <p className="border-b-4 border-[#ebbe5d] text-5xl font-bold">
          Projects
        </p>
        <p className="text-[1.3rem] mt-8 px-5">
          A list of my most recent projects and works.
        </p>
        <div className="projects-wrapper flex flex-col justify-center items-center">
          {/* Project 1 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div className="project-description flex flex-col justify-start items-start w-[35%] pr-10">
              <p className="text-3xl font-bold md:text-4xl">mapper.</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                NodeJS / Express / PostgreSQL / Sass
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                mapper. is a map creator that allow users to create their own
                map with a curated list of markers locations, as well as view
                maps created by other users!
              </p>
            </div>
            <div className="project-img">
              <img className="" src={mapper} alt="mapper-img" />
            </div>
          </div>
          {/* Project 2 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div className="project-description flex flex-col justify-start items-start w-[35%] pr-10">
              <p className="text-3xl font-bold md:text-4xl">mapper.</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                NodeJS / Express / PostgreSQL / Sass
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                mapper. is a map creator that allow users to create their own
                map with a curated list of markers locations, as well as view
                maps created by other users!
              </p>
            </div>
            <div className="project-img">
              <img className="" src={mapper} alt="mapper-img" />
            </div>
          </div>

          {/* Project 3 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] hover:shadow-md transition-color ease-in-out duration-300">
            <div className="project-description flex flex-col justify-start items-start w-[35%] pr-10">
              <p className="text-3xl font-bold md:text-4xl">mapper.</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">
                NodeJS / Express / PostgreSQL / Sass
              </p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">
                mapper. is a map creator that allow users to create their own
                map with a curated list of markers locations, as well as view
                maps created by other users!
              </p>
            </div>
            <div className="project-img">
              <img className="" src={mapper} alt="mapper-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="wave-container wave-container-projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f5f1e7"
            fill-opacity="1"
            d="M0,256L60,256C120,256,240,256,360,224C480,192,600,128,720,96C840,64,960,64,1080,85.3C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Projects