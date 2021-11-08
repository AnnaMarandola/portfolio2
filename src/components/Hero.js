import { Button, Typography, withStyles } from "@material-ui/core";
import HAND from "../assets/header.svg";
import GITHUB from "../assets/contact-icons/github.svg";
import LINKEDIN from "../assets/contact-icons/linkedin.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import DownButton from "./DownButton";

const styles = (theme) => ({
  root: {
    marginTop: "-5rem",
    paddingBottom: "5rem",
    // height: "100vh",
    [theme.breakpoints.up("sm")]: {
      marginTop: "-8rem",

    },

  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5rem",
    paddingBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "10rem",
      marginLeft: "10%",
      alignItems: "flex-start",
      paddingBottom: "5rem",

    },
    [theme.breakpoints.up("lg")]: {},
  },
  annaM: {
    margin: "2rem 0",
    fontSize: "2rem",
    [theme.breakpoints.up("sm")]: {
      margin: "2rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35rem",
      fontSize: "3rem",
    },
  },
  maj: {
  },
  subtitleContainer: {
    padding: "3rem 0 4rem 1rem",
    [theme.breakpoints.up("sm")]: {
      padding: "3rem 0",

    },
  
  },
  subtitle: {
    fontSize: "1.5rem",
    padding: "0.3rem 0",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "35rem",
    },
  },
  developer: {
    fontSize: "2.2rem",
    fontFamily: "Poppins",
    fontWeight: 500,
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    },
  },
  buttonsContainer: {
    display: "flex",
    // paddingRight: "50%",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
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
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
    },
  },
  linkText: {
    textDecoration: "none",
  },
  imgContainer: {
    textAlign: "center",
    padding: "10rem 0 0rem 3rem",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
  codeImg: {
    width: "70%",
  },
});

const Hero = ({ classes }) => {
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.textContainer}>
          <Typography className={classes.annaM}>
            <span className={classes.maj}>A</span>nna{" "}
            <span className={classes.maj}>M</span>arandola
          </Typography>
          <Typography className={classes.developer}>Développeur web</Typography>
          <Typography className={classes.developer}>freelance</Typography>
          <div className={classes.subtitleContainer}>
          <Typography className={classes.subtitle}>
            Création de sites internet
          </Typography>
          <Typography className={classes.subtitle}>
            Applications web / mobiles
          </Typography>
          </div>
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
        {/* <div className={classes.imgContainer}>
          <img
          src={HAND}
          alt="hand typing on keyboard"
          className={classes.codeImg}
        />
        </div> */}
      </header>
      <DownButton />
    </div>
  );
};

export default withStyles(styles)(Hero);
