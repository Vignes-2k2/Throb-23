//Technical Events
import PaperPresentation from "./Forms/PaperPresentation"
import PosterPresentation from "./Forms/PosterPresentation"
import CodingAndDebugging from "./Forms/CodingAndDebugging"
import TechGeeks from "./Forms/TechGeeks"

//Non Technical
import IPLAuction from "./Forms/IPLAuction"
import TreasureHunt from "./Forms/TreasureHunt"
import WordHunt from "./Forms/WordHunt"
import Connections from "./Forms/Connections"

// React-Router-DOM
import {BrowserRouter, Route, Routes} from "react-router-dom"
//Components
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import SideBar from "./Components/SideBar"

//image
import Title from "./assets/Logos/THROB_TITLE.png"

function App() {
    return(
      <div className="flex flex-col w-full overflow-hidden">
        
        <BrowserRouter>
        <div className="fixed w-full bg-[#545454]">
          <Nav/>
        </div>
          
          <div className="flex w-full justify-between">
            <div className="flex flex-col items-center w-[75%] max-md:w-full overflow-scroll pt-[120px]">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/paper" element={<PaperPresentation title={Title}/>}/>
                <Route path="/poster" element={<PosterPresentation title={Title}/>}/>
                <Route path="/coding" element={<CodingAndDebugging title={Title}/>}/>
                <Route path="/geeks" element={<TechGeeks title={Title}/>}/>
                <Route path="/treasure" element={<TreasureHunt title={Title}/>}/>
                <Route path="/ipl" element={<IPLAuction title={Title}/>}/>
                <Route path="/connect" element={<Connections title={Title}/>}/>
                <Route path="/freeze" element={<WordHunt title={Title}/>}/>
              </Routes>
              <span className="absolute bottom-5 text-[12px] sm:text-[5px] hidden max-md:block max-md:text-[10px] max-lg:text-[12px] font-semibold">
                  <p>Desgined and Developed by <a href="">Vigneswara</a></p>
              </span>
            </div>
            <div className="top-0 right-0 z-50 left-auto max-md:hidden" >
               <SideBar/>
            </div>
             
            </div>
          
        </BrowserRouter>
      </div>
      
    )
}

export default App
