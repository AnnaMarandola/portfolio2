import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

const TextContainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">TextContainer</Typography>
    </div>
  );
};

export default withStyles(styles)(TextContainer);
