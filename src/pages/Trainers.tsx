import CoachBackground from "../assets/Background-coach.png";

const CoachSection = () => {
  return (
    <section
      className="relative bg-black text-white flex flex-col md:flex-row items-center md:items-center justify-between min-h-screen px-4 sm:px-6 md:px-20 py-16"
      style={{
        backgroundImage: `url(${CoachBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
      id="Coach"
    >
      {/* Tagline + description under it */}
      <div className="relative w-full px-4 sm:px-6 max-w-full md:absolute md:top-20 md:left-3/6 md:mt-20 md:max-w-lg">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
          {`Meet our `}{" "}
          <span className="text-[#f5cf11] sm:border-b-4 sm:border-red-500 sm:pb-1">
            Coach
          </span>
        </h2>

        <div className="mt-6 text-white">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f5cf11] mb-2">
            KRU CHAMINDA GAMAGE
          </h3>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            A Muay Thai master from Sri Lanka with over 28 years of experience
            training and mentoring fighters across the globe. Kru Chaminda
            Gamage has dedicated his life to preserving the true spirit of Muay
            Thai — blending discipline, respect, and relentless determination.
            As a coach, he focuses on building not only champions in the ring
            but also strong, confident individuals who carry the values of
            martial arts into everyday life. His guidance has inspired countless
            athletes to reach their peak performance and embrace the warrior
            mindset.
          </p>
        </div>
      </div>

      {/* (Optional) keep space for visuals or other layout elements */}
    </section>
  );
};

export default CoachSection;
