import { Typography, withStyles } from "@material-ui/core";
import PortfolioPreview from "./PortfolioPreview";

const styles = (theme) => ({
  root: {
    width: "100%",
    paddingBottom: "10rem",

    [theme.breakpoints.up("md")]: {},
  },

  title: {
    fontSize: "4rem",
    padding: "5rem 5%",
    textAlign: "center"
  },
});
const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Portfolio</Typography>
      <PortfolioPreview />
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
