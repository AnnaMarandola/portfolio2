import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Projects from "./Projects";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0",
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "15rem"
    },
  },
});

const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Portfolio
      </Typography>
      <Projects />
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
