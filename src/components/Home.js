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
  },
});

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Home);
