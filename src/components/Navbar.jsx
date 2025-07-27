import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RiUploadLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";

import "../styles/Navbar.css";
const Navbar = ({ toggleSidebar }) => {
    return(
        <div className="navbar-container flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2 text-red-600 text-2xl font-bold">
                <div className="p-2 hover:rounded-3xl mr-8 hover:bg-[#222222]">
                    <FaBars className="text-white active:scale-95" onClick={toggleSidebar}/>
                </div>
                <FaYoutube  />
                <span className="text-white text-2xl font-mono">YouTube</span>
            </div>
            <div className="search-container">
                <input type="text" 
                  placeholder="Search"
                  className="search-input"
                />
                <button className="search-button">
                    <IoSearchOutline/>
                </button>
            </div>
            <div className="navbar-3">
                <button className="navbar-icons">
                    <RiUploadLine/>
                </button>
                <button className="navbar-icons">
                    <GoBell />
                </button>
                <a className="profile-img-container" href="">
                    <img className="profile-img" src="https://tse1.mm.bing.net/th/id/OIP.waOtRAV99hCXTCS_RvbK6QHaGp?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Navbar