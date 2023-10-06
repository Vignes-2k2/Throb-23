import DeptLogo from "../assets/Logos/Black-logo-MCEA 1.svg"
import LaptopBG from "../assets/Bg-image/Laptop-Bg.svg"
import MobileBG from "../assets/Bg-image/Mobile-Bg.svg"
import AnimatedTtile from "../assets/Logos/THROB_GIF.gif"
// import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col justify-start w-full h-[100%] mt-[-40px] px-5 md:pt-5  object-cover ">
        <div className="absolute hidden w-full h-[88vh] object-cover top-[70px] sm:top-[90px] left-0 items-center justify-center overflow-y-hidden">
          <img src={LaptopBG} alt="BG" className="mix-blend-multiply hidden lg:block" />
          <img src={MobileBG} alt="BG" className="pl-[5%] w-full mix-blend-multiply block lg:hidden" />x
        </div >
          
        <div className="flex items-center gap-3 w-full mb-[3%]">
          <img src={DeptLogo} alt="Logo" className="h-[70%] mix-blend-multiply" />
            <span className="text-[14px] lg:text-[18px] sm:text-[10px] md:text-[14px] font-bold leading-6">
              <p>Depatment</p>
              <p>of</p>
              <p>Mechatronics Engineering</p>
            </span>
        </div>

        <div className="w-full flex justify-center">
          <img src={AnimatedTtile} alt="Title" className="h-[80%]" />
        </div>
        <div className="justify-center items-center w-full flex sm:hidden">           
          <span className="absolute bottom-5 text-[12px] sm:text-[5px] hidden max-md:block max-md:text-[10px] max-lg:text-[12px] font-semibold z-0">
            <p>Desgined and Developed by <a href="">Vigneswara</a></p>
          </span>
        </div>
    </div>
  )
}

export default Home