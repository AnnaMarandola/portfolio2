import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
  },
});

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">AboutSection</Typography>
    </div>
  );
};

export default withStyles(styles)(AboutSection);
