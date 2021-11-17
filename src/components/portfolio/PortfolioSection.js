import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
  },
  title: {
    textAlign: "center",
  }
});

const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>Portfolio</Typography>
      <Typography variant="h6" className={classes.title}>Quelques réalisations...</Typography>
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
