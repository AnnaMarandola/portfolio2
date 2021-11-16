import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import LINKEDIN from "../../assets/images/contact/linkedin.svg";
import GITHUB from "../../assets/images/contact/github.svg";
import INSTA from "../../assets/images/contact/insta.svg";
import HEART from "../../assets/images/header/heart.svg";
import CTAButton from "../mui/CTAButton";
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
  },
  purpleSpan: {
    color: theme.palette.primary.main,
    padding: "0 0.5rem",
  },
  title: {
    paddingBottom: "1rem",
  },
  introtext: {
    padding: "0.2rem",
  },
  iconSection:{
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      width: "50%"
    }
  },
  fab: {
    backgroundColor: "transparent",
    border: "1px solid #grey",
    borderRadius: "50%",
    padding: "1rem",
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.dark,
},

  },

});

const TextContainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.firstLine}>
        <img src={HEART} alt="heart" />
        <Typography variant="body1">
          <span className={classes.purpleSpan}>Hello, I'm</span>Anna Marandola
        </Typography>
      </div>

      <Typography variant="h1" className={classes.title}>Développeur Web Freelance</Typography>

      <Typography variant="body1" className={classes.introtext}>
        Vous cherchez un développeur pour créer le site Web de votre entreprise,
        le moderniser, implémenter de nouvelles fonctionnalités ou améliorer
        votre référencement ?
      </Typography>

      <Typography variant="body1" className={classes.introtext}>Vous êtes au bon endroit.</Typography>

      <Typography variant="body1" className={classes.introtext}>
        Je réalise des sites et des applications web/mobiles adaptées à toutes
        les tailles d’écran et respectueux des standards du Web. 
      </Typography>

      <Typography variant="body1" className={classes.introtext}>Offrez à vos clients une
        expérience de navigation optimale !</Typography>

      <CTAButton>En savoir +</CTAButton>

      <div className={classes.iconSection}>
        <button className={classes.fab}>
          <img src={LINKEDIN} alt="linkedin" />
        </button>
        <button className={classes.fab}>
          <img src={GITHUB} alt="github" />
        </button>
        <button className={classes.fab}>
          <img src={INSTA} alt="insta" />
        </button>
      </div>
    </div>
  );
};

export default withStyles(styles)(TextContainer);
