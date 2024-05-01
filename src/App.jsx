import {TiHome} from "react-icons/ti";
import "./App.css";
import Header from "./components/base/Header";
import {TbBooks} from "react-icons/tb";
import {FaBookmark} from "react-icons/fa6";
import {PiBookOpenFill, PiSquaresFourFill} from "react-icons/pi";
import {BsFillSendFill} from "react-icons/bs";
import TabSection from "./components/layout/TabSection";
import Sidebar from "./components/layout/Sidebar";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-items-center w-screen h-[calc(100vh-64px)] bg-white ">
        <div className="w-20 h-full flex justify-center items-center">
          <div>
            <TiHome className="text-2xl mb-8 hover:text-emerald-600" />
            <TbBooks className="text-2xl mb-8 hover:text-emerald-600" />
            <FaBookmark className="text-2xl mb-8 hover:text-emerald-600" />
            <PiBookOpenFill className="text-2xl mb-8 hover:text-emerald-600" />
            <PiSquaresFourFill className="text-2xl mb-8 hover:text-emerald-600" />
            <BsFillSendFill className="text-2xl  hover:text-emerald-600" />
          </div>
        </div>

        <div className="w-full h-[100%-12px] bg-gray-200 rounded-2xl p-3 grid grid-cols-4 gap-3">
          <div className="bg-white rounded-2xl overflow-hidden tabsection">
            <TabSection />
          </div>
          <div className="col-span-2 bg-white rounded-2xl overflow-hidden tabviewer">
            <Outlet></Outlet>
          </div>
          <div className="flex items-start bg-white rounded-2xl overflow-hidden sidebar w-full">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
