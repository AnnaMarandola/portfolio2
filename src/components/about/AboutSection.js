import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Certifications from "./Certifications";
import Introduction from "./Introduction";
import SkillsSection from "./SkillsSection";

const styles = (theme) => ({
  root: {
    border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 0"
  },
  title: {
    padding: "0 2rem 2rem 2rem",
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
