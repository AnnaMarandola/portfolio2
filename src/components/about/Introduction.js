import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import HACKERM from "../../assets/images/3.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      padding: "3rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "70%",
    },
  },
  textContainer: {
    padding: "2rem 1.5rem",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      padding: "0 2rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 2rem 0 0",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 4rem 0 0",
    },
  },
  paragraph: {
    paddingBottom: "1rem",
  },
  photoContainer: {
    height: "15rem",
    margin: "0 .5rem",
    backgroundImage: `url(${HACKERM})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center 8%",
    backgroundSize: "cover",
    borderRadius: "20px",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      height: "20rem",
    },
    [theme.breakpoints.up("lg")]: {
      margin: 0,
      height: "22rem",
    },
    [theme.breakpoints.up("xl")]: {
      height: "25rem",
    },
  },
});
const Introduction = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="body1" className={classes.paragraph}>
          Après 2 ans d'expériences, je me suis spécialisée en développement
          frontend avec le framework React.js, je maîtrise les technologies
          HTML5/CSS3, javascript, typescript, node.js et les bases de données
          SQL et noSQL. Au fil des projets, j’ai progressivement élargi mon
          champ de compétences au web marketing et au web design.
        </Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Titulaire du diplôme de Développeur web et web mobile, je mène une
          veille active sur les nouvelles technologies web et continue de
          développer mes compétences afin de proposer des sites/applications
          adaptés aux standards du web et optimisant l’expérience utilisateur
          (UX, UI).
        </Typography>
      </div>
      <div className={classes.photoContainer} />
    </div>
  );
};

export default withStyles(styles)(Introduction);
