
import {FaPauseCircle,FaPlayCircle} from "react-icons/fa"
const PlayPause = ({isPlaying,activeSong,song,handlePause , handlePlay}) => {
 
  return(<>
<div className="   absolute top-0 left-0   flex justify-center items-center h-full w-full">

{  isPlaying && activeSong?.name === song.name?
( <FaPauseCircle 
  size={35}
  className="  cursor-pointer absolute  -translate-y-4  text-green-200"
  onClick={handlePause}
 />)
  :(<FaPlayCircle  
    size={35}
  className=" text-green-200 absolute   -translate-y-4   cursor-pointer "
  onClick={handlePlay}
  /> )}
</div>
  </>)
}
 

 
export default PlayPause;
