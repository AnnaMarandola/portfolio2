import { Button, Card, Typography, withStyles } from "@material-ui/core";
import ProjectCarousel from "./ProjectCarousel";
import Stack from "./Stack";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {},
  },
  titleContainer: {},
  title: {},
  carouselAndDescription: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {},
  },

  infoAndStack: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"

    },
    [theme.breakpoints.up("lg")]: {},
  },
  infoContainer: {
  },
  stackContainer: {

  }
});
const Project = ({ classes, handleClose, project }) => {
  return (
    <Card className={classes.root}>
      <Button onClick={handleClose} className={classes.closeButton}>
        X
      </Button>
      <div className={classes.titleContainer}>
        <Typography variant="h5" className={classes.title}>
          {project.title}
        </Typography>
      </div>

      <div className={classes.carouselAndDescription}>

        <div className={classes.carouselContainer}>
          {project && <ProjectCarousel images={project.gallery} />}
        </div>

        <div className={classes.descriptionContainer}>
          {project &&
            project.description &&
            project.description.map((item, id) => (
              <Typography key={id} variant="body1">
                {item}
              </Typography>
            ))}
          <div className={classes.buttonsSection}>
            <Button>Visiter le site</Button>
            <Button>Github</Button>
          </div>
        </div>
      </div>

      <div className={classes.infoAndStack}>
        <div className={classes.infoContainer}>
          <Typography>{project.client}</Typography>
          <Typography>{project.prestation}</Typography>
          <Typography>{project.date}</Typography>
        </div>
        <div className={classes.stackContainer}>
          <Stack stackData={project.stack} />
        </div>
      </div>

      <Button onClick={handleClose}>X</Button>
    </Card>
  );
};

export default withStyles(styles)(Project);
