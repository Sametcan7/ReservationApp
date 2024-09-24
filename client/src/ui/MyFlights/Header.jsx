import { FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Header() {
  return (
    <div className="flex justify-between flex-col lg:flex-row bg-white px-2 lg:px-16 py-4 rounded-t-lg max-lg:gap-4 shadow-md">
      <div className="flex max-lg:justify-around max-sm:flex-col max-sm:gap-2 lg:gap-4 ">
        <button className="py-1 px-4 rounded-lg border-2 border-gray-300">
          Times
        </button>
        <button className="py-1 px-4 rounded-lg border-2 border-gray-300">
          Stops
        </button>
        <button className="py-1 px-4 rounded-lg border-2 border-gray-300">
          Airlines
        </button>
        <button className="py-1 px-4 rounded-lg border-2 border-gray-300">
          Airports
        </button>
        <button className="py-1 px-4 rounded-lg border-2 border-gray-300">
          Amenities
        </button>
        <button className="text-blue-700 flex items-center">
          Edit Search <MdOutlineKeyboardArrowDown />
        </button>
      </div>
      <div className="flex items-center max-lg:justify-around lg:gap-4">
        <button>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaRegStar />
          </span>
          <span className="flex">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </span>
        </button>
        <span className="text-gray-300">|</span>
        <button>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="flex">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </span>
        </button>
        <span className="text-gray-300">|</span>
        <button>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="flex">
            <FaStar />
            <FaRegStar />
            <FaRegStar />
          </span>
        </button>
        <span className="text-gray-300">|</span>
        <button>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaRegStar />
          </span>
        </button>
        <span className="text-gray-300">|</span>
        <button>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          <span className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
