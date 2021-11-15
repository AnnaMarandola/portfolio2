import Home from "./Home";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    
  },
});

function App({classes}) {
  return (
    <div classname={classes.root}>
      <Home />
    </div>
  );
}

export default withStyles(styles)(App);
