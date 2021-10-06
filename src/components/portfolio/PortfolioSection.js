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

  const handleOpen = () => (e) => {
    console.log("target", e.target.id)
    setProjectId(e.target.id)
    setIndex(projects.findIndex((project) => project.title === e.target.id))
    isOpen ? setOpen(false) && setProjectId() : setOpen(true);
  };

  useEffect(() => {
    console.log("project id update",projectId)
  }, [projectId, index, isOpen])

  return (
    <div className={classes.root}>
      <Title title={"Portfolio"} />
      {isOpen ? (
        <Project handleClose={handleOpen()} />
      ) : (
        <PortfolioPreview projects={projects} handleOpen={handleOpen()} />
      )}
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
