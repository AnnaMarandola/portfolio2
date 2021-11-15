import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
  },
});

const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">PortfolioSection</Typography>
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
