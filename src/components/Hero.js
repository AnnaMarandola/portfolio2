import { Button, Typography, withStyles } from "@material-ui/core";
import HAND from "../assets/Wave.svg";
import GITHUB from "../assets/contact-icons/github.svg";
import LINKEDIN from "../assets/contact-icons/linkedin.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";


const styles = (theme) => ({
  root: {
    backgroundColor: "#29282e",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-5rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10%",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "10rem",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  annaM: {
    color: "white",
    margin: "2rem 0",
    fontSize: "1.8rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35rem",
    },
  },
  subtitle: {
    color: "white",
    margin: "2rem 0",
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35rem",
    },
  },
  developer: {
    fontSize: "2rem",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    },
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    padding: "2rem 0",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      width: "50%",
      padding: "3rem 0",
    },
    [theme.breakpoints.up("lg")]: {},
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
  mediaIcon: {
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)"
    }
  },
  linkText: {
    textDecoration: "none",
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
        <Typography className={classes.developer}>Développeur web</Typography>
        <Typography className={classes.developer}>freelance</Typography>
        <Typography className={classes.subtitle}>
          Création de sites internet, applications web et mobiles
        </Typography>
        <div className={classes.buttonsContainer}>
          <a
            href="https://www.linkedin.com/in/anna-m-42ab3b18a/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkText}
          >
            <img
              className={classes.mediaIcon}
              src={LINKEDIN}
              alt="linkedin link"
            />
          </a>
          <a
            href="https://github.com/AnnaMarandola"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkText}
          >
            <img
              className={classes.mediaIcon}
              src={GITHUB}
              alt="twitter link"
            />
          </a>

          <AnchorLink href="#contact" className={classes.linkText}>
            <Button className={classes.contactButton} aria-label="Contact">
              Contact
            </Button>
          </AnchorLink>
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
