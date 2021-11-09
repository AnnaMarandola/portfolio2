import AboutSection from "./about/AboutSection";
import ContactSection from "./contact/ContactSection";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import PortfolioSection from "./portfolio/PortfolioSection";
import ServicesSection from "./services/ServicesSection";
import SubHeader from "./subheader/SubHeader";
// import ScrollAnimation from "react-animate-on-scroll";
import { withStyles, Fab } from "@material-ui/core";
import "animate.css/animate.min.css";
import MOON from "../assets/MOON.svg";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {},
  },
  fab: {
    marginLeft: "5%",
    marginTop: "-8rem",
    [theme.breakpoints.up("md")]: {},
  },
});

const LandingPage = ({ classes, onToggleDark, status }) => {
  console.log("status", status);
  return (
    <div className={classes.root}>
      <Navbar status={status} />
      <Fab
        onClick={onToggleDark}
        size="small"
        aria-label="toggle theme"
        className={classes.fab}
        style={
          status === "dark"
            ? { backgroundColor: "#303030" }
            : { backgroundColor: "white" }
        }
      >
        <img src={MOON} alt="dark mode icon" />
      </Fab>
      <Hero />
      <section id="about">
        {/* <ScrollAnimation animateIn="animate__fadeInUp"  duration={1} delay={100}> */}
        <SubHeader />
        {/* </ScrollAnimation> */}
      </section>
      <section id="services">
        {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1} delay={100}> */}
        <ServicesSection />
        {/* </ScrollAnimation> */}
      </section>
      <section id="portfolio">
        {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1} delay={100}> */}
        <PortfolioSection />
        {/* </ScrollAnimation> */}
      </section>
      <section id="skills">
        {/* <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={1} delay={100}> */}
        <AboutSection />
        {/* </ScrollAnimation> */}
      </section>
      <section id="contact">
        {/* <ScrollAnimation animateIn="animate__fadeInUp" duration={1} delay={100}> */}
        <ContactSection />
        {/* </ScrollAnimation> */}
      </section>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(LandingPage);
