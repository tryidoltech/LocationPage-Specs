// function Whyus() {
//   return (
//     <div>
//       <div>Why Choose Us?</div>
//       <div>
//         <div>
//           <img />
//           <h1>We come to You</h1>
//           <p>
//             No need to drive or post your frames — we handle everything in
//             person.
//           </p>
//         </div>
//         <div>
//           <img />
//           <h1>Expert advice</h1>
//           <p>
//             You’ll get guidance from a qualified Style & Vision Consultant, not
//             a sales assistant.
//           </p>
//         </div>
//         <div>
//           <img />
//           <h1>Affordable pricing</h1>
//           <p>
//             Reglazing is cheaper than buying new, and we’ll always explain your
//             options.
//           </p>
//         </div>
//         <div>
//           <img />
//           <h1>Local and trusted</h1>
//           <p>We’ve helped thousands of customers across Essex.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Whyus;



function Whyus() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <img src="1.png" alt="We come to you" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">We come to You</h3>
          <p className="text-sm text-gray-600">
            No need to drive or post your frames — we handle everything in person.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="2.png" alt="Expert advice" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert advice</h3>
          <p className="text-sm text-gray-600">
            You’ll get guidance from a qualified Style & Vision Consultant, not a sales assistant.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="3.png" alt="Affordable pricing" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Affordable pricing</h3>
          <p className="text-sm text-gray-600">
            Reglazing is cheaper than buying new, and we’ll always explain your options.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="4.png" alt="Local and trusted" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Local and trusted</h3>
          <p className="text-sm text-gray-600">
            We’ve helped thousands of customers across Essex.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
