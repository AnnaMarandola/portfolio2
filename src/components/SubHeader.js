import { Typography, withStyles } from "@material-ui/core";
import Title from "./Title";
import INFO from "../assets/about/info.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10%",
    backgroundColor: "#29282e",
    paddingTop: "5rem",
    [theme.breakpoints.up("md")]: {
      padding: "0 10%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "5% 10%",
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
    color: "white",
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
      {/* <Title title="A propos ..." color="white" /> */}
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <Typography className={classes.presentationText}>
            Bonjour ! je suis Anna Marandola, développeur web indépendante basée à
            Toulouse.
          </Typography>
          <Typography className={classes.presentationText}>
            Je réalise des sites web modernes, adaptés à toutes les tailles
            d'écran et respectueux des standards du web. J'accorde une
            importance particulière au réfèrencement et à l'expérience
            utilisateur (UX/UI).
          </Typography>
          <Typography className={classes.presentationText}>
            Du site vitrine au projet plus complexe, je vous propose une
            expertise et un développement web qui correspond à vos attentes et à
            vos besoins.{" "}
          </Typography>
          <Typography className={classes.presentationText}>
            Travaillant régulièrement avec des PME, associations ou
            particuliers, je vous propose des solutions à votre portée & adaptée
            à votre budget.{" "}
          </Typography>
        </div>
        <div className={classes.illusContainer}>
          <img src={INFO} alt="info icon" className={classes.image} />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SubHeader);
