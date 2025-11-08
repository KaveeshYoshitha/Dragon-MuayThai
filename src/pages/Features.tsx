import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="py-24 bg-[#121212]">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-saira mb-4 text-[#f5cf11]">WHY TRAIN WITH US?</h2>
          <p className="text-lg text-gray-300">
            Experience the authentic spirit of Muay Thai with elite coaching and a strong community. Whether you're a beginner or fighter, we're here for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-dragon-darker rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="mb-4 text-dragon-red">
              <FontAwesomeIcon icon={faDumbbell} color="#f5cf11" size="2x" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Authentic Training</h3>
            <p className="text-gray-400">
              Learn the traditional techniques and philosophies of Muay Thai straight from seasoned professionals.
            </p>
          </div>

          <div className="p-8 bg-dragon-darker rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="mb-4 text-dragon-gold">
                <FontAwesomeIcon icon={faPeopleGroup} color="#f5cf11" size="2x" />

            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">All Skill Levels</h3>
            <p className="text-gray-400">
              Whether you're stepping into the ring for the first time or training for a fight, we welcome all.
            </p>
          </div>

          <div className="p-8 bg-dragon-darker rounded-lg shadow-lg hover:shadow-2xl transition">
            <div className="mb-4 text-dragon-red">
                <FontAwesomeIcon icon={faMedal} color="#f5cf11" size="2x" />

            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Fighter Development</h3>
            <p className="text-gray-400">
              Build strength, agility, and confidence through structured progression and fight-ready drills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;