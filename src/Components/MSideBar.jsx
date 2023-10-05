import {Link} from "react-router-dom"

const MSideBar = () => {
  return (
    <div className="fixed z-40 w-[60%] h-[90vh] text-white top-[70px] right-0 bg-[#545454] max-lg:px-5 min-lg:px-5 px-10 pt-5">
    <p className="text-[30px] font-bold mb-10">Events</p>
    <span className="flex flex-col gap-8">
        <span>
            <p className="text-[20px] max-md:text-[16px] font-bold mb-[3%]">Technical</p>
            <span className="flex flex-col gap-2 text-[16px] max-md:text-[10px] max-lg:text-[10px] min-xl:text-[10px] min-lg:text-[10px] cursor-pointer">
                <Link to="/paper"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">Paper Presentz</p></Link>
                <Link to="/poster"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">Projectivity</p></Link>
                <Link to="/coding"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">Coding and Debugging</p></Link>
                <Link to="/geeks"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">TechGeeks</p></Link>
            </span>
        </span>
        <span>
            <p className="text-[20px]  max-md:text-[16px] font-bold mb-[3%]">Non Technical</p>
            <span className="flex flex-col gap-2 text-[16px] max-md:text-[10px] max-lg:text-[10px] min-xl:text-[10px] min-lg:text-[10px] cursor-pointer">
                <Link to="/treasure"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">Treasure Hunt</p></Link>
                <Link to="/ipl"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">IPL Auction</p></Link>
                <Link to="/connect"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">Connectionz</p></Link>
                <Link to="/freeze"><p className="px-5 py-2 hover:transition-all hover:transi hover:bg-white hover:text-[#545454] rounded-lg font-bold ">Freeze the Tune</p></Link>
            </span>
        </span>
    </span>
</div>
  )
}

export default MSideBar