import { Error ,Loader ,SongCard } from "../components";
import {genres} from "../assets/constants";
 import { useGetTracksQuery } from "../redux/services/spotify";
 import { useDispatch,useSelector } from "react-redux";
const Discover = () => {
  const dispatch = useDispatch();

  const {activeSong,isPlaying
  } = useSelector((state)=>state.player);
 
 
  const { data, error, isLoading } = useGetTracksQuery();

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error fetching data: {error.message}</div>;
  }

//  console.log(data.albums.items[0].data.uri);
  // Use the data as needed
 const fetchdata = data;
 
    return(<>
          <div className="flex bg-[#181717] p-2  justify-between"> 
              <div className="title_discover">
                <h2 className="text-white text-xl">Discover</h2>
              </div>
                
                <select className=" outline-none  font-semibold bg-neutral-900 text-white text-sm">
                    {genres.map((cur)=>{
                        return(<option key={cur.title} value={cur.value}>{cur.title}</option>)
                    })}
                </select>
          </div>
          <div className="song_cards bg-[#181717] flex flex-wrap gap-5 p-2 justify-center mt-2">
              {fetchdata.albums.items.map((song,index)=>{
                return(<SongCard key={index}
                     ids={fetchdata.albums.items[index].data.uri}
                      i={index} 
                     song={song.data} 
                     isPlaying={isPlaying}
                     activeSong={activeSong}
                    className="   shadow-md"></SongCard>)
              })}
          </div>
    </>)
}

 
export default Discover;
