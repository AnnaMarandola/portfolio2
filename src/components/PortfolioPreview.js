import { useState, useEffect } from "react";
import { withStyles, Typography, Card, Button } from "@material-ui/core";
import { projects } from "../components/ProjectsData";
import Pagination from "@material-ui/lab/Pagination";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  projectsContainer: {
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
  pagination: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  page: {
    paddingBottom: "1rem",
  },
  allButton: {
    marginTop: "3rem",
    backgroundColor: "black",
    color: "white",
  },
});

const PortfolioPreview = ({ classes }) => {
  const firstIndex = 0;
  const [pageSize, setPageSize] = useState(4);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(projects.slice(firstIndex, pageSize));

  useEffect(() => {
    setData(projects.slice(0, pageSize));
  }, [pageSize]);

  const handleChangePage = (e, value) => {
    setPage(value);
    setData(
      projects.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };

  const handleSeeAll = (e, value) => {
    setPageSize(projects.length)
  }
  return (
    <div className={classes.root}>
      <div className={classes.projectsContainer}>
        {data.map((project, index) => (
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
      <div className={classes.pagination}>
        <Typography className={classes.page}> page: {page}</Typography>
        <Pagination
          count={Math.ceil(projects.length / pageSize)}
          page={page}
          onChange={handleChangePage}
        />
        <Button 
        className={classes.allButton}
        onClick={handleSeeAll}>tous</Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(PortfolioPreview);
