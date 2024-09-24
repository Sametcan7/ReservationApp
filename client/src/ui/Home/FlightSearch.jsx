/* eslint-disable react/prop-types */

import { useState } from "react";
import { IconContext } from "react-icons";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";

function FlightSearch({ setFlights }) {
  const [flightDirection, setFlightDirection] = useState("");
  const [fromDateTime, setFromDateTime] = useState(null);
  const [toDateTime, setToDateTime] = useState(null);

  // Filtrelere göre uçuşları backende gönder
  async function HandleSearch() {
    let x = await fetch("http://localhost:3000/getflights", {
      body: JSON.stringify({
        flightDirection,
        fromDateTime,
        toDateTime,
      }),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });
    let { flights } = await x.json();

    setFlights(flights);
  }

  return (
    <div className="bg-white rounded-xl mb-8">
      <div className="flex-col lg:flex-row items-center gap-2 flex px-3 py-2 justify-between font-medium pt-4">
        <h2 className="flex items-center gap-1 ">
          <IconContext.Provider value={{ size: "1.2rem", color: "black" }}>
            <IoAirplane />
          </IconContext.Provider>
          BOOK YOUR FLIGHT
        </h2>
        <div className="flex">
          <p className="text-white bg-blue-700 rounded-l-3xl py-2 px-4">
            Round trip
          </p>
          <p className="bg-zinc-300 text-blue-700 py-2 px-4 rounded-r-3xl">
            One Way
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 py-2 px-3">
        <div className="w-[100%] lg:w-[50%] flex gap-0.5 font-medium">
          <IconContext.Provider value={{ color: "blue", size: "1.5rem" }}>
            <button
              onClick={() => setFlightDirection("D")}
              className={`py-1.5 border-2  rounded-l-3xl border-gray-400 w-[50%]   ${
                flightDirection === "D" ? "bg-blue-300" : "bg-white"
              }`}
            >
              <div className="items-center flex pl-2 gap-2">
                <FaPlaneDeparture /> Departures
              </div>
            </button>
            <button
              onClick={() => setFlightDirection("A")}
              className={`py-1.5 border-2  rounded-r-3xl border-gray-400 w-[50%]   ${
                flightDirection === "A" ? "bg-blue-300" : "bg-white"
              }`}
            >
              <div className="items-center flex pl-2 gap-2">
                <FaPlaneArrival /> Arrivals
              </div>
            </button>
          </IconContext.Provider>
        </div>

        <div className="w-[100%] lg:w-[50%] flex gap-0.5">
          <IconContext.Provider value={{ color: "blue", size: "1.8rem" }}>
            <div className="relative w-[50%]">
              <input
                onChange={(e) => setFromDateTime(e.target.value)}
                min="2024-01-01"
                max="2999-12-31"
                type="datetime-local"
                className="border-2 py-1.5 rounded-l-3xl border-gray-400 w-full pl-10"
              />
              <p className="absolute right-2 font-medium top-[50%] translate-y-[-50%]">
                From
              </p>
            </div>
            <div className="relative w-[50%]">
              <input
                onChange={(e) => setToDateTime(e.target.value)}
                type="datetime-local"
                min="2024-01-01"
                max="2999-12-31"
                className="border-2 py-1.5 rounded-r-3xl border-gray-400 w-full pl-10 "
              />
              <p className="absolute right-2 font-medium top-[50%] translate-y-[-50%]">
                To
              </p>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <button
        onClick={(e) => HandleSearch(e)}
        className="text-white m-3 bg-blue-700 active:bg-blue-800 hover:shadow-xl rounded-lg px-2 py-2 font-medium"
      >
        Show Flights
      </button>
    </div>
  );
}

export default FlightSearch;
