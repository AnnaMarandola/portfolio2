import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "5rem 0",
    backgroundColor: "white",
    marginTop: "-0.3rem",
    [theme.breakpoints.up("md")]: {},
  },
  subtitle: {
    // fontSize: "2rem",
    textAlign: "center",
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
