import { withStyles } from "@material-ui/core";
import PortfolioPreview from "./PortfolioPreview";
import Title from "../Title";
import { projects } from "./ProjectsData";
import { useState } from "react";
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

  const handleOpen = () => (e) => {
    isOpen ? setOpen(false) : setOpen(true);
  };

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
