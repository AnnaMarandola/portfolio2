import { Button, Typography, withStyles } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DOWN from "../assets/down.svg";

const styles = (theme) => ({
  root: {
    textAlign: "center",
  },
  goDown: {
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "5px 5px 23px -8px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1rem",
    },
  },
});

const DownButton = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AnchorLink href="#about" className={classes.linkText}>
        <Button className={classes.goDown}>
          <img src={DOWN} alt="down arrow" />
        </Button>
      </AnchorLink>
    </div>
  );
};

export default withStyles(styles)(DownButton);
