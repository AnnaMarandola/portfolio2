import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import HEART from "../../assets/images/header/heart.svg";
import CTAButton from "../mui/CTAButton";
import SocialMediaButtons from "../contact/SocialMediaButtons";
import AnchorLink from "react-anchor-link-smooth-scroll";
const styles = (theme) => ({
  root: {
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    textAlign: "center",
    marginTop: "5rem",
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
      padding: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      textAlign: "left",
      alignItems: "flex-start",
      marginTop: "2rem",
      padding: "1rem",
    },
  },
  firstLine: {
    display: "flex",
    marginTop: "4rem",
  },
  purpleSpan: {
    color: theme.palette.primary.main,
    padding: "0 0.5rem",
  },
  title: {
    paddingBottom: "1rem",
  },
  textContainer: {
    // border: "1px solid purple",
    padding: "0 1.5rem",
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
  },
  introtext: {
    paddingBottom: "1rem",
    // border: "1px solid yellow",
  },
  buttonsContainer: {
    // border: "1px solid purple",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      alignItems: "flex-start",
      padding: "3rem 0",
    },
  },
  anchorLink: {
    textDecoration: "none",
  }
});

const TextContainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.firstLine}>
        <img src={HEART} alt="heart" />
        <Typography variant="body2">
          <span className={classes.purpleSpan}>Hello! je suis</span>Anna
          Marandola
        </Typography>
      </div>

      <Typography variant="h1" className={classes.title}>
        Développeur Web Freelance
      </Typography>

      <div className={classes.textContainer}>
        <Typography variant="body1" className={classes.introtext}>
          Vous cherchez un développeur pour créer le site Web de votre
          entreprise, le moderniser, implémenter de nouvelles fonctionnalités ou
          améliorer votre référencement ?
        </Typography>

        <Typography variant="body1" className={classes.introtext}>
          Vous êtes au bon endroit.
        </Typography>

        {/* <Typography variant="body1" className={classes.introtext}>
          Je réalise des sites et des applications web/mobiles adaptés à toutes
          les tailles d’écran et respectueux des standards du Web.
        </Typography> */}

        <Typography variant="body1" className={classes.introtext}>
          Offrez à vos clients une expérience de navigation optimale !
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <AnchorLink href="#services" className={classes.anchorLink}>
          <CTAButton>En savoir +</CTAButton>
        </AnchorLink>
        <SocialMediaButtons />
      </div>
    </div>
  );
};

export default withStyles(styles)(TextContainer);
