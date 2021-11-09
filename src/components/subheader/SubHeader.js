import { Typography, withStyles, Button } from "@material-ui/core";
// import Title from "./Title";
import INFO from "../../assets/about/info.svg";
import CTAComponent from "../CTAComponent";
import VisualMobile from "./VisualMobile";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      paddingTop: "5rem"
    }
  },
  container: {
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

    alignItems: "center",
  },
  textContainer: {
    paddingBottom: "4rem",
    padding: "0 10%",

    [theme.breakpoints.up("md")]: {
      paddingRight: "6rem",
      width: "50%"
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
        </div>
        <VisualMobile/>
        {/* <div className={classes.illusContainer}>
          <img src={INFO} alt="info icon" className={classes.image} />
        </div> */}
      </div>
      <CTAComponent/>
    </div>
  );
};

export default withStyles(styles)(SubHeader);
