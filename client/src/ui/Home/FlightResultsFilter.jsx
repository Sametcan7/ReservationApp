function FlightResultsFilter() {
  return (
    <div className="w-[full] lg:w-1/4">
      <div>
        <label>
          <p className="font-bold mb-4">Sort by:</p>
          <select className="w-full rounded-xl h-8 ">
            <option value="lowestprice">Lowest Price</option>
            <option value="highestprice">Highest Price</option>
          </select>
        </label>
      </div>
      <div>
        <p className="font-bold my-4">Arrival Time</p>
        <div className="flex flex-col">
          <label>
            <input
              className="mr-2"
              type="radio"
              name="arrivaltime"
              value="day"
            />
            5:00 AM - 11:59 AM
          </label>
          <label>
            <input
              className="mr-2"
              type="radio"
              name="arrivaltime"
              value="night"
            />
            12:00 PM - 5:59 PM
          </label>
        </div>
      </div>
      <div>
        <p className="font-bold my-4">Stops</p>
        <div className="flex flex-col">
          <label className="flex">
            <input className="mr-2" type="radio" name="nonstop" value="day" />
            <p className="flex justify-between flex-1">
              <span>Nonstop</span>
              <span>$230</span>
            </p>
          </label>
          <label className="flex">
            <input className="mr-2" type="radio" name="nonstop" value="night" />
            <p className="flex justify-between flex-1">
              <span>1 Stop</span>
              <span>$230</span>
            </p>
          </label>
          <label className="flex">
            <input className="mr-2" type="radio" name="nonstop" value="night" />
            <p className="flex justify-between flex-1">
              <span>2+ Stops</span>
              <span>$230</span>
            </p>
          </label>
        </div>
      </div>
      <div>
        <p className="font-bold my-4">Airlines Included</p>
        <div className="flex flex-col">
          <label className="flex">
            <input className="mr-2" type="radio" name="airline" value="day" />
            <p className="flex justify-between flex-1">
              <span>Alitalia</span>
              <span>$230</span>
            </p>
          </label>
          <label className="flex">
            <input className="mr-2" type="radio" name="airline" value="night" />
            <p className="flex justify-between flex-1">
              <span>Lufthansa</span>
              <span>$230</span>
            </p>
          </label>
          <label className="flex">
            <input className="mr-2" type="radio" name="airline" value="night" />
            <p className="flex justify-between flex-1">
              <span>Air France</span>
              <span>$230</span>
            </p>
          </label>
          <label className="flex">
            <input className="mr-2" type="radio" name="airline" value="night" />
            <p className="flex justify-between flex-1">
              <span>Brussels Airlines</span>
              <span>$230</span>
            </p>
          </label>
          <label className="flex">
            <input className="mr-2" type="radio" name="airline" value="night" />
            <p className="flex justify-between flex-1">
              <span>Air Italy</span>
              <span>$230</span>
            </p>
          </label>
          <label className="flex">
            <input className="mr-2" type="radio" name="airline" value="night" />
            <p className="flex justify-between flex-1">
              <span>Siberia</span>
              <span>$230</span>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default FlightResultsFilter;
