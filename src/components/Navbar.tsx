import "../css/navbar.css"
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import HomeDrop from "./subcomponents/HomeDrop";
const Navbar = () => {
    const [homedrop,setHomeDrop]=useState(false)
    const [storedrop,setStoreDrop]=useState(false)
    const [livetvdrop,setLiveTvDrop]=useState(false)
    const [categoriesdrop,setCategoriesDrop]=useState(false)
  return (
    <div className="nav_Container">
        <h3 className="title">prime video</h3>
      <ul>
        <li onMouseEnter={()=>{setHomeDrop(true)}} onMouseLeave={()=>setHomeDrop(false)}>
          Home {homedrop?<BsChevronUp    className="icon " />:<BsChevronDown   className="icon " />}{" "}
          {homedrop?<HomeDrop/>:null} 
        </li>
        <li onMouseEnter={()=>{setStoreDrop(true)}} onMouseLeave={()=>setStoreDrop(false)}>
          Store {storedrop?<BsChevronUp   className="icon "/>:<BsChevronDown  className="icon " />} {" "}
        </li>
        <li onMouseEnter={()=>{setLiveTvDrop(true)}} onMouseLeave={()=>setLiveTvDrop(false)}>
          LiveTv {livetvdrop?<BsChevronUp className="icon " />:<BsChevronDown className="icon " />}{" "}
        </li>
        <li onMouseEnter={()=>{setCategoriesDrop(true)}} onMouseLeave={()=>setCategoriesDrop(false)}>
          Categories {categoriesdrop?<BsChevronUp className="icon " />:<BsChevronDown className="icon " />}{" "}
        </li>
        <li>
          {" "}
          <BiSearch className="icon  action_icon" />{" "}
        </li>
        <li>Try For Free </li>
        <li>
          <BiSolidUserCircle className="icon action_icon"  />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
