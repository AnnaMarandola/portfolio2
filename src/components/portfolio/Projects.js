import { withStyles } from "@mui/styles";
import projects from "../../assets/data/projects.json";
import Project from "./Project";

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
});

const Projects = ({ classes }) => {
  return (
    <div className={classes.projectsContainer}>
      {projects.map((project, id) => (
        <Project project={project} key={id} />
      ))}
    </div>
  );
};

export default withStyles(styles)(Projects);
