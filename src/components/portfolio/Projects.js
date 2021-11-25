import { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import projects from "../../assets/data/projects.json";
import Project from "./Project";
import { Pagination } from "@mui/material";
import CTAButton from "../mui/CTAButton";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "1rem",

    [theme.breakpoints.up("md")]: {
    paddingTop: "4rem",
    }
  },
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
      // padding: "6rem",
    },
  },
  pagination: {
    padding: "2rem",
    "& .MuiPaginationItem-root": {
      color: theme.palette.background.light,
      fontWeight: 400,
    }
  }
});

const Projects = ({ classes }) => {
  const firstIndex = 0;
  const [pageSize, setPageSize] = useState(4);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([...projects].slice(firstIndex, pageSize));

  useEffect(() => {
    setData(projects.slice(0, pageSize));
  }, [pageSize]);

  const handleChangePage = (e, value) => {
    setPage(value);
    setData(
      projects.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };

  const handleSeeAll = () => {
    setPageSize(projects.length);
  };

  return (
    <div className={classes.root}>
      <div className={classes.projectsContainer}>
        {data.map((project, id) => (
          <Project project={project} key={id} />
        ))}
      </div>
        <Pagination
          count={Math.ceil(projects.length / pageSize)}
          page={page}
          onChange={handleChangePage}
          className={classes.pagination}
          variant="body1"
        />
      <CTAButton onClick={handleSeeAll}>Voir tous les projects</CTAButton>
    </div>
  );
};

export default withStyles(styles)(Projects);
