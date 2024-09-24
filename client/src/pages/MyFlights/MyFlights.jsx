import { Link } from "react-router-dom";
import Header from "../../ui/MyFlights/Header";
import FlightList from "../../ui/MyFlights/FlightList";

function MyFlights() {
  return (
    <div className="max-w-[1200px] mx-auto bg-zinc-200 rounded-lg my-8 min-h-screen">
      <Header />
      <div className="mt-8 px-2 lg:px-16">
        <Link
          className="bg-blue-700 text-white hover:scale-105 hover:shadow-lg active:bg-blue-800 rounded-2xl p-2 font-bold"
          to="/"
        >
          Make a reservation
        </Link>
      </div>
      <FlightList />
    </div>
  );
}

export default MyFlights;
