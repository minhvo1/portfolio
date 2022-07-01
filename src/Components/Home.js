import {React, useEffect} from 'react'
import Dev from  '../Assets/dev.svg'
import { Link } from 'react-scroll'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
   }, []);
  return (
    <main>
      <div
        data-aos="fade-in"
        name="home"
        className="home bg-transparent flex flex-row content-center justify-between pt-40 pb-40"
      >
        <div className="intro pl-28 pt-10 flex flex-col content-center h-[75%] w-[45%]">
          <p className="greetings text-[#353535] text-7xl lg:text-8xl">
            Hi, I'm <b className="text-[#000000] text-8xl lg:text-9xl">Minh<span className="text-[#c29533] font-extrabold">.</span></b>
          </p>
          <p className="description pt-8 text-2xl lg:text-2xl">
            {" "}
            I am a <b>Full-Stack Software Developer</b> based in Calgary, Canada.
          </p>
          <div className="hidden pt-6 sm:block">
            <Link to="projects" spy={true} smooth={true} offset={480} duration={1000}>
              <button className="text-[#353535] text-lg border-2 border-[#353535] rounded-md px-6 py-3 my-2 flex items-center  hover:bg-[#ebbe5d] hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
                See My Projects
              </button>
            </Link>
          </div>
          <div className=" block pt-6 sm:hidden">
            <Link to="projects" spy={true} smooth={true} offset={210} duration={1000}>
              <button className="text-[#353535] text-lg border-2 border-[#353535] rounded-md px-6 py-3 my-2 flex items-center  hover:bg-[#ebbe5d] hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
                See My Projects
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img className="dev-img" src={Dev} alt="dev-svg" />
        </div>
      </div>
      <div className=" wave-container wave-container-home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f5f1e7"
            fillOpacity="1"
            d="M0,32L34.3,69.3C68.6,107,137,181,206,208C274.3,235,343,213,411,176C480,139,549,85,617,80C685.7,75,754,117,823,154.7C891.4,192,960,224,1029,234.7C1097.1,245,1166,235,1234,224C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
    </main>
  );
}

export default Home