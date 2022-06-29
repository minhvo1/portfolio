import React from 'react'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/js.png'
import react from '../Assets/react.png'
import python from '../Assets/python.png'
import postgre from '../Assets/postgre.png'
import ruby from '../Assets/ruby.png'
import tailwind from '../Assets/tailwind.png'


const Skills = () => {
  return (
    <div name="skills" className="skills-section pt-32 pb-36 bg-[#fdfcf9]">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="border-b-4 border-[#ebbe5d] text-5xl font-bold">Skills</p>
        <p className="text-[1.3rem] mt-8 px-3">
          These are the technologies that I have worked with.
        </p>
        <div className="skills-row-wrapper flex flex-col justify-center items-center">
          {/* First row */}
          <div className="skills-row flex flex-row mt-14 justify-between w-[60rem]">
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={html} alt="html-icon" />
              <p className="pt-3 text-sm">HTML</p>
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={css} alt="html-icon" />
              <p className="pt-3 text-sm">CSS</p>
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={js} alt="html-icon" />
              <p className="pt-3 text-sm">JavaScript</p>
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={react} alt="html-icon" />
              <p className="pt-3 text-sm">React</p>
            </div>
          </div>

          {/* Second row */}
          <div className="skills-row flex flex-row mt-14 justify-between w-[60rem]">
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={tailwind} alt="html-icon" />
              <p className="pt-3 text-sm">Tailwind</p>
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={python} alt="html-icon" />
              <p className="pt-3 text-sm">Python</p>
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={ruby} alt="html-icon" />
              <p className="pt-3 text-sm">Ruby</p>
            </div>
            <div className="flex flex-col justify-center items-center px-4 py-5 hover:bg-[#ebbe5d] hover:font-bold hover:scale-110 hover:shadow-lg transition-color ease-in-out duration-200">
              <img className="w-32 mx-auto" src={postgre} alt="html-icon" />
              <p className="pt-3 text-sm">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills