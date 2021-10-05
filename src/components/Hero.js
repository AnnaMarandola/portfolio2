import { Button, Typography, withStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import HAND from "../assets/hand.jpg";
import GITHUB from "../assets/contact-icons/github.svg";
import LINKEDIN from "../assets/contact-icons/linkedin.svg";


const styles = (theme) => ({
  root: {
    backgroundColor: "#29282e",
    height: "fit-content",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-5rem",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
    }
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10%",
    paddingTop: "10rem",
    paddingBottom: "5rem",
  },
  annaM: {
    fontSize: "2rem",
    color: "white",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5rem",
    }
  },
  developer: {
    fontSize: "2.5rem",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    }
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: "2rem 0",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      width: "60%",
      padding: "3rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
    }
  },
  contactButton: {
    padding: "1rem 2rem",
    borderRadius: "30px",
    color: "white",
    boxShadow: "5px 5px 23px -12px gray",
    background:
    "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    "&:hover": {
      background:
      "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
    },
  },
  imgContainer: {
    width: "40%",
  },
  codeImg: {
    width: "110%",
  },
});

const Hero = ({ classes }) => {
  return (
    <header className={classes.root}>
      <div className={classes.textContainer}>
        <Typography className={classes.annaM}>Anna Marandola</Typography>
        <Typography className={classes.developer}>
          Développeur web
        </Typography>
        <Typography className={classes.annaM}>spécialisée en dévelopement front-end - React.js</Typography>

        <div className={classes.buttonsContainer}>
          <img
            className={classes.mediaIcon}
            src={LINKEDIN}
            alt="linkedin link"
          />
          <img
            className={classes.mediaIcon}
            src={GITHUB}
            alt="twitter link"
          />
          <Button className={classes.contactButton} aria-label="Contact">
            Contact
          </Button>
        </div>
      </div>
      <div className={classes.imgContainer}>
        {/* <img
          src={HAND}
          alt="hand typing on keyboard"
          className={classes.codeImg}
        /> */}
      </div>
    </header>
  );
};

export default withStyles(styles)(Hero);
