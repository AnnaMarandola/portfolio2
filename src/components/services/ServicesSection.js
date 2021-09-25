import { Typography, withStyles } from "@material-ui/core";
import ServiceCards from "./ServiceCards";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Title from "../Title";

const styles = (theme) => ({
  root: {
    padding: "5rem",
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {},
  },
  subtitle: {
    fontSize: "2rem",
    // paddingBottom: "6rem",
    textAlign: "center",
    color: "#27282c"
  }
});

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Title title={"Services"} />
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
