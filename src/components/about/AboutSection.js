import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Introduction from "./Introduction";
import SkillsSection from "./SkillsSection";
import Training from "./Training";

const styles = (theme) => ({
  root: {
    border: "3px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    padding: "2rem",
  },
});

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        A propos
      </Typography>
      <Introduction />
      <SkillsSection />
      <Training />
    </div>
  );
};

export default withStyles(styles)(AboutSection);
