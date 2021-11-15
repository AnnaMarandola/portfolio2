import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
});

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <Typography variant="h2">Footer</Typography>
    </div>
  );
}

export default withStyles(styles)(Footer);
