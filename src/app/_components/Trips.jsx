import TripsItem from "./TripsItem";

const Trips = () => {
  return (
    <section
      id="trips"
      className="w-full h-full md:px-0 px-4 py-20 bg-[#d71515] relative"
    >
      <div className="flex items-center flex-col justify-center container w-full  h-auto py-8">
        <h2 className="lg:text-7xl text-5xl font-bold text-white mb-8 text-center">
        Ride Types we offer
                </h2>
        <TripsItem />
      </div>
    </section>
  );
};

export default Trips;
