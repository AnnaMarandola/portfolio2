import { Button, Card, Typography, withStyles } from "@material-ui/core";
import ProjectCarousel from "./ProjectCarousel";
import Stack from "./Stack";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {},
  },
});
const Project = ({ classes, handleClose, project }) => {
  return (
    <Card className={classes.root}>
      {project && (
        <div>
          <Button onClick={handleClose}>X</Button>
          <Typography variant="h5">{project.title}</Typography>
          <ProjectCarousel images={project.gallery} />
          <Typography>{project.client}</Typography>
          <Typography>{project.prestation}</Typography>
          <Typography>{project.date}</Typography>
          <div className={classes.description}>
            {project.description &&
              project.description.map((item, id) => (
                <Typography key={id} variant="body1">
                  {item}
                </Typography>
              ))}
          </div>
          <Stack stackData={project.stack} />
          <Button onClick={handleClose}>X</Button>

        </div>
      )}
    </Card>
  );
};

export default withStyles(styles)(Project);
