import { Button, Card, Typography, withStyles } from "@material-ui/core";
import ProjectCarousel from "./ProjectCarousel";
import Stack from "./Stack";
import GITHUB from "../../assets/contact-icons/github.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid #f4f4f4",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem",
    },

    [theme.breakpoints.up("lg")]: {
      width: "80%",
      margin: "0 10%",
      padding: "2rem",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    marginLeft: "1rem",
  },
  carouselAndInfo: {
    padding: "1rem 0 0 1rem",
    [theme.breakpoints.up("md")]: {},
  },
  descriptionAndButtons: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
    },
  },
  description: {
    padding: "0.5rem 0",
  },
  buttons: {
    display: "flex",
    padding: "0.5rem 0",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  visitButton: {
    borderRadius: "30px",
    padding: "0 2rem",
    color: "white",
    marginRight: "3rem",
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    "&:hover": {
      background: "#29282e",
    },
  },
  githubButton: {
    "&:hover": {
      backgroundColor: "#29282e",
    },
  },
});
const Project = ({ classes, project }) => {
  return (
    <Card className={classes.root}>
      <div className={classes.titleContainer}>
        {project && project.logo && (
          <img
            src={project.logo}
            alt={project.client}
            className={classes.logo}
          />
        )}
        <Typography variant="h5" className={classes.title}>
          {project.title}
        </Typography>
      </div>

      <div className={classes.container}>
        <div className={classes.carouselAndInfo}>
          <div className={classes.carousel}>
            {project && <ProjectCarousel images={project.gallery} />}
          </div>
          <div className={classes.infos}>
            <Typography>{project.client}</Typography>
            <Typography>{project.prestation}</Typography>
            <Typography>{project.date}</Typography>
          </div>
        </div>

        <div className={classes.descriptionAndButtons}>
          <div className={classes.description}>
            {project &&
              project.description &&
              project.description.map((item, id) => (
                <Typography key={id} variant="body1">
                  {item}
                </Typography>
              ))}
            <Stack stackData={project.stack} />
          </div>
          <div className={classes.buttons}>
            {project.visitLink && (
              <Button
                className={classes.visitButton}
                href={project.visitLink}
                target="_blank"
              >
                Visiter
              </Button>
            )}
            {project.githubLink && (
              <Button
                className={classes.githubButton}
                href={project.githubLink}
                target="_blank"
              >
                {" "}
                <img src={GITHUB} alt="github repository" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(Project);
