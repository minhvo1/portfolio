import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-scroll'


const Navbar = () => {
  const ref = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {

      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {

      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isMenuOpen])
  
  return (
    <div className="nav-bar w-full h-[6rem] flex justify-between items-center px-10 bg-[#f5f1e7]">
      <h1 className="pl-10 text-4xl font-bold">Minh</h1>

      <ul className="hidden md:flex md:text-[1.3rem]">
        <li className="border-transparent border-b-2 hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-transparent border-b-2 hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="border-transparent border-b-2 hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
          <Link to="projects" spy={true} offset={480} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="border-transparent border-b-2 hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div ref={ref} className='wrapper md:hidden'>
        <div className="cursor-pointer text-[1.3rem]" onClick={() => setIsMenuOpen(oldState => !oldState)}>
          <FaBars />
        </div>

        {/*Mobile*/}
        <ul className={!isMenuOpen? "hidden": "dropdown-menu-mobile absolute text-right top-14 right-0 rounded-md bg-transparent text-black text-[1.3rem] py-1 transition-opacity"}>
          <li className="px-1 hover:bg-[#ebbe5d] transition-color ease-in-out duration-150">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="px-1 hover:bg-[#ebbe5d] transition-color ease-in-out duration-150">
            <Link to="skills" spy={true} smooth={true} offset={100} duration={500}>
              Skills
            </Link>
          </li>
          <li className="px-1 hover:bg-[#ebbe5d] transition-color ease-in-out duration-150">
            <Link to="projects" spy={true} smooth={true} offset={200} duration={500}>
              Projects
            </Link>
          </li>
          <li className="px-1 hover:bg-[#ebbe5d] transition-color ease-in-out duration-150">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
