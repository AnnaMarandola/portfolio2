import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import ServiceCard from "./ServiceCard";

const styles = (theme) => ({
  root: {
    // backgroundColor: theme.palette.secondary.main,

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
      padding: "4rem 9%",
      justifyContent: "flex-start"
    },
  },
  title: {
    textAlign: "center",
    padding: "2rem",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      padding: "0 0 2rem 0",
    }
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      padding: "5rem 0",
    },
    [theme.breakpoints.up("lg")]: {},
  },
});

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Services
      </Typography>
      <div className={classes.cardsContainer}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default withStyles(styles)(ServicesSection);
