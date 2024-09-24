/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { IoAirplane } from "react-icons/io5";
import { TbPlaneArrival, TbPlaneDeparture } from "react-icons/tb";

function FlightResults({ flights }) {
  const [availableFlights, setAvailableFlights] = useState(null);

  // Veri tabanında olan uçuşları getirip tekrar eklememek için kıyaslama
  async function bringFlights() {
    let flights = await fetch("http://localhost:3000/get");
    let data = await flights.json();
    let arr = data.map((f) => f.id);
    setAvailableFlights(arr);
  }

  useEffect(() => {
    bringFlights();
  }, []);

  // Veri tabanına Veri ekleme
  async function HandleAdd(f, date) {
    // Geçmiş tarihli uçuşlar için rezervasyon kontrolü
    let currentTime = new Date().toLocaleString() + "";
    let currentDay = currentTime.slice(0, 2);
    let currentMonth = currentTime.slice(3, 5);
    let currentYear = currentTime.slice(6, 10);
    let currentHour = currentTime.slice(11, 13);

    let currentDate = new Date(
      Date.UTC(currentYear, currentMonth, currentDay, currentHour)
    );

    let selectedYear = date?.slice(0, 4);
    let selectedDay = date?.slice(8, 10);
    let selectedMonth = date?.slice(5, 7);
    let selectedHour = date?.slice(11, 13);

    let fromDate = new Date(
      Date.UTC(selectedYear, selectedMonth, selectedDay, selectedHour)
    );

    if (currentDate > fromDate) {
      return alert("Reservations cannot be made for past dates.");
    }

    await fetch("http://localhost:3000/add", {
      body: JSON.stringify({ f }),
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });
    bringFlights();
  }

  return (
    <div className=" w-[full] lg:w-3/4 max-h-[500px] overflow-y-auto ">
      {flights?.map((flight) => (
        <div key={flight.id} className="pb-4">
          {flight.flightDirection === "D" ? (
            <div className="bg-white rounded-t-lg rounded-br-lg">
              <p className="pl-8 font-bold py-4">Amsterdam</p>
              <div className="flex px-2 justify-between items-center lg:px-8 mb-4">
                <div>
                  <p className="flex items-center gap-2">
                    <TbPlaneDeparture />
                    <span className="text-sm">Departure</span>
                  </p>

                  <p className="flex font-bold gap-1">
                    <span>{flight.scheduleTime.slice(0, 5)}</span>{" "}
                    <span>AM</span>
                  </p>
                  <p className="flex font-bold gap-1">
                    <span>{flight.scheduleDate}</span>{" "}
                  </p>
                  <p>Airport: AMS</p>
                </div>
                <div className="w-[10%]">
                  <div
                    style={{
                      borderTop: "2px solid #00000059 ",
                    }}
                  ></div>
                </div>
                <div>
                  <p className="flex flex-col items-center gap-1">
                    <span className="text-red-600 font-bold text-xs">
                      {flight.flightName}
                    </span>
                    <IconContext.Provider
                      value={{ color: "blue", size: "1.6rem" }}
                    >
                      <IoAirplane />
                    </IconContext.Provider>
                    <span>2h 25m(Nonstop)</span>
                  </p>
                </div>
                <div className="w-[10%]">
                  <div
                    style={{
                      borderTop: "2px solid #00000059 ",
                    }}
                  ></div>
                </div>
                <div>
                  <p className="flex items-center gap-2">
                    <TbPlaneArrival />
                    <span>Arrival</span>
                  </p>
                  <span className="font-bold">00:00 AM</span>
                  <p>Airport: {flight.route.destinations[0]}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col pl-8">
                  <p className="font-bold text-blue-700">Price: $200</p>
                  <p className="text-sm">Round Trip</p>
                </div>
                <div>
                  {availableFlights?.includes(flight.id) ? (
                    <p className="px-6 py-5 bg-green-500 rounded-br-lg rounded-tl-lg text-white font-semibold">
                      Booked
                    </p>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          HandleAdd(flight, flight.scheduleDateTime)
                        }
                        className="px-6 py-5  hover:shadow-xl active:bg-blue-800 bg-blue-700 rounded-br-lg rounded-tl-lg text-white font-semibold"
                      >
                        Book Flight
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-t-lg rounded-br-lg">
              <p className="pr-8 font-bold py-4 text-right">Amsterdam</p>
              <div className="flex px-2 justify-between items-center lg:px-8 mb-4">
                <div>
                  <p className="flex items-center gap-2">
                    <TbPlaneDeparture />
                    <span className="text-sm">Departure</span>
                  </p>

                  <p className="flex font-bold gap-1">
                    <span>{flight.scheduleTime.slice(0, 5)}</span>
                    <span>AM</span>
                  </p>
                  <p className="flex font-bold gap-1">
                    <span>{flight.scheduleDate}</span>{" "}
                  </p>
                  <p>Airport: {flight.route.destinations[0]}</p>
                </div>
                <div className="w-[10%]">
                  <div
                    style={{
                      borderTop: "2px solid #00000059 ",
                    }}
                  ></div>
                </div>
                <div>
                  <p className="flex flex-col items-center gap-1">
                    <span className="text-red-600 font-bold text-xs">
                      {flight.flightName}
                    </span>
                    <IconContext.Provider
                      value={{ color: "blue", size: "1.6rem" }}
                    >
                      <IoAirplane />
                    </IconContext.Provider>
                    <span>2h 25m(Nonstop)</span>
                  </p>
                </div>
                <div className="w-[10%]">
                  <div
                    style={{
                      borderTop: "2px solid #00000059 ",
                    }}
                  ></div>
                </div>
                <div>
                  <p className="flex items-center gap-2">
                    <TbPlaneArrival />
                    <span>Arrival</span>
                  </p>
                  <span className="font-bold">00:00 AM</span>
                  <p>Airport: AMS</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col pl-8">
                  <p className="font-bold text-blue-700">Price: $200</p>
                  <p className="text-sm">Round Trip</p>
                </div>
                <div>
                  {availableFlights?.includes(flight.id) ? (
                    <p className="px-6 py-5 bg-green-500 rounded-br-lg rounded-tl-lg text-white font-semibold">
                      Booked
                    </p>
                  ) : (
                    <button
                      onClick={() => HandleAdd(flight, flight.scheduleDateTime)}
                      className="px-6 py-5  hover:shadow-xl bg-blue-700 rounded-br-lg active:bg-blue-800 rounded-tl-lg text-white font-semibold"
                    >
                      Book Flight
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <button className="bg-gray-400 py-2 px-6 text-blue-700 underline font-semibold inline-block rounded-b-lg">
            Check Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default FlightResults;
