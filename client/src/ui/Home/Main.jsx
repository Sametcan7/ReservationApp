import FlightSearchAndResult from "./FlightSearchAndResult";
import SideMenu from "./SideMenu";

function Main() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col">
        <FlightSearchAndResult />
        <SideMenu />
      </div>
    </div>
  );
}

export default Main;
