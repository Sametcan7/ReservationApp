import { IconContext } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { FaTag } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex justify-between items-center py-7 px-2">
      <h1 className="flex items-center gap-2 font-bold">
        <span className="bg-blue-700 rounded-full relative">
          <IconContext.Provider value={{ size: "3rem", color: "white" }}>
            <IoAirplane className="pr-3" />
          </IconContext.Provider>
        </span>
        PLANE SCAPE
      </h1>
      <ul className="flex flex-col lg:flex-row gap-4 font-medium">
        <Link to="/myflights" className="flex items-center gap-1">
          <button className="bg-blue-700 text-white active:bg-blue-800 hover:shadow-xl rounded-2xl p-2">
            My Flights
          </button>
        </Link>

        <IconContext.Provider value={{ size: "1rem", color: "blue" }}>
          <li className="flex items-center gap-1">
            <span>
              <FaTag />
            </span>
            Deals
          </li>
          <li className="flex items-center gap-1">
            <span>
              <FaEarthAmericas />
            </span>
            Discover
          </li>
        </IconContext.Provider>
        <li className="flex items-center gap-1">
          <span>
            <IconContext.Provider value={{ size: "2rem", color: "blue" }}>
              <CgProfile className="h-[2rem]" />
            </IconContext.Provider>
          </span>
          Joane Smith
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
