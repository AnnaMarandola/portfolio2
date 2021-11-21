import { Button, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import projects from "../../assets/data/projects.json";
import GITHUB from "../../assets/images/contact/github.svg";
import CTAButton from "../mui/CTAButton";

const styles = (theme) => ({
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 0",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
      padding: "6rem",
    },
  },
  projectCard: {
    width: "22rem",
    height: "15rem",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundColor: theme.palette.background.dark,
    // opacity: 0.95,
    margin: "1rem",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    [theme.breakpoints.up("sm")]: {
      width: "40rem",
      height: "25rem",
    },
  },
  overlay: {
    opacity: 0,
    "&:hover": {
      display: "flex",
      backgroundColor: theme.palette.background.dark,
      flexDirection: "column",
      justifyContent: "space-between",
      opacity: 0.91,
      // position: "relative",
      // height: "fit-content"
    },
  },
  title: {
    padding: "1rem",
    color: "white",
  },
  buttonsContainer: {
    width: "22rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
  },
  fab: {
    borderRadius: "50%",
    padding: "0.5rem",
    border: "1px solid white",
    backgroundColor: "transparent",
  },
  textContainer: {
    padding: "1rem",
    textShadow: "2px 2px 4px black",
    [theme.breakpoints.up("sm")]: {},
  },
  text: {
    color: "white",
  },
});

const Projects = ({ classes }) => {
  return (
    <div className={classes.projectsContainer}>
      {projects.map((project, id) => (
        <div
          className={classes.projectCard}
          key={id}
          style={{ backgroundImage: `url(${project.img})` }}
        >
          <div className={classes.overlay}>
            <Typography className={classes.title} variant="h5">
              {project.title}
            </Typography>
            <div className={classes.buttonsContainer}>
              {project.visitLink && (
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CTAButton>visiter</CTAButton>
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={classes.fab}>
                  <img src={GITHUB} alt="github" />
                </button>
              </a>
            </div>
            <div className={classes.textContainer}>
              <Typography variant="body1" className={classes.text}>
                {project.description}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Projects);
