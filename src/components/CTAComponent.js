import { button, Typography, withStyles } from "@material-ui/core";
import BG from "../assets/bg-shorten-desktop.svg";
import BGMOBILE from "../assets/bg-boost-mobile.svg";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BGMOBILE})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundColor: "#303030",
    height: "35rem",
    width: "100%",
    margin: "5rem 0",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${BG})`,
      height: "22rem",
      width: "100%",
    },
  },
  textWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem 1rem",
    [theme.breakpoints.up("md")]: {
      padding: "3rem",
    },
  },
  text: {
    // color: "white",
    padding: ".5rem",
    fontWeight: 600,
    textAlign: "center",
  },
  contactButton: {
    marginTop: "3rem",
    width: "10rem",
    height: "4rem",
    padding: "1rem 2rem",
    borderRadius: "30px",
    color: "white",
    textTransform: "uppercase",
    fontSize: "1.2rem",
    fontWeight: 600,
    border: "solid 2px #303030",
    boxShadow: "5px 5px 23px -12px #505050",
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    "&:hover": {
      background:
        "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
    },
    [theme.breakpoints.up("md")]: {
        margin: "2rem 0 0 80%",
    },
  },
});
const CTAComponent = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.textWrapper}>
        <Typography variant="h4" className={classes.text}>
          {" "}
          Une idée ? Un projet ?
        </Typography>
        <Typography variant="h4" className={classes.text}>
          {" "}
          Prenons contact pour échanger sur vos besoins
        </Typography>
        <Typography variant="h5" className={classes.text}>
          {" "}
          [ devis gratuit ]
        </Typography>

        <button className={classes.contactButton}>Contact</button>
      </div>
    </div>
  );
};

export default withStyles(styles)(CTAComponent);
