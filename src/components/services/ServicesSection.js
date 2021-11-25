import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import services from "../../data/services.json";
import Booster from "./Booster";
import ServiceCard from "./ServiceCard";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "0 1rem 4rem 1rem",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      padding: 0,
      minHeight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 5%",
      paddingTop: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4rem 0",
      justifyContent: "flex-start",
      minHeight: "100%",
    },
  },
  title: {
    textAlign: "center",
    padding: "2rem",
    [theme.breakpoints.up("md")]: {},
  },
  introSection: {
    padding: "1rem 2rem 3rem 2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 4rem 4rem",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      padding: "3rem 8rem 5rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "4rem",
    },
  },
  introText: {
    color: "white",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
});

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Services
      </Typography>
      <div className={classes.introSection}>
        <Typography variant="body1" className={classes.introText}>
          De la conception à la mise en ligne, je vous propose un accompagnement
          et des solutions sur mesure dans les differentes étapes de vos
          projects web
        </Typography>
      </div>
      <div className={classes.cardsContainer}>
        {services.map((service, id) => (
          <ServiceCard key={id} service={service} />
        ))}
      </div>
      <Booster />
    </div>
  );
};

export default withStyles(styles)(ServicesSection);
