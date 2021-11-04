import { Typography, withStyles, Button } from "@material-ui/core";
// import Title from "./Title";
import INFO from "../assets/about/info.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10%",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("md")]: {
    },

    [theme.breakpoints.up("lg")]: {
      // padding: "5% 10%",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

    alignItems: "center",
  },
  textContainer: {
    paddingBottom: "4rem",
    [theme.breakpoints.up("md")]: {
      paddingRight: "6rem",
    },
  },
  presentationText: {
    fontSize: "1rem",
    padding: "0.5rem 0",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
  },
  contactButton: {
    marginTop: "4rem",
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
});

const SubHeader = ({ classes }) => {
  return (
    <div className={classes.root}>
      {/* <Title title="A propos ..." /> */}
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <Typography className={classes.presentationText}>
            Bonjour ! Vous cherchez un développeur pour créer le site Web de
            votre entreprise, le moderniser ou implémenter de nouvelles
            fonctionnalités ? Vous êtes au bon endroit.
          </Typography>
          <Typography className={classes.presentationText}>
            Je réalise des sites web et des applications web/mobiles adaptées à
            toutes les tailles d’écran et respectueux des standards du Web. Pour
            vos utilisateurs, c’est la garantie de bénéficier d’une expérience
            de navigation optimale sur tout support (optimisation de l’UX/UI).
          </Typography>
          <Typography className={classes.presentationText}>
            Je vous accompagne dans votre projet de A à Z, en contribuant à la
            préparation du cahier des charges et en étant à l’écoute de vos
            besoins afin de vous proposer une solution sur mesure adaptée à vos
            exigences.
          </Typography>
          <Typography className={classes.presentationText}>
            Travaillant régulièrement avec des PME, associations ou
            particuliers, je vous propose des solutions à votre portée & adaptée
            à votre budget.{" "}
          </Typography>
          <Typography className={classes.presentationText}>
            Prenons contact pour échanger sur votre projet !
          </Typography>
          <Button className={classes.contactButton} aria-label="Contact">
            Contact
          </Button>
        </div>
        <div className={classes.illusContainer}>
          <img src={INFO} alt="info icon" className={classes.image} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SubHeader);
