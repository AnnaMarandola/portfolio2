import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Projects from "./Projects";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
  },
});

const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Portfolio
      </Typography>
      <Projects />
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
