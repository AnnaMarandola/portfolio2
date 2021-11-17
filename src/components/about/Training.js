import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
    root: {
        border: "3px solid pink",

    }
});
const Training = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h3">Certifications</Typography>
    </div>
  );
};

export default withStyles(styles)(Training);
