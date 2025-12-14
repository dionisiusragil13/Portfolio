import React from 'react'
import Arsenal from './components/Arsenal'
import Opener from './components/Opener'
import ProfileSummary from './components/ProfileSummary'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <div className='bg-black' >
      <Opener/>
      <ProfileSummary/>
      <Expertise/>
      <Arsenal/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App