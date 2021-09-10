import { Typography, withStyles } from "@material-ui/core";
import BG from "../assets/hero/5.jpg";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 50% ",
    backgroundSize: "cover",
    backgroundColor: "#3A3054",
    height: "50rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "5%",
    marginTop: "-5rem",
    opacity: 1,
  },
  textContainer: {
    backgroundColor: "#white",
  },
  annaM: {
    fontSize: "2rem",
    color: "#EFF1F7",
  },
  developer: {
    fontSize: "4rem",
    color: "#EFF1F7",
  },
});

const Hero = ({ classes }) => {
  return (
    <header className={classes.root}>
        <div className={classes.textContainer}>
          <Typography className={classes.annaM}>Anna Marandola</Typography>
          <Typography className={classes.developer}>
            Frontend developer
          </Typography>
        </div>
    </header>
  );
};

export default withStyles(styles)(Hero);
