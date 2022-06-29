import React from 'react'
import Dev from  '../Assets/dev.svg'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <main>
      <div name='home' className="home bg-transparent flex flex-row content-center justify-between pt-32 pb-40">
        <div className="intro pl-28 pt-10 flex flex-col content-center h-[75%] w-[45%]">
          <p className="greetings text-[#353535] text-7xl lg:text-8xl">Hi, I'm <b className="text-[#000000] text-8xl lg:text-9xl">Minh.</b></p>
          <p className='description pt-8 text-2xl lg:text-2xl'> I am a <b>full-stack web developer</b> based in Calgary, Canada.</p>
          <div className="pt-6">
            <button className="text-[#353535] text-lg border-2 border-[#353535] rounded-md px-6 py-3 my-2 flex items-center  hover:bg-[#ebbe5d] hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
            <Link to="projects" spy={true} smooth={true} duration={500}>
              See My Projects
            </Link>
            </button>
          </div>
        </div>
        <div className>
          <img className="dev-img" src={Dev} alt="dev-svg"/>
        </div>
      </div>
    </main>
  )
}

export default Home