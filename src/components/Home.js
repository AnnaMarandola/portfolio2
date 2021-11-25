import { withStyles } from "@mui/styles";
import AboutSection from "./about/AboutSection";
import ContactSection from "./contact/ContactSection";
import Footer from "./Footer";
import Hero from "./header/Hero";
import Navbar from "./header/Navbar";
import PortfolioSection from "./portfolio/PortfolioSection";
import ServicesSection from "./services/ServicesSection";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
});

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <Hero />
      <section id="services">
      <ServicesSection />
      </section>
      <section id="portfolio">
      <PortfolioSection />
      </section>
      <section id="about">
      <AboutSection />
      </section>
      <section id="contact">
      <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Home);
