import { withStyles } from "@material-ui/core";
import PortfolioPreview from "./PortfolioPreview";
import Title from "../Title";
import { projects } from "./ProjectsData";
import { useState, useEffect } from "react";
import Project from "./Project";

const styles = (theme) => ({
  root: {
    padding: "0 5% 5% 5%",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {},
  },
});
const PortfolioSection = ({ classes }) => {
  console.log("projects", projects);
  const [isOpen, setOpen] = useState(false);
  const [projectId, setProjectId] = useState();
  const [index, setIndex] = useState()


  const project = projects.find(project => project.title === projectId)

  const handleOpen = () => (e) => {
    setProjectId(e.target.id)
    setIndex(projects.findIndex((project) => project.title === e.target.id))
    isOpen ? setOpen(false) && setProjectId() : setOpen(true);
  };

  useEffect(() => {
  }, [projectId, index, isOpen])

  return (
    <div className={classes.root}>
      <Title title={"Portfolio"} />
      {isOpen ? (
        <Project handleClose={handleOpen()} project={project} />
      ) : (
        <PortfolioPreview projects={projects} handleOpen={handleOpen()} />
      )}
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
