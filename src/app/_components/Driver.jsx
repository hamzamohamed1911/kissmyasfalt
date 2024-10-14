import React, { useState } from "react";

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
    hourlyRate: 45,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "NAKED ASFALT",
    hourlyRate: 45,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "BAD ASFALT",
    hourlyRate: 150,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
  {
    type: "FIRST CLASS ASFALT",
    hourlyRate: 150,
    first15: 0.35,
    second15: 0.5,
    above30: 0.65,
  },
];
const Driver = () => {
  const [driverResult, setdriverResult] = useState(null);
  const [selectedRide, setSelectedRide] = useState("");
  const [totalMiles, setTotalMiles] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");
  const [weeklyEarnings, setWeeklyEarnings] = useState(0);
  const [ANNUAL, setANNUAL] = useState(0);

  const calculateEarningsWeekly = () => {
    const ride = rideData.find((r) => r.type === selectedRide);
    if (!ride) return;

    const hourlyRate = ride.hourlyRate;
    const first15Cost = ride.first15 * 15;
    const second15Cost = ride.second15 * 15;
    const above30Cost = totalMiles > 30 ? (totalMiles - 30) * ride.above30 : 0;

    const totalCost = hourlyRate + first15Cost + second15Cost + above30Cost;
    const totalWeeklyEarnings = totalCost * weeklyHours * 0.9;

    setWeeklyEarnings(totalWeeklyEarnings);
    setANNUAL(totalWeeklyEarnings * 52);
    setdriverResult(
      `Your weekly earnings are ${weeklyEarnings.toFixed(
        2
      )} and your annual earnings are ${ANNUAL.toFixed(2)} $`
    );
  };

  return (
    <div className="bg-[#fbf9f5] p-6 rounded-lg shadow-lg">
      <h1 className="flex justify-center items-center text-3xl font-bold mb-4  text-gray-700">
        calculate your earning
      </h1>
      <div className="my-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Ride Type:
        </label>

        <select
          value={selectedRide}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) => setSelectedRide(e.target.value)}
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
            Total Miles:
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter mileage"
            value={totalMiles}
            onChange={(e) => setTotalMiles(Number(e.target.value))}
          />
        </div>
        <div className="mb-4 md:w-1/2">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Weekly Hours:
          </label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter mileage"
            value={weeklyHours}
            onChange={(e) => setWeeklyHours(Number(e.target.value))}
          />
        </div>
      </div>

      <button
        className="bg-[#d71515] hover:bg-[#e24040] text-white px-6 py-3 rounded-md font-bold mt-4"
        onClick={calculateEarningsWeekly}
      >
        Calculate
      </button>
      {driverResult && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-lg">{driverResult}</p>
        </div>
      )}
    </div>
  );
};

export default Driver;
