import Logo from "../assets/Logos/MCEA_Logo.png"
import Hamburger from "../assets/Buttons/MENU.svg"
import Close from "../assets/Buttons/CLOSE.svg"
import { useState } from "react"
import {Link} from "react-router-dom"
// import SideBar from "./SideBar"
import MSideBar from "./MSideBar"
// import SideBar from "./SideBar"

const Nav = () => {
    const [Open, setOpen] = useState(false);

    const OpenMenu = () => {
        setOpen(!Open);
    }

  return (
    <div className="flex w-full fixed top-0 z-50">
        <div className="flex w-full h-[70px] sm:h-[90px] bg-[#545454] pl-5 pr-6 items-center justify-between">
            <Link to="/" className="h-[100%] flex items-center" ><img src={Logo} alt="MCEA" className="h-[80%]" title="Home" /></Link>
            <img src={Open ? Hamburger : Close} alt="Menu" className="h-[30%] max-sm:h-[25%] hidden max-md:block" onClick={OpenMenu}/>
        </div>
        <div className="lg:hidden md:hidden">     
          {
            !Open && <MSideBar/>
          }
        </div> 
    </div>
    
  )
}

export default Nav