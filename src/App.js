import {React,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Aos from 'aos';
import 'aos/dist/aos.css'


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
   }, [])
  return (
    <div className="App flex flex-col justify-center">
      <Navbar/>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
