import { Button, Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {},
  },
});
const Project = ({ classes, handleClose }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h1">Hey!</Typography>
      <Button onClick={handleClose}>X</Button>
    </div>
  );
};

export default withStyles(styles)(Project);
