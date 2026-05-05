import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  // Destructure necessary state and functions from PlayerContext
  const { 
    seekBar,       // Reference to the progress bar fill element
    seekBg,        // Reference to the progress bar background element
    play,          // Function to play the current track
    pause,         // Function to pause the current track
    playStatus,    // Boolean indicating if a track is currently playing
    track,         // Object containing current track information
    time,          // Object containing currentTime and totalTime of track
    after,         // Function to skip to the next track
    before,        // Function to go back to the previous track
    seekBgClick    // Function to handle clicks on the progress bar
  } = useContext(PlayerContext);

  return (
    // Main container for the player
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      
      {/* Left section: Track image and basic info (hidden on smaller screens) */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Track image */}
        <img className="w-12" src={track.image} alt="" />
        <div>
          {/* Track name */}
          <p>{track.name}</p>
          {/* Shortened track description */}
          <p>{track.desc.slice(0, 16) + "..."}</p>
        </div>
      </div>

      {/* Center section: Playback controls and progress bar */}
      <div className="flex flex-col items-center gap-1 m-auto">
        
        {/* Playback buttons: Shuffle, Previous, Play/Pause, Next, Loop */}
        <div className="flex gap-4">
          {/* Shuffle button */}
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          {/* Previous track button */}
          <img onClick={before} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />

          {/* Conditional rendering of Play or Pause button */}
          {playStatus ? (
            // Pause button when playing
            <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" />
          ) : (
            // Play button when paused
            <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
          )}

          {/* Next track button */}
          <img onClick={after} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          {/* Loop button */}
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>

        {/* Progress bar section with current and total track time */}
        <div className="flex items-center gap-5">
          {/* Current playback time */}
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          {/* Progress bar container */}
          <div ref={seekBg} onClick={seekBgClick} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            {/* Progress bar fill */}
            <hr ref={seekBar} className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          {/* Total track time */}
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      {/* Right section: Extra controls, visible only on large screens */}
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        {/* Play icon (small) */}
        <img className="w-4" src={assets.play_icon} alt="" />
        {/* Microphone icon */}
        <img className="w-4" src={assets.mic_icon} alt="" />
        {/* Queue icon */}
        <img className="w-4" src={assets.queue_icon} alt="" />
        {/* Speaker icon */}
        <img className="w-4" src={assets.speaker_icon} alt="" />
        {/* Volume icon */}
        <img className="w-4" src={assets.volume_icon} alt="" />
        {/* Volume bar */}
        <div className="w-20 bg-slate-50 h-1 rounded"></div>
        {/* Mini player icon */}
        <img className="w-4" src={assets.mini_player_icon} alt="" />
        {/* Zoom icon */}
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};

export default Player; // Export Player component
