import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

// Navbar Component: Appears at the top of the page.
// Includes navigation arrows, premium and app buttons, and content filter options.
const Navbar = () => {
  // useNavigate hook from react-router-dom for navigation control
  const nav = useNavigate()

  return (
    <>
      {/* Top navigation bar */}
      <div className='w-full flex justify-between items-center font-semibold'>
        
        {/* Navigation arrows (go back / go forward) */}
        <div className='flex items-center gap-2'>
          {/* Back arrow button */}
          <img
            onClick={() => nav(-1)} // Navigate one step backward in history
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_left}
            alt="Go Back"
          />
          {/* Forward arrow button */}
          <img
            onClick={() => nav(1)} // Navigate one step forward in history
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_right}
            alt="Go Forward"
          />
        </div>

        {/* Right-side user action buttons */}
        <div className='flex items-center gap-4'>
          {/* Explore Premium button (hidden on small screens) */}
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
            Explore Premium
          </p>

          {/* Install App button */}
          <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>
            Install App
          </p>

          {/* Profile / User Icon (currently hardcoded as "V") */}
          <p className='bg-orange-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
            V
          </p>
        </div>
      </div>

      {/* Filter buttons (below navbar): toggle between content types */}
      <div className='flex items-center gap-2 mt-4'>
        {/* Active filter */}
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>
          All
        </p>
        {/* Other filters */}
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>
          Music
        </p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>
          Podcasts
        </p>
      </div>
    </>
  )
}

export default Navbar
