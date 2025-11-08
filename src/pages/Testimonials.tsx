import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "David Lynch",
    review:
      "I really recommend training at Dragon Muay Thai! I am a tourist with no experience in Muay Thai but Chaminda was very patient in teaching the basics to me! Really good workout and very enjoyable, and it doesn't matter what level of your experience, Chaminda will tailor the class to suit you!",

    time: "3 weeks ago",
  },
  {
    name: "Chathurangani Sadamali",
    review:
      "I’ve been training at Dragon Muay Thai Club Galle and it’s been an amazing experience! The coaches are highly skilled, friendly, and very supportive. Whether you’re a beginner or experienced fighter, they tailor the training to your level. The atmosphere is motivating and everyone is respectful and disciplined. I’ve improved my fitness, technique, and confidence a lot since I started here. Highly recommend this place for anyone serious about Muay Thai or just looking to get in shape!",
    time: "1 month ago",
  },
  {
    name: "Amintha Adhithya",
    review:
      "Dragon Muay Thai Club is hands down the best place to train in Galle.Kru Chaminda is a true master of Muay Thai – he’s not just an expert coach, but also someone who cares about every single student. Whether you’re a complete beginner or a fighter chasing gold, he gives you full attention, pushes you hard, and makes sure you’re learning real technique, not just going through the motions.",
    time: "1 month ago",
  },
  {
    name: "Ganidu Chamath",
    review:
      "An unforgettable journey with Dragon Muay Thai Galle! I’ve been training at Dragon Muay Thai Galle for the past three years under Kru Chaminda, and it has truly changed my life. The discipline, strength, and skill I’ve gained here helped me achieve a silver medal at the National Muay Thai Championship — a dream come true!",
    time: "3 months ago",
  },
];

const Testimonials = () => {
  return (
    <section id="Testimonials" className="py-20 bg-black text-center">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-saira uppercase tracking-wide">
          <span className="text-[#f5cf11]">Student</span>{" "}
          <span className="text-white">Testimonials</span>
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Hear from our students about their experience training at Dragon Muay
          Thai Galle.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-[#1a1a1a] hover:bg-[#222] p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#f5cf11] flex items-center justify-center rounded-full">
                <FaQuoteRight className="text-black text-sm" />
              </div>

              <p className="text-gray-300 italic mb-6 text-sm">{`"${t.review}"`}</p>
              <div className="flex items-center justify-center mt-6">
                <div className="text-left">
                  <h4 className="font-semibold text-white">{t.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <a
            href="https://www.google.com/search?sca_esv=fe06bbe1a7ea018c&sxsrf=AE3TifPIRoKq1uKqtglsZmSshwdpPLp9ww:1761637037346&q=Dragon+muay+thai+galle&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzPEsQuWYUAYnGHPXfG1egzLHZAGK8tRzsIGNnfIL-mWOP-GJY69c7Kmo5VXynxOkJJCtTF5SXlO_n5uLIXMaxY0BCUNYY4u0Vl6qDsi4sysJ60Avg%3D%3D&sa=X&ved=2ahUKEwiW9NWuscaQAxWvwjgGHXgZMacQrrQLegQIKRAA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#f5cf11] text-black font-bold px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            See More on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
