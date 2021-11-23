import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import ServiceCard from "./ServiceCard";
import services from "../../data/services.json";
import ServiceCard2 from "./ServiceCard2";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    padding: "0 0 4rem 0",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      padding: 0,
      minHeight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 5%",
      minHeight: "100vh",
      paddingTop: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4rem 0",
      justifyContent: "flex-start",
    },
  },
  title: {
    textAlign: "center",
    padding: "2rem",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      padding: "0 0 2rem 0",
    },
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
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "10rem"
      
    },
  },
});

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Services
      </Typography>
      {/* <div className={classes.cardsContainer}>
        {services.map((service, id) => (
          <ServiceCard key={id} service={service} />
        ))}
      </div> */}
      <div className={classes.cardsContainer}>
        {services.map((service, id) => (
          <ServiceCard2 key={id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(ServicesSection);
