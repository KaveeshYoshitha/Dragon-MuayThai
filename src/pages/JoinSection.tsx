import React from "react";

const JoinSection: React.FC = () => {
  const handleCall = () => {
    window.location.href = "tel:0772333268";
  };

  return (
    <section
      id="joinsection"
      className="py-20 bg-red-700 relative overflow-hidden cursor-default"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide uppercase">
            START YOUR MUAY THAI JOURNEY TODAY
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Join Dragon Muay Thai and transform your body and mind through the
            ancient art of eight limbs.
          </p>

          <button
            onClick={handleCall}
            className="bg-[#f5cf11] text-black px-10 py-4 rounded-md font-bold tracking-wide text-lg uppercase transition-transform transform hover:scale-105 hover:bg-[#ffe45e] shadow-md"
          >
            Get a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
