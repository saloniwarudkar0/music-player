import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItems = (props) => {

  // Get the playWithId function from PlayerContext to play a specific song
  const {playWithId} = useContext(PlayerContext);

  return (
    // Main container for a song item, clickable to play the song
    <div onClick={()=>playWithId(props.id)} className='max-w-[200px0 min-h-[100px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        
        {/* Song cover image */}
        <img className='rounded min-w-[155px] max-h-[189px]' src={props.image} alt="" />
        
        {/* Song name */}
        <p className='font-bold mt-2 mb-1'>{props.name}</p>
        
        {/* Song description */}
        <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default SongItems // Export the SongItems component
