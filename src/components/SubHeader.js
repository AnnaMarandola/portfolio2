import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "10%",
    backgroundColor: "white",
    marginTop: "-0.3rem",
    [theme.breakpoints.up("md")]: {
      padding: "5% 10%",
    },
  },
  subtitle: {
    textAlign: "center",
  },
  presentationText: {
    color: "#29282e",
    fontSize: "1rem",
    padding :"0.5rem 0",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.3rem",
    },
  },

});

const SubHeader = ({ classes }) => {
  return (
    <div className={classes.root}>
          <Typography className={classes.presentationText}>
            Hello ! je suis Anna Marandola, développeur web indépendante basée à
            Toulouse. Passionnée par les technologies du web, j'ai d'abord
            appris le code en autodidacte puis j'ai entamé un virage
            professionnel en intégrant une formation fullstack et en obtenant le
            diplôme de développeur web et web mobile (bac +3).
          </Typography>
          <Typography className={classes.presentationText}>
            Aprés 2 ans d'expériences, je me suis spécialisée en développement
            frontend avec le framework React.js. Je réalise des sites web
            modernes, adaptés à toutes les tailles d'écran et respectueux des
            standards du web. J'accorde une importance particulière au réfèrencement et à l'expérience utilisateur
            (UX/UI).
          </Typography>
          <Typography className={classes.presentationText}>
            Mon expérience acquise au fil des projets me permet de mieux
            comprendre les attentes d'un client et de répondre précisement à son
            besoin, en fonction de son domaine d'activité. Du site vitrine au
            projet plus complexe, je vous propose une expertise et un
            développement web qui correspond à vos attentes et à vos besoins.{" "}
          </Typography>
          <Typography className={classes.presentationText}>
            Travaillant régulièrement avec des PME, associations ou
            particuliers, je vous propose des solutions à votre portée & adaptée
            à votre budget.{" "}
          </Typography>
    </div>
  );
};

export default withStyles(styles)(SubHeader);
