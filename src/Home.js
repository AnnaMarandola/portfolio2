import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import AboutSection from "./components/about/AboutSection";
import Footer from "./components/Footer";
import Hero from "./components/header/Hero";
import Navbar from "./components/header/Navbar";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import ServicesSection from "./components/services/ServicesSection";

const styles = (theme) => ({
  root: {},
});

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1">home</Typography>
      <Navbar />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Home);
