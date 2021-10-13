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
      height: "28rem",
      backgroundPosition: "center 25%",
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
            Voici un petit apperçu de mes compétences techniques...
            <Typography className={classes.presentationText}>

            Autodidacte et passionnée, je tiens une veille technologiques afin de pouvoir vous proposer des solutions les plus complètes et adaptées à vos projets.
            </Typography>
            Mon intéret pour le web s'étend au delà du code et la satisfaction du besoin du client reste pour moi une priorité. C'est pourquoi afin de proposer des prestations les plus complètes, j'ai suivi des formations en web marketing, gestion de projet, web design...
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
