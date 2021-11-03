import { Typography, withStyles } from "@material-ui/core";
import ServiceCards from "./ServiceCards";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Title from "../Title";

const styles = (theme) => ({
  root: {
    padding: "0 5% 5% 5%",
    // backgroundColor: "#29282e",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {},
  },
  subtitle: {
    textAlign: "center",
    // color: "#838383",
    paddingBottom: "4rem",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "4rem",

    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "0rem",

    }

  }
});

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Title title={"Services"}  />
      <Typography className={classes.subtitle} variant="h4">Des prestations adaptées à vos besoins !</Typography>
      {/* <ScrollAnimation
        animateIn="animate__fadeInLeftBig"
        animateOut="animate__fadeIn"
        duration={1}
        delay={300}
      > */}
        <ServiceCards />
      {/* </ScrollAnimation> */}
    </div>
  );
};

export default withStyles(styles)(ServicesSection);
