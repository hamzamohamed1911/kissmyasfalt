import { useState } from "react";
const rideData = [
  {
    type: "BROKE ASFALT",
    hourlyRate: 20,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "SMART ASFALT",
    hourlyRate: 27.5,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "FANCY ASFALT",
    hourlyRate: 35,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "CLASSIC ASFALT",
    hourlyRate: 35,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "HAIRY ASFALT",
    hourlyRate: 35,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "BIG ASFALT",
    hourlyRate: 50,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "NAKED ASFALT",
    hourlyRate: 50,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "BAD ASFALT",
    hourlyRate: 180,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "FIRST CLASS ASFALT",
    hourlyRate: 180,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
];
const Rider = () => {
  const [riderResult, setRiderResult] = useState(null);
  const [rideTime, setRideTime] = useState("");
  const [mileage, setMileage] = useState("");
  const [rideTypeRider, setRideTypeRider] = useState("");
  const [loading, setLoading] = useState(false); 


  const calculateRider = () => {
    if (rideTime && mileage && rideTypeRider) {
      setLoading(true);
      const selectedRide = rideData.find((ride) => ride.type === rideTypeRider);
  
      setTimeout(() => {
        if (selectedRide) {
          const hourlyRate = selectedRide.hourlyRate;
          const first15MilesRate = selectedRide.first15;
          const second15MilesRate = selectedRide.second15;
          const above30MilesRate = selectedRide.above30;
  
          const distance = parseFloat(mileage);
          const timeInMinutes = parseFloat(rideTime);
  
          const hourlyCharge = (hourlyRate * timeInMinutes) / 60;
          const first15Charge = Math.min(distance, 15) * first15MilesRate;
          const second15Charge = Math.max(Math.min(distance - 15, 15), 0) * second15MilesRate;
          const above30Charge = Math.max(distance - 30, 0) * above30MilesRate;
          //adding the 5 dollor
          let baseFee = 0;
          if (rideTypeRider !== "BAD ASFALT" && rideTypeRider !== "FIRST CLASS ASFALT") {
            baseFee = 5;
          }
  
          const totalCharge = hourlyCharge + first15Charge + second15Charge + above30Charge + baseFee;
          const DriverTakes = totalCharge * 0.9;
  
          setRiderResult(
            <p>
              Your ride for {distance} miles and {timeInMinutes} minutes in a {rideTypeRider} will cost
              <span className="font-bold">{totalCharge.toFixed(2)} $</span>. The driver takes
              <span className="font-bold">{DriverTakes.toFixed(2)} $ </span>.
            </p>
          );
        } else {
          setRiderResult("Invalid ride type selected.");
        }
        setLoading(false);
      }, 1000);
    } else {
      setRiderResult("Please fill in all fields.");
    }
  };
  

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-bold mb-4 text-primary">
        Calculate Your Ride
      </h2>

      <form>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Ride Type
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={rideTypeRider}
            onChange={(e) => setRideTypeRider(e.target.value)}
          >
            <option value="">Select Ride Type</option>
            {rideData.map((ride) => (
              <option key={ride.type} value={ride.type}>
                {ride.type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div className="mb-4 md:w-1/2">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              DISTANCE (MILES)
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter mileage"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
            />
          </div>
          <div className="mb-4 md:w-1/2">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              TIME (MINUTES)
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter ride time"
              value={rideTime}
              onChange={(e) => setRideTime(e.target.value)}
            />
          </div>
        </div>

        <button
        className={`bg-[#d71515] hover:bg-[#e24040] text-white px-6 py-3 rounded-md font-bold mt-4 flex items-center justify-center ${
          loading ? "cursor-not-allowed" : ""
        }`}
        onClick={calculateRider}
        disabled={loading}
      >
        {loading ? (
         "Calculating..."
        ) : (
          "Calculate"
        )}
      </button>
        {riderResult && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-lg">{riderResult}</p>
          </div>
        )}
     <h3 className="font-semibold my-2">This is the service fee, doesn’t include :</h3>
<ol className="list-disc pl-6 mt-2 font-medium">
  <li>Taxes</li>
  <li>Tolls</li>
  <li>Airport fees</li>
  <li>Tips</li>
  <li>Etc…</li>
</ol>

      </form>
    </div>
  );
};

export default Rider;
