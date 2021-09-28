import { Typography, withStyles } from "@material-ui/core";
import WAVE from "../assets/Meteor.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "5rem 0",
    // paddingBottom: "14rem",
    backgroundColor: "white",
    marginTop: "-0.3rem",
    // backgroundImage: `url(${WAVE})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    [theme.breakpoints.up("md")]: {},
  },
  subtitle: {
    // fontSize: "2rem",
    textAlign: "left",
    marginLeft: "10%",
  }
});

const SubHeader = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.subtitle}>Création de sites web et applications web/mobiles à Toulouse:</Typography>
      <Typography variant="h5" className={classes.subtitle}>site vitrine, corporate, événementiel, e-commerce, solutions sur mesure  </Typography>
    </div>
  );
};

export default withStyles(styles)(SubHeader);
