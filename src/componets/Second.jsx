import React from 'react';

const Second = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
        
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-[22px] font-semibold leading-snug text-black">
            Scratched lenses? Changed prescription?<br />
            Tired of glare on night drives or headaches from blue light?
          </h2>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            If you’re happy with your current frames but your lenses are scratched, outdated,
            or no longer working for you, our reglazing service is the ideal solution.
            We’ll fit brand-new lenses into your existing specs — saving you time, money, and hassle.
          </p>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            It’s a fast, convenient, and eco-conscious way to upgrade your vision.
            Our qualified team will collect your glasses, fit the lenses that suit your needs,
            and return them good as new — either at your home or through our Barkingside showroom.
          </p>
          <button className="bg-[#00B9FF] text-white px-6 py-2 rounded-full font-medium hover:bg-[#00a7e5] transition">
            Book Now
          </button>
        </div>

        {/* Right Section - Testimonial Box */}
        <div className="md:w-[350px] h-[320px] w-full rounded-lg  p-6 relative overflow-hidden">
          {/* Top Quote Image */}
          <img
            src="/img/top.png"
            alt="Top Quote"
            className="absolute top-4 left-0 w-6 h-6"
          />

          <p className="text-gray-800 text-[15px] leading-relaxed z-10 relative mt-[30px]">
            Choosing SpecsAtHome was one of the best decisions I’ve made.
            The home visit service was seamless, the advice was spot-on,
            and my glasses came back better than new. I wouldn’t go anywhere else now —
            it’s personal, professional and completely hassle-free.
          </p>

          <p className="mt-4 font-semibold text-black z-10 relative">-Alastair Cook</p>

          {/* Bottom Quote Image */}
          <img
            src="/img/down.png"
            alt="Bottom Quote"
            className="absolute bottom-4 right-4 w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
