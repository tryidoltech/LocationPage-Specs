function Area() {
  const serviceAreas = [
    { name: 'Camden', link: '#' },
    { name: 'Romford', link: '#' },
    { name: 'Ilford', link: '#' },
    { name: 'Barking', link: '#' },
    { name: 'Croydon', link: '#' },
    { name: 'Ealing', link: '#' },
    { name: 'Hammersmith', link: '#' },
    { name: 'Southall', link: '#' },
    { name: 'Walthamstow', link: '#' },
    { name: 'Stratford', link: '#' },
    { name: 'Islington', link: '#' },
    { name: 'Lewisham', link: '#' },
    { name: 'Wimbledon', link: '#' },
    { name: 'Hackney', link: '#' },
    { name: 'Harrow', link: '#' },
    { name: 'Enfield', link: '#' }
  ];

  return (
    <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Service Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From North to South, East to West — we bring trusted optical care to homes across London's many boroughs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Service Areas List */}
          <div className="grid grid-cols-2 gap-4">
            {serviceAreas.map((area, index) => (
              <a 
                key={index}
                href={area.link}
                className="text-gray-700 hover:text-blue-600 underline font-medium py-1"
              >
                {area.name}
              </a>
            ))}
            
            <div className="col-span-2 mt-6">
              <p className="text-gray-500 italic mb-4">Can't find your place? No Worries!</p>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Map */}
          <div className="lg:pl-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <span>Map of London Service Areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Area;
