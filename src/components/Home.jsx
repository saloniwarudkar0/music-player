import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import Display from './Display'
import { PlayerContext } from '../context/PlayerContext'

const Home = () => {

  // Access audioRef and track from PlayerContext
  const {audioRef,track}= useContext(PlayerContext)

  return (
    // Main container
    <div className='h-screen bg-black'>
        {/* Top section containing sidebar and display */}
        <div className='h-[90%] flex'>
            {/* Sidebar component */}
            <Sidebar/>
            {/* Display component */}
            <Display/>
        </div>
        {/* Player component at the bottom */}
        <Player/>
        {/* Audio element to play selected track */}
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default Home

