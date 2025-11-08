import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Classes from "./pages/Classes";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import JoinSection from "./pages/JoinSection";
import Testimonials from "./pages/Testimonials";
import Trainers from "./pages/Trainers";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Trainers />
      <Classes />
      <Testimonials />
      <JoinSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
