

import React from "react";

function Hero() {
  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/img/herobg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 md:py-40 lg:py-48">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-3xl">
          GLASSES REGLAZING IN LONDON
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl px-2">
          New lenses. Same frames. No hassle.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;




