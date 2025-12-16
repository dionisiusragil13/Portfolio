import React, {useEffect} from 'react'
import Arsenal from './components/Arsenal'
import Opener from './components/Opener'
import ProfileSummary from './components/ProfileSummary'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Outro from './components/Outro'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false, 
        offset: 100,
        easing:"ease-in-out",
        anchorPlacement:"center-center" 
      });
    }, []);
  return (
    <div className='bg-black' >
      <Opener/>
      <ProfileSummary/>
      <Expertise/>
      <Arsenal/>
      <Experience/>
      <Projects/>
      <Outro/>
    </div>
  )
}

export default App