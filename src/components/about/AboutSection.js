import { Typography, withStyles } from "@material-ui/core";
import ILLUS from "../../assets/z4.png";
import Title from "../Title";
import SkillsCharts from "./SkillsCharts";
import Certifications from "./Certifications";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#29282e",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  firstSection: {
    display: "flex",
    flexDirection: "column-reverse",
    backgroundColor: "#f4f4f4",

    // background:
    //   "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    boxShadow: "5px 5px 23px -8px",
    zIndex: 2,
    width: "80%",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
      flexDirection: "column",
      marginTop: "-5rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "2rem",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "4rem",
      width: "65%",
    },
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
  illustrationContainer: {
    backgroundImage: `url(${ILLUS})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 35%",
    backgroundSize: "cover",
    zIndex: 3,
    height: "15rem",
    [theme.breakpoints.up("sm")]: {
      height: "18rem",
      backgroundPosition: "center 65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "36%",
      height: "40rem",
      backgroundPosition: "center 45%",
    },
  },
  skillsSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: "20rem",
    backgroundColor: "#f4f4f4",
    marginTop: "-12rem",
    zIndex: 1,
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },
});

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Title title={"A propos ..."} color={"white"} />
      <div className={classes.firstSection}>
        <div className={classes.textContainer}>
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
            standards du web. J'accorde une importance particulière à
            l'optimisation du réfèrencement et à l'expérience utilisateur
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
          {/* <Button className={classes.aboutButton}>en savoir +</Button> */}
        </div>
        <div className={classes.illustrationContainer} />
      </div>
      <div className={classes.skillsSection}>
        {/* <CvButtons /> */}
        <SkillsCharts />
        <Certifications />
      </div>
    </div>
  );
};

export default withStyles(styles)(AboutSection);
