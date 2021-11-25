import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import HEART from "../../assets/images/header/heart.svg";
import CTAButton from "../mui/CTAButton";
import SocialMediaButtons from "../contact/SocialMediaButtons";
import AnchorLink from "react-anchor-link-smooth-scroll";
const styles = (theme) => ({
  root: {
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
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      textAlign: "left",
      width: "100%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "35%",
      marginTop: "2rem",
      padding: "1rem",
    },
  },
  firstLine: {
    display: "flex",
    padding: "4rem 0 1rem 0",
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      textAlign: "left ",
      padding: "2rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "2rem 0",
    },
  },
  purpleSpan: {
    color: theme.palette.primary.main,
    padding: "0 0.5rem",
    fontSize: "1.2rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",

    }
  },
  title: {
    paddingBottom: "1rem",
  },
  textContainer: {
    padding: "0 1.5rem",
    [theme.breakpoints.up("md")]: {
      padding: 0,
    },
  },
  introtext: {
    paddingBottom: "1rem",
  },
  buttonsContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "60%",
      alignItems: "flex-start",
      padding: "3rem 0",
    },
  },
  anchorLink: {
    textDecoration: "none",
  },
});

const TextContainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.firstLine}>
        <img src={HEART} alt="heart" />
        <Typography variant="h5">
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

        <Typography variant="body2" className={classes.introtext}>
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
