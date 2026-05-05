import React from 'react'
import background from '../assets/background-intro.mp4'

const Opening = () => {
  return (
    // Container that takes full screen height, dark background, and centers its content
    <div className='h-screen bg-[#121212] flex items-center justify-center'>

        {/* Video element for background intro with 75% width, cover object-fit, blend mode, autoplay, loop, and muted */}
        <video 
            className='w-[75%] object-cover mix-blend-screen' 
            src={background} 
            preload='auto' 
            autoPlay 
            loop 
            muted
        ></video>
    </div>
  )
}

export default Opening // Export Opening component
