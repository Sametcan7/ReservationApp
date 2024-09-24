import { useState } from "react";
import FlightResults from "./FlightResults";
import FlightResultsFilter from "./FlightResultsFilter";
import FlightSearch from "./FlightSearch";

function FlightSearchAndResult() {
  const [flights, setFlights] = useState(null);

  return (
    <div className="lg:w-4/5 w-[full] mx-1 lg:mx-4">
      <FlightSearch setFlights={setFlights} />
      <div className="flex gap-4 flex-col-reverse lg:flex-row">
        <FlightResults flights={flights} />
        <FlightResultsFilter />
      </div>
    </div>
  );
}

export default FlightSearchAndResult;
