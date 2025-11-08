import heroImage from "../assets/hero.webp";
import coach from "../assets/coach.webp";

const Hero = () => {
  return (
    <section
      className="relative h-[800px] flex items-center overflow-hidden"
      id="Home"
    >
      <div className="absolute inset-0 z-0 opacity-30 bg-thai-pattern"></div>
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full blur-[1px] sm:blur-[1px] sm:block hidden"
          src={heroImage}
          alt="Muay Thai Fighters at Dragon MuayThai Galle"
          title="Muay Thai Fighters at Dragon MuayThai Galle"
          width="1600"
          height="701"
        />
        <img
          className="object-cover w-full h-full blur-[1px] sm:hidden block"
          src={coach}
          alt="Muay Thai Fighters at Dragon MuayThai Galle"
          title="Muay Thai Fighters at Dragon MuayThai Galle"
          width="1600"
          height="701"
        />
      </div>
      {/* White overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-[#1313139f] bg-opacity-60"></div>
      <div className="container mx-auto px-4 z-20 relative mt-5 ">
        <div className="flex flex-col justify-center items-start h-[800px] text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-saira mb-4 leading-tight self-center">
            <span className="text-[#f5cf11]">UNLEASH</span> YOUR <br />
            <span className="text-red-500">WARRIOR</span> SPIRIT
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl self-center">
            Traditional Muay Thai training in the heart of Galle, Sri Lanka.
            Experience the ancient art of eight limbs with world-class trainers.
          </p>
          <div className="flex flex-wrap gap-4 self-center">
            <span className="btn-hover bg-red-500 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold tracking-wide text-lg transition-all cursor-pointer">
              <a href="tel:+94772333268">JOIN NOW</a>
            </span>
            <span className="btn-hover border-2 border-[#f5cf11] text-[#f5cf11] px-8 py-4 rounded-md font-bold tracking-wide text-lg transition-all cursor-pointer">
              <a href="#Classes">VIEW CLASSES</a>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark to-transparent z-30"></div>
    </section>
  );
};

export default Hero;
