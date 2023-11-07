import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import  {RiCloseLine} from 'react-icons/ri'
import {links} from "../assets/constants";
 import logo from "../assets/spotify.png"
import { HiOutlineMenu } from "react-icons/hi";


const NavLinks=({handleClick})=>{
  return(<div className="mt-10 flex flex-col text-white gap-3">
{
  links.map((item)=>{
    return(<NavLink 
      className="text-white flex gap-2 items-center text-sm font-medium"
       to={item.to}
        key={item.name}
        onClick={()=>handleClick && handleClick()}
        >
          <item.icon />
          {item.name}
        </NavLink>)
  })
}
  </div>)
}


const Sidebar = () => {

const [mobilemenuopen ,setmobilemenuopen] = useState(false);

 return(<>
 <div className="md:flex hidden flex-col w-[240px] py-10 px-5 bg-[#181717] text-white"> 
 <div className="logo h-7 w-7 flex gap-2 items-center"><img src={logo}></img>Spotify.</div>
 <NavLinks/>
  </div>

  <div className=" absolute md:hidden top-4 right-3">{
    mobilemenuopen ? (<RiCloseLine 
       className=" w-6 h-6
        text-white mr-2"
        onClick={()=>setmobilemenuopen(false)}
        />): 
        (<HiOutlineMenu 
          className=" w-6 h-6
           text-white mr-2"
           onClick={()=>setmobilemenuopen(true)}
           />)
    }</div>


 
<div className={`md:hidden p-6  z-10 absolute top-0 h-screen w-2/3 bg-[#252424] shadow-md backdrop-blur-lg text-white transition-all ${mobilemenuopen ?'left-0': '-left-full'}`}> 
 <div className="logo h-7 w-7 flex gap-2 items-center"><img src={logo}></img>Spotify </div>
 <NavLinks onClick={()=> setmobilemenuopen(false)}/>
</div>
 </>)
};

export default Sidebar;
