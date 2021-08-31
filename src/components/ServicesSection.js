import { Typography, withStyles } from "@material-ui/core";
import ServiceCards from "./ServiceCards";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const styles = (theme) => ({
  root: {
    padding: "5rem 5%",
    [theme.breakpoints.up("md")]: {},
  },
  title: {
    fontSize: "4rem",
    paddingBottom: "2rem",
    textAlign: "center"

  },
  subtitle: {
    fontSize: "1.5rem",
    paddingBottom: "6rem",
    textAlign: "center"
  }
});

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Services</Typography>
      <Typography className={classes.subtitle}>Lorem ipsum felis eu interdum maximus, et conditmentum nisi turpis nec ligula.</Typography>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeIn"
        duration={1}
        delay={300}
      >
        <ServiceCards />
      </ScrollAnimation>
    </div>
  );
};

export default withStyles(styles)(ServicesSection);
