import React from 'react'
import Arsenal from './components/Arsenal'
import Opener from './components/Opener'
import ProfileSummary from './components/ProfileSummary'

function App() {
  return (
    <div className='bg-black' >
      <Opener/>
      <ProfileSummary/>
      <Arsenal/>
    </div>
  )
}

export default App