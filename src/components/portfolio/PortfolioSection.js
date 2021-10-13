import { withStyles } from "@material-ui/core";
import PortfolioPreview from "./PortfolioPreview";
import Title from "../Title";
import { projects } from "./ProjectsData";
import { useState, useEffect } from "react";
import Project from "./Project";
import Player from "./Player";

const styles = (theme) => ({
  root: {
    padding: "0 5% 5% 5%",
    // backgroundColor: "white",
    backgroundColor: "#29282e",

    [theme.breakpoints.up("md")]: {},
  },
  galleryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
const PortfolioSection = ({ classes }) => {
  console.log("projects", projects);
  const [isOpen, setOpen] = useState(false);
  const [index, setIndex] = useState();

  let project = projects.find((project) => project.id === index);

  const length = projects.length;
  const progress = (index) / ((length - 1) / 100);

  useEffect(() => {}, [index, isOpen, project]);

  const handleOpen = () => (e) => {
    setIndex(projects.findIndex((project) => project.title === e.target.id));
    isOpen ? setOpen(false) : setOpen(true);
  };

  const goNext = () => (e) => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
      project = projects.find((project) => project.id === index + 1);
    } else {
      setOpen(false);
    }
  };

  const goBack = () => (e) => {
    if (index > 0) {
      setIndex(index - 1);
      project = projects.find((project) => project.id === index - 1);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className={classes.root}>
      <Title title="Portfolio" color="white"/>
      {isOpen ? (
        <div className={classes.galleryContainer}>
          <Player
            index={index}
            goNext={goNext()}
            goBack={goBack()}
            progress={progress}
          />
          <Project handleClose={handleOpen()} project={project} />
        </div>
      ) : (
        <PortfolioPreview projects={projects} handleOpen={handleOpen()} />
      )}
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
