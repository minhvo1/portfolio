import React from 'react'
import mapper from '../Assets/mapper.PNG'

const Projects = () => {
  return (
    <div name='projects' className='project-section pt-36 pb-20'>
      <div className="flex flex-col justify-center items-center text-center">
          <p className="border-b-4 border-[#ebbe5d] text-5xl font-bold">Projects</p>
          <p className="text-[1.3rem] mt-8 px-5">A list of my most recent projects and works.</p>
        <div className="projects-wrapper flex flex-col justify-center items-center">
          {/* Project 1 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] transition-color ease-in-out duration-200">
            <div className='project-description flex flex-col justify-start items-start w-[35%] pr-10'>
              <p className="text-3xl font-bold md:text-4xl">mapper.</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">NodeJS  /  Express  /  PostgreSQL  /  Sass</p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">mapper. is a map creator that allow users to create their own map with a curated list of markers locations, as well as view maps created by other users!</p>
            </div>
            <div className="project-img">
              <img className="" src={mapper} alt="mapper-img"/>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] transition-color ease-in-out duration-200">
            <div className='project-description flex flex-col justify-start items-start w-[35%] pr-10'>
              <p className="text-3xl font-bold md:text-4xl">mapper.</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">NodeJS  /  Express  /  PostgreSQL  /  Sass</p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">mapper. is a map creator that allow users to create their own map with a curated list of markers locations, as well as view maps created by other users!</p>
            </div>
            <div className="project-img">
              <img className="" src={mapper} alt="mapper-img"/>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project h-[40rem] w-[85%] bg-transparent flex flex-row justify-between items-center px-12 md:px-20 mt-16 hover:bg-[#ebbe5d] transition-color ease-in-out duration-200">
            <div className='project-description flex flex-col justify-start items-start w-[35%] pr-10'>
              <p className="text-3xl font-bold md:text-4xl">mapper.</p>
              <p className="text-[0.8rem] mt-5 italic text-left md:text-[0.9rem]">NodeJS  /  Express  /  PostgreSQL  /  Sass</p>
              <p className="text-[0.9rem] mt-5 text-left md:text-[1rem]">mapper. is a map creator that allow users to create their own map with a curated list of markers locations, as well as view maps created by other users!</p>
            </div>
            <div className="project-img">
              <img className="" src={mapper} alt="mapper-img"/>
            </div>
          </div>           
         
        </div>

      </div>
    </div>
  )
}

export default Projects