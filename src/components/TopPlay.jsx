import { useEffect ,useState,useRef } from "react";
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
 import React from "react";
import {Swiper ,SwiperSlide} from 'swiper/react';
import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice"; 
import 'swiper/css';
import 'swiper/css/free-mode';
import { useGetTracksQuery } from "../redux/services/spotify";
const TopPlay = ({ artists ,i}) => {
 const dispatch = useDispatch();
 const {activeSong , isPlaying} = useSelector((state)=>state.player);
 const {data} = useGetTracksQuery();
 const topArtists = data?.artists.items.slice(0,8);
  const topPlays = data?.albums.items.slice(5,9); 
 
 const divref = useRef(null); 
 const handlePauseClick =()=>{
  dispatch(playPause(false))
 } 
 const handlePlayClick =()=>{ 
  dispatch(setActiveSong({ song, data ,i}))
  dispatch(playPause(true))
 }
useEffect(()=>{
  divref.current.scrollIntoView({behvior:'smooth'})
})
 
 console.log(topPlays);

 
  return( 
 <div  ref={divref} className="xl:ml-6 ml-0 xl:mb-0 mb-6  gap-2  flex-1 xl:w-[200px] max-w-full flex flex-col">

  <div className="flex  flex-col"> 
 <div className="flex justify-between w-full text-white">
  <h2 >Top Charts</h2>
  <Link to="/top-charts" className="text-xs">See More</Link>
 </div>
   <div className="flex  xl:flex-col md:flex mt-5 gap-3 ">
   {topPlays?.map((topsong,i)=>{
     console.log(topsong.data.artists.items[0].profile.name );
    return (
      
        <div key={i} className="shadow-md w-full    rounded bg-[#181717]">
           <div className="flex   gap-4 items-center">
           <div className=" w-14"><img src={topsong.data.coverArt.sources[0].url} className=" rounded h-14 w-14"></img> </div>
            <div className="text-white">
              <p className=" truncate  text-sm  w-auto  xl:w-32 md:w-auto">{topsong.data.name}</p>  
            <p className=" truncate text-xs  w-auto   xl:w-32 md:w-auto ">{topsong.data.artists.items[0].profile.name}</p>
            </div>
           </div>
        </div>
    );
})}

   </div>
 
  </div>

  <div className="flex  mt-4 flex-col"> 
 <div className="flex justify-between w-full text-white">
  <h2 >Top  Artists</h2>
  <Link to="/top-charts" className="text-xs">See More</Link>
 </div>
   <div className="flex flex-wrap mt-5 gap-3">
   { topArtists?.map((topartist,i)=>{ 
    return (
      
        <div key={i} className="shadow-md   rounded-full bg-[#181717]">
            <div> <img className=" rounded-full  h-20 " src={topartist.data.visuals.avatarImage.sources[0].url}></img> </div>
 
        </div>
    );
})}

   </div>
 
  </div>
</div>
 
  )
}
 
 
export default TopPlay;
