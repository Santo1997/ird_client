import {FaHandHoldingHeart} from "react-icons/fa6";
import Search from "../utilities/Search";

const Header = () => {
  return (
    <>
      <div className="navbar py-0">
        <div className="navbar-start">
          <img src="https://ihadis.com/assets/home-logo.png" className="ml-3 h-9 w-10" />
          <a className="ml-4 grid justify-items-start cursor-pointer">
            <span className="text-lg">হাদিস সমূহ</span>
            <span className="text-[10px]">হাদিস পড়ুন শিখুন এবং জানুন</span>
          </a>
        </div>

        <div className="navbar-end">
          <Search />
          <a className="btn btn-sm mx-5 text-white bg-emerald-600 hover:bg-emerald-600 ">
            <span>সাপোর্ট করুন</span>
            <FaHandHoldingHeart />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;


