import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;
