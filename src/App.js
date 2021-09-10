import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero2 />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
