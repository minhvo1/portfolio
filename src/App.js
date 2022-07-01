import {React, useEffect, useState, Fragment } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <div className="App flex flex-col justify-center">
      {
        loading ?
          <div className="fixed top-[50%] left-[50%] mt-[-33px] ml-[-33px]">
            <ClipLoader size={70} color={"#ebbe5d"} loading={loading}/>
          </div>
        :
        <Fragment>
          <Navbar/>
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </Fragment>
      }
      
    </div>
  );
}

export default App;
