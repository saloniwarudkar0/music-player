import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

// DisplayAlbum Component: Shows the selected album's details and its song list
const DisplayAlbum = () => {

  // useParams() hook extracts URL parameters (album ID in this case)
  const { id } = useParams()

  // Get the album details from albumsData using the album ID
  const albumDatalocal = albumsData[id]

  // Access playWithId function from PlayerContext to control music playback
  const { playWithId } = useContext(PlayerContext)

  return (
    <>
      {/* Navbar at the top of the album display */}
      <Navbar />

      {/* Album header section */}
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        {/* Album cover image */}
        <img className='w-48 rounded' src={albumDatalocal.image} alt={albumDatalocal.name} />

        {/* Album info section */}
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-4xl font-bold mb-4 md:text-6xl'>
            {albumDatalocal.name}
          </h2>
          <h4>{albumDatalocal.desc}</h4>

          {/* Meta info about playlist */}
          <p className='mt-2'>
            <img className='inline-block w-5' src={assets.spotify_logo} alt="Spotify logo" />
            <b> Spotify Clone</b> 33,62,251 likes | 
            <b> 50 Songs </b>| about 2hr 35 min
          </p>
        </div>
      </div>

      {/* Songs list header */}
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden md:block'>Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="Clock icon" />
      </div>

      {/* Divider line */}
      <hr />

      {/* Songs list */}
      {
        songsData.map((item, index) => (
          <div
            key={index}
            onClick={() => playWithId(item.id)} // Play the selected song on click
            className='grid grid-cols-3 sm:grid-cols-4 gap-3 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'
          >
            {/* Song title and image */}
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
              <img className='inline w-10 mr-5' src={item.image} alt={item.name} />
              {item.name}
            </p>

            {/* Album name */}
            <p className='text-[15px]'>{albumDatalocal.name}</p>

            {/* Date added (currently hardcoded) */}
            <p className='text-[15px]'>3 days ago</p>

            {/* Song duration */}
            <p className='text-[15px] text-center'>{item.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum
