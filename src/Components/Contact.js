import {React, useEffect} from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
   }, []);
  return (
    <div name="contact" className="contact-section pt-20 pb-36 bg-[#fdfcf9]">
      <div data-aos="fade-up" className="flex flex-col justify-center items-center">
        <p className="border-b-4 border-[#ebbe5d] text-5xl font-bold">
          Contact
        </p>
        <div className="contact-wrapper w-[80%] flex flex-row justify-between pt-24">
          <div className="send-message-header flex flex-col items-start w-[75%]">
            <p className="text-[1.5rem]">Send me a message!</p>
            <form action="https://getform.io/f/be9794c6-05f2-41db-8e86-70262776d100" method="POST" className="flex flex-col w-[70%] pt-8">
              <div className="flex flex-row justify-between">
                <input
                  className="w-[36%] p-2 my-3 bg-transparent outline-none border-b-2 border-[#2b2b2b] focus:bg-[#ebbe5d] focus:placeholder-transparent transition-all ease-in-out duration-300"
                  name="name"
                  type="text"
                  placeholder="Name"
                ></input>
                <input
                  className="w-[57%] p-2 my-3 bg-transparent border-b-2 outline-none border-[#2b2b2b] focus:bg-[#ebbe5d] focus:placeholder-transparent transition-all ease-in-out duration-300"
                  name="email"
                  type="email"
                  placeholder="Email"
                ></input>
              </div>
              <textarea
                className="p-2 my-8 bg-transparent border-b-2 outline-none border-[#2b2b2b] focus:bg-[#ebbe5d] focus:placeholder-transparent transition-all ease-in-out duration-300"
                name="message"
                rows="4"
                placeholder="Message"
              ></textarea>
              <button className="text-[#353535] text-lg border-2 border-[#353535] w-[7rem] rounded-md px-4 py-3 mt-8 flex items-center hover:bg-[#ebbe5d] hover:border-[#ebbe5d] hover:font-bold transition-color ease-in-out duration-150">
                Send&nbsp;&nbsp;&nbsp;<BsArrowRight/>
              </button>
            </form>
          </div>
          <div className="links-header flex flex-col items-start w-[30%]">
            <p className="text-[1.5rem]">Links</p>
            <div className="flex flex-row text-4xl justify-between w-[10.5rem] pt-10">
              <a
                href="https://www.linkedin.com/in/minh-vo-/"
                target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#e4af3c] transition-all ease-in-out duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/minhvo1"
                target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#e4af3c] transition-all ease-in-out duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="mailto: minhvo199@gmail.com"
                target="_blank" rel="noopener noreferrer"
                className="cursor-pointer hover:text-[#e4af3c] transition-all ease-in-out duration-200"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact