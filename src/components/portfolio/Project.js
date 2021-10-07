import { Button, Card, Typography, withStyles } from "@material-ui/core";
import ProjectCarousel from "./ProjectCarousel";
import Stack from "./Stack";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: "2px solid #f4f4f4",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem"
    },

    [theme.breakpoints.up("lg")]: {
      width: "80%",
      margin: "0 10%",
      padding: "2rem"
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  carouselAndInfo: {
    padding: "1rem 0 0 1rem",
    [theme.breakpoints.up("md")]: {

    },
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
            <Button>Visiter le site</Button>
            <Button>Github</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(Project);
