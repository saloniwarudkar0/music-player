import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItems from "./AlbumItems";
import SongItems from "./SongItems";

// DisplayHome Component: Responsible for rendering the homepage of the Spotify clone,
// showing playlists (albums) and recently played songs.
const DisplayHome = () => {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Section: User's Top Playlists */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Your Top Playlist</h1>

        {/* Horizontal scrollable list of album cards */}
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItems
              key={index}           // Unique key for React list rendering
              name={item.name}      // Album name
              desc={item.desc}      // Album description
              id={item.id}          // Album ID used for navigation
              image={item.image}    // Album cover image
            />
          ))}
        </div>
      </div>

      {/* Section: Recently Played Songs */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Recently Played</h1>

        {/* Horizontal scrollable list of songs */}
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItems
              key={index}           // Unique key for React list rendering
              name={item.name}      // Song name
              desc={item.desc}      // Song description
              id={item.id}          // Song ID (for playback or navigation)
              image={item.image}    // Song thumbnail image
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;

