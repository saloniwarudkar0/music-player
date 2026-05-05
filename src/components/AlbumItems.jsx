import React from 'react'
import { useNavigate } from 'react-router-dom'

// Functional component to display a single album item
const AlbumItems = (props) => {

    // useNavigate hook gives access to navigation function
    const nav = useNavigate()

    return (
        // Container div that navigates to the album page when clicked
        <div 
            onClick={()=>nav(`/album/${props.id}`)}  // Navigate to album details page using album id
            className='min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'  // Styling using Tailwind CSS
        >
            {/* Album cover image */}
            <img className='rounded' src={props.image} alt="" />
            
            {/* Album name */}
            <p className='font-bold mt-2 mb-1'>{props.name}</p>
            
            {/* Album description */}
            <p className='text-slate-200 text-sm'>{props.desc}</p>
        </div>
    )
}

export default AlbumItems  // Export component for use in other parts of the app
