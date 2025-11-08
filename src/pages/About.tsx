import Inside from "../assets/inside.webp";

const About = () => {
  return (
    <section className="py-24 min-h-screen bg-[#0a0a0a] " id="About">
      <div className="container mx-auto px-12 grid md:grid-cols-2 gap-12 items-center  ">
        <div>
          <img
            src={Inside}
            alt="Inside of Dragon Muay Thai Gym"
            title="Inside of Dragon Muay Thai Gym "
            width="1600"
            height="701"
            loading="lazy"
            className="rounded-lg p-2 shadow-lg border-t-2 border-l-2 border-[#f5cf11]"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold font-saira text-white mb-6">
            {" "}
            <span className="text-[#f5cf11]  sm:border-b-4 sm:border-red-500 sm:pb-1">
              ABOUT
            </span>{" "}
            DRAGON MUAY THAI
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Dragon Muay Thai is a traditional Thai training center nestled in
            the historical city of Galle. With decades of combined experience,
            our instructor offers an immersive journey into the discipline of
            Muay Thai.
          </p>
          <ul className="list-disc text-gray-300 pl-6 space-y-2">
            <li>Authentic training inspired by Traditional Muay Thai </li>
            <li>Highly experienced and passionate coaches</li>
            <li>Training programs tailored for all skill levels</li>
            <li>A supportive community that feels like family</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
