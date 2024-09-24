import CarRentals from "./images/CarRentals.jpeg";
import Hotels from "./images/Hotels.jpeg";
import TravelPackages from "./images/TravelPackages.jpeg";

function SideMenu() {
  return (
    <div className="flex flex-row w-[full] lg:flex-col lg:w-1/5 gap-0.5 lg:gap-6 mx-2 lg:mx-4 max-lg:mt-6">
      <img className=" max-lg:w-[33.3%] rounded-2xl" src={CarRentals} />
      <img className=" max-lg:w-[33.3%] rounded-2xl" src={Hotels} />
      <img className=" max-lg:w-[33.3%] rounded-2xl" src={TravelPackages} />
    </div>
  );
}

export default SideMenu;


