const SignUp = () => {
    return (
      <section id="sign-up" className="w-full h-full py-16 ">
        <div className="container mx-auto p-6 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 ">
          <div className="lg:col-span-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-normal">
              Connect with Us
              <span className="text-[#d71515]"> for Updates </span>
              & Newsletter
            </h1>
          </div>
          <div className="lg:col-span-6 w-full">
            <form className="relative block">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 md:py-4 py-3 lg:py-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d71515] transition duration-200"
              />
              <button className="absolute right-0 bottom-1/2  transform translate-y-1/2 bg-[#d71515] text-white text-lg font-semibold  px-8 md:py-4 py-3 lg:py-6 md:px-10 rounded-full hover:bg-red-600  focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default SignUp;
  