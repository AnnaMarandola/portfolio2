import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import projects from "../../data/projects.json";

const styles = (theme) => ({
    projectsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            justifyContent: "center",
            width: "85%",
            flexWrap: "wrap",
            padding: "6rem",
        },

    },
    projectCard: {
        backgroundColor: theme.palette.background.paper,
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
            width: "40%",
        },

    },
    image: {
        width: "100%",
        height: "fit-content"

    }
});
const Projects = ({ classes }) => {
  return (
    <div className={classes.projectsContainer}>
      {projects.map((project, id) => (
        <Box sx={{ boxShadow: 8 }} className={classes.projectCard} key={id}>
          <img
            src={project.img}
            alt={project.title}
            className={classes.image}
          />
          <span className={classes.imageBackdrop} />
        </Box>
      ))}
    </div>
  );
};

export default withStyles(styles)(Projects);
