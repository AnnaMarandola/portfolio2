import { Card, Typography, withStyles } from "@material-ui/core";
import MAP from "../assets/map.png";

const styles = (theme) => ({
  root: {
    padding: "0.5rem",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      padding: "3rem",
      width: "30%",
    },
  },
  mapContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "3rem",
    },
  },
  map: {
    width: "95%",
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  title: {
    paddingTop: "2rem",
  },
});

const ContactDetails = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.detailsContainer}>
        <Typography className={classes.title}>adresse</Typography>
        <Typography>85 bvd Gabriel Koenigs, 31300 Toulouse</Typography>
        <hr />
        <Typography className={classes.title}>téléphone</Typography>
        <Typography>(+33)6.15.42.10.45</Typography>
        <hr />
        <Typography className={classes.title}>e-mail</Typography>
        <Typography>anna.yws@gmail.com</Typography>
        <hr />
        <Typography className={classes.title}>SIREN</Typography>
        <Typography>424 242 424</Typography>
        <hr />
      </div>
      <div className={classes.mapContainer}>
        <Typography>github linkdin</Typography>
        <hr />
        <img src={MAP} alt="adresse plan" className={classes.map} />
        <Typography className={classes.title}>horaires</Typography>
        <Typography>Lundi - Vendredi</Typography>
        <Typography>9h00 - 19h30</Typography>
        <hr />
      </div>
    </div>
  );
};

export default withStyles(styles)(ContactDetails);
