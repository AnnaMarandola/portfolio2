import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    padding: "8rem 0",
    backgroundColor: "white",
    marginTop: "-0.3rem",
    [theme.breakpoints.up("md")]: {},
  },
  subtitle: {
    fontSize: "1.5rem",
    // paddingBottom: "6rem",
    textAlign: "center",
    // color: "#bcbdbc"
  }
});

const SubHeader = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.subtitle}>Lorem ipsum felis eu interdum maximus, et conditmentum nisi turpis nec ligula.</Typography>
      <Typography variant="h2" className={classes.subtitle}>Lorem ipsum felis eu interdum maximus, et conditmentum nisi turpis nec ligula.</Typography>
    </div>
  );
};

export default withStyles(styles)(SubHeader);
