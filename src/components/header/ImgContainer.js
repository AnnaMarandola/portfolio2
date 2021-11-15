import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
});

const ImgContainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2">ImgContainer</Typography>
    </div>
  );
};

export default withStyles(styles)(ImgContainer);
