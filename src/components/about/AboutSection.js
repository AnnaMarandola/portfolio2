import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Certifications from "./Certifications";
import Introduction from "./Introduction";
import SkillsSection from "./SkillsSection";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0"
  },
  title: {
    padding: "0 2rem 4rem 2rem",
    textAlign: "center",
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
      <Certifications />
    </div>
  );
};

export default withStyles(styles)(AboutSection);
