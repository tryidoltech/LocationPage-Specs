import React from "react";

const services = [
  {
    title: "Sunglasses",
    img: "img/one.png", 
  },
  {
    title: "Reglazing Glasses",
    img: "img/two.png", 
  },
  {
    title: "Same-Day Glasses",
    img:  "img/one.png", 
  },
  {
    title: "Consultancy Services",
    img: "img/two.png", 
  },
];

const OtherServices = () => {
  return (
    <div className="text-center py-12 bg-white">
      <h2 className="text-2xl font-medium mb-10">Other Services We Offer</h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="w-64 h-[300px] bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full  h-[250px] object-cover"
            />
<div className="py-2 px-4 text-left text-lg font-medium">{service.title}</div>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
        Explore More
      </button>
    </div>
  );
};

export default OtherServices;
