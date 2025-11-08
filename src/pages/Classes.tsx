import boxingTraining from "../assets/boxing-training.webp";
import strength from "../assets/strength.webp";
import muayThai from "../assets/muay-thai-training.webp";
import fighter from "../assets/Fighter-training.webp";

const classes = [
  {
    name: "Muay Thai Training",
    alt: "Muay Thai Training at Dragon Muay Thai Galle",
    img: muayThai,
    description:
      "Master the art of eight limbs. Learn authentic Muay Thai techniques — from powerful kicks to precise elbows — under the guidance of professional fighters. Ideal for all skill levels.",
  },
  {
    name: "Boxing Training",
    alt: "Boxing Training at Dragon Muay Thai Galle",
    img: boxingTraining,
    description:
      "Sharpen your punches, footwork, and defense with our high-energy boxing sessions. Improve coordination, endurance, and striking accuracy with expert coaching.",
  },
  {
    name: "Personal Training",
    alt: "Personal Training at Dragon Muay Thai Galle",
    img: fighter,
    description:
      "Experience one-on-one coaching tailored to your goals. Our personal training sessions focus on technique refinement, strength development, and mental conditioning — helping you push beyond limits and unlock your full potential in Muay Thai and overall fitness.",
  },
  {
    name: "Strength & Conditioning",
    alt: "Strength and Conditioning at Dragon Muay Thai Galle",
    img: strength,
    description:
      "Build explosive power, endurance, and agility. A dynamic blend of strength circuits and Muay Thai-inspired fitness routines to push your limits and sculpt a fighter’s physique.",
  },
];

const Classes = () => {
  return (
    <section id="Classes" className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#f5cf11] uppercase tracking-widest mb-16 ">
          Our <span className="text-red-500">Classes</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {classes.map((cls) => (
            <div
              key={cls.name}
              className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_#f5cf11]"
            >
              <img
                src={cls.img}
                alt={cls.alt}
                title={cls.alt}
                width="1600"
                height="701"
                loading="lazy"
                className="w-full h-52 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">
                  {cls.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cls.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
