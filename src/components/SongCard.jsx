
 import { useState } from "react";
 import { useDispatch } from "react-redux";
import img from "../assets/spotify.png"
 import { Link } from "react-router-dom";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";


const SongCard =({song,activeSong,isPlaying,i,ids ,data})=>{
 const dispatch = useDispatch();
 
 
 const handlePauseClick =()=>{
  dispatch(playPause(false))
 } 
 const handlePlayClick =()=>{ 
  dispatch(setActiveSong({ song, data ,i}))
  dispatch(playPause(true))
 }
 
 
  const albumId =   ids.split(':').pop();  
 
  return(  
    
  <div  className="shadow-md  card relative overflow-hidden  transition hover:bg-[#272626] h-60  w-44 flex flex-col  justify-around p-3 rounded-md bg-[#201f1f]">
  <div className="img flex justify-center"><img src={song.coverArt.sources[0].url} className="  h-40"></img></div>
<div className="song_info w-full text-gray-400">
  <PlayPause
  isPlaying={isPlaying}
  activeSong={activeSong}
song={song}
handlePause={handlePauseClick}
handlePlay={handlePlayClick}
  />
 <p  className=  " truncate  font-semibold mt-2 text-sm  text-white "><Link  to={`/albums/?ids=${albumId}`} >{song.name}</Link></p> 
 <p className="text-sm font-medium whitespace-nowrap truncate">{song.artists.items[0].profile.name} </p>
</div>
</div>
 )
}
 
export default SongCard;
