import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
  },
});

const ServicesSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">ServicesSection</Typography>
    </div>
  );
};

export default withStyles(styles)(ServicesSection);
