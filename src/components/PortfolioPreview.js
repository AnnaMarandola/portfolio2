import { withStyles, Typography, Card } from "@material-ui/core";
import { projects } from "../components/ProjectsData";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const styles = (theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {},
  },
  project: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      margin: "3rem",
    },
  },
  imageSrc: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  descriptionContainer: {
    borderRadius: "12px",
    border: "1px solid rgba(209,213,219,0.3)",
    color: "black",
    padding: "1rem",
    width: "80%",
  },
});

const PortfolioPreview = ({ classes }) => {
  return (
    <div className={classes.root}>
        {projects.map((project, index) => (
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={1}
            delay={300}
            key={index}
          >
            <div className={classes.project} key={index}>
              <img
                src={project.url}
                alt={project.title}
                className={classes.imageSrc}
              />
              <span className={classes.imageBackdrop} />

              <Card className={classes.descriptionContainer}>
                <Typography>{project.title}</Typography>
                <Typography>{project.date}</Typography>
              </Card>
            </div>
          </ScrollAnimation>
        ))}
      </div>
  );
};

export default withStyles(styles)(PortfolioPreview);
