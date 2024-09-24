import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { CgDanger } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function FlightList() {
  const [flights, setFlights] = useState(null);

  // Backende veri tabanındaki uçuşları getirmek için istek gönder
  async function bringFlights() {
    let flights = await fetch("http://localhost:3000/get");
    let data = await flights.json();
    setFlights(data);
  }

  useEffect(() => {
    bringFlights();
  }, []);

  // Veri tabanındaki uçuşları sil
  async function HandleDelete(id) {
    await fetch("http://localhost:3000/delete", {
      body: JSON.stringify({ id }),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });

    bringFlights();
  }

  return (
    <div className="mt-2 px-2 lg:px-16 py-4">
      <div className="flex justify-between mb-8 ">
        <p className="flex items-center gap-2">
          Sort by: <span className="font-bold "> Recommmended</span>
          <MdOutlineKeyboardArrowDown />
        </p>
        <p className="flex gap-2">
          <IconContext.Provider value={{ color: "blue", size: "1.4rem" }}>
            <CgDanger />
          </IconContext.Provider>
          Avg Fare: <span className="font-bold">$225</span>
        </p>
      </div>

      {flights?.map((flight) => (
        <div key={flight.id}>
          <div className="flex relative max-lg:gap-4 flex-col lg:flex-row justify-between bg-white py-4 lg:py-8 px-2 lg:px-4  rounded-lg shadow-xl mb-4">
            <button
              onClick={() => HandleDelete(flight.id)}
              className="absolute active:bg-red-800 bg-red-600 font-bold hover:scale-105 hover:shadow-lg text-white px-2 py-1 rounded-lg right-0 top-0"
            >
              Cancel
            </button>
            <div>
              <div className="flex items-center gap-4">
                <p className="bg-blue-700 p-1 text-sm rounded-full text-white font-bold mb-auto">
                  {flight.prefixICAO}
                </p>
                <div>
                  <p className="text-xl mb-4">
                    {flight.scheduleTime.slice(0, 5)} - 0:00 AM
                  </p>
                  <div className="flex justify-between  gap-2 lg:gap-16">
                    <div>
                      <p>
                        <span className="font-bold">Airline Code:</span>{" "}
                        {flight.airlineCode}
                      </p>
                      <button className="flex items-center gap-1 text-blue-700">
                        Flight Details <MdOutlineKeyboardArrowDown />
                      </button>
                    </div>
                    <div>
                      <p className="font-bold">Nonstop</p>
                      <p>1h 32m</p>
                    </div>
                    <div>
                      {flight.flightDirection === "D" ? (
                        <p className="font-bold">
                          AMSTERDAM TO {flight.route.destinations[0]}
                        </p>
                      ) : (
                        <p className="font-bold">
                          {flight.route.destinations[0]} TO AMSTERDAM
                        </p>
                      )}

                      <p>{flight.flightName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <p className="border-2 border-gray-300 items-center flex gap-4 flex-col bg-white px-2 lg:min-w-[70px] text-sm rounded-lg justify-center">
                <span className="font-extrabold">$156</span> <span>Main</span>
              </p>
              <p className="border-2 border-gray-300 items-center flex gap-4 flex-col bg-white px-2 lg:min-w-[70px] text-sm rounded-lg justify-center">
                <span className="font-extrabold">$204</span>
                <span>Comfort+</span>
              </p>
              <p className="border-2 border-gray-300 items-center flex gap-4 flex-col bg-zinc-300 px-2 lg:min-w-[70px] text-sm rounded-lg justify-center">
                . . .
              </p>
              <p className="border-2 border-gray-300 items-center flex gap-4 flex-col bg-white px-2 lg:min-w-[70px] text-sm rounded-lg justify-center">
                <span className="font-extrabold">$304</span> <span>First</span>
              </p>
              <p className="border-2 border-gray-300 items-center flex gap-4 flex-col bg-zinc-300 px-2 lg:min-w-[70px] text-sm rounded-lg justify-center">
                . . .
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
