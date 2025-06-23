import React from "react";

function Hero() {
  return (
    <div
      className="relative w-full max-w-screen min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/img/herobg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 sm:py-28 md:py-36 lg:py-44 xl:py-52 min-h-screen">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 max-w-4xl">
          GLASSES REGLAZING IN LONDON
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 max-w-2xl px-2">
          New lenses. Same frames. No hassle.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg transition duration-300 shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
