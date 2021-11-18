import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Projects from "./Projects";
import CTAButton from "../mui/CTAButton";

const styles = (theme) => ({
  root: {
    border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 0",
  },
});

const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">
        Portfolio
      </Typography>
      <Projects />
      <CTAButton>Voir tous les projets</CTAButton>
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
