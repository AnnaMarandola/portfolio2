import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import GITHUB from "../../assets/images/contact/github.svg";
import CTAButton from "../mui/CTAButton";

const styles = (theme) => ({
  projectCard: {
    width: "22rem",
    height: "15rem",
    backgroundColor: theme.palette.background.default,
    margin: "1rem",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "relative",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    [theme.breakpoints.up("sm")]: {
      width: "40rem",
      height: "25rem",
    },
    "&:hover": {},
  },
  frontCard: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    opacity: 1,
    backgroundColor: theme.palette.background.dark,
  },
  backCard: {
    backgroundSize: "cover",
    height: "15rem",
    padding: 0,
    backgroundColor: theme.palette.background.dark,
    [theme.breakpoints.up("sm")]: {
      width: "40rem",
      height: "25rem",
    },
  },
  backContent: {
    opacity: 0.9,
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",


  },
  title: {
    padding: "1rem",
    color: "white",
    textShadow: "2px 2px 4px black",
  },
  buttonsContainer: {
    width: "22rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "40%",
    },
  },
  fab: {
    borderRadius: "50%",
    padding: "0.5rem",
    color: "white",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    fontSize: "0.9rem",
    justifyContent: "space-between",
    borderColor: "white",
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem",
    },
    "&:hover": {
      backgroundColor: "white",
    },
  },
  github: {
    paddingLeft: "1rem",
  },
  textContainer: {
    [theme.breakpoints.up("sm")]: {},
  },
  text: {
    textShadow: "2px 2px 4px black",
    color: "white",
    padding: "1rem",
  },
  link: {
    textDecoration: "none",
  },
});

const Project = ({ classes, project }) => {
  return (
    <Flippy
      flipOnHover={true}
      flipDirection="horizontal"
      className={classes.projectCard}
    >
      <FrontSide
        className={classes.frontCard}
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <Typography className={classes.title} variant="h5">
          {project.title}
        </Typography>
      </FrontSide>
      <BackSide
        className={classes.backCard}
        style={{ backgroundImage: `url(${project.img})` }}
      >
        <div className={classes.backContent}>
          <Typography className={classes.title} variant="h5">
            {project.title}
          </Typography>
          <div className={classes.buttonsContainer}>
            {project.visitLink && (
              <a
                href={project.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
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
            <Typography className={classes.text}>
              {project.description}
            </Typography>
          </div>
        </div>
      </BackSide>
    </Flippy>
  );
};

export default withStyles(styles)(Project);
