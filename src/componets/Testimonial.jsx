// import { Star } from "lucide-react";
// import { useEffect } from "react";

// const Testimonial = () => {
//   // Inject custom animation for seamless scroll
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       @keyframes marqueeRight {
//         0% { transform: translateX(0); }
//         100% { transform: translateX(-50%); }
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <div className="bg-white py-16 px-4">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-center mb-12">
//         What Our Customers Say
//       </h2>

//       {/* Google Rating + Testimonials (no grid) */}
//       <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8">
//         {/* Google Rating */}
//         <div className="flex flex-col items-center justify-center text-center">
//           <div className="text-5xl font-bold flex items-center gap-2">
//             4.9
//             <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
//           </div>
//           <p className="mt-2 text-lg font-medium">Google Rating</p>
//         </div>

//         {/* Two Testimonials */}
//         <div className="flex flex-col lg:flex-row gap-6 w-[1400px]">
//           {[1, 2].map((_, index) => (
//             <div
//               key={index}
//               className="flex-1 border-2 border-gray-200 rounded-xl p-6 shadow-sm bg-white"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 rounded-full bg-gray-300" />
//                 <div>
//                   <p className="font-semibold">Alastair Cook</p>
//                   <p className="text-sm text-gray-500">London, England</p>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-700 mb-4">
//                 I booked SpecsAtHome for a glasses repair in Chelmsford and
//                 couldn’t be happier. The optician arrived on time, was very
//                 professional, and fixed my frames in under 30 minutes. It saved
//                 me the hassle of travelling into town. The service felt personal
//                 and reliable — definitely using them again.
//               </p>
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-5 h-5 text-yellow-400 fill-yellow-400"
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Marquee Section (continuous, no gaps) */}
//       <div className="overflow-hidden mt-16 w-[1440px] mx-auto h-[220px]">
//   <div className="relative w-full h-full">
//     <div
//       className="absolute top-0 left-0 flex gap-6 w-max"
//       style={{
//         animation: "marqueeRight 60s linear infinite",
//       }}
//     >
//       {/* Duplicate testimonials for seamless loop */}
//       {[...Array(2)].flatMap(() =>
//         [...Array(8)].map((_, i) => (
//           <div
//             key={`${i}-${Math.random()}`}
//             className="w-[400px] bg-white border border-gray-200 rounded-xl p-4 shadow text-sm flex-shrink-0"
//           >
//             <p className="italic mb-2">
//               "Brilliant service. Repaired my son’s glasses within an hour of
//               calling. No stress, no travel."
//             </p>
//             <p className="font-semibold text-right mb-2">- Alastair Cook</p>
//             <div className="flex gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className="w-4 h-4 text-yellow-400 fill-yellow-400"
//                 />
//               ))}
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Testimonial;



import { Star } from "lucide-react";
import { useEffect } from "react";

const Testimonial = () => {
  // Inject marquee animation
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes marqueeRight {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        {/* Google Rating + Static Testimonials */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
          {/* Google Rating */}
          {/* <div className="flex flex-col items-center justify-center text-center m-[80px]"> */}
          <div className="flex flex-col items-center justify-center text-center mr-20 min-w-[200px] ">

            <div className="text-5xl font-bold flex items-center gap-2 ">
              4.9
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            </div>
            <p className="mt-2 text-lg font-medium">Google Rating</p>
          </div>

          {/* Two Static Testimonials with Wider Width */}
          <div className="flex flex-col lg:flex-row gap-6 w-full justify-center">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="w-[500px] border-2 border-gray-200 rounded-xl p-6 shadow-sm bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300" />
                  <div>
                    <p className="font-semibold">Alastair Cook</p>
                    <p className="text-sm text-gray-500">London, England</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  I booked SpecsAtHome for a glasses repair in Chelmsford and
                  couldn’t be happier. The optician arrived on time, was very
                  professional, and fixed my frames in under 30 minutes. It
                  saved me the hassle of travelling into town. The service felt
                  personal and reliable — definitely using them again.
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Section (Continuous Scroll) */}
        <div className="overflow-hidden mt-16 h-[220px] w-full">
          <div className="relative w-full h-full">
            <div
              className="absolute top-0 left-0 flex gap-6 w-max"
              style={{
                animation: "marqueeRight 60s linear infinite",
              }}
            >
              {[...Array(2)].flatMap(() =>
                [...Array(8)].map((_, i) => (
                  <div
                    key={`${i}-${Math.random()}`}
                    className="w-[400px] bg-white border border-gray-200 rounded-xl p-4 shadow text-sm flex-shrink-0"
                  >
                    <p className="italic mb-2">
                      "Brilliant service. Repaired my son’s glasses within an
                      hour of calling. No stress, no travel."
                    </p>
                    <p className="font-semibold text-right mb-2">
                      - Alastair Cook
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
