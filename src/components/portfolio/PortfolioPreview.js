import { useState, useEffect } from "react";
import {
  withStyles,
  Typography,
  Card,
  Button,
  Fab,
  Chip,
} from "@material-ui/core";
import { tags } from "./ProjectsData";
import Pagination from "@material-ui/lab/Pagination";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import AddIcon from "@material-ui/icons/Add";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    marginLeft: "2.5%",
    paddingBottom: "5rem",
  },
  chipsetContainer: {
    textAlign: "left",
    width: "100%",
    marginBottom: "5rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "60%",
      marginLeft: "20%",
      marginBottom: "5rem",
    },
  },
  chip: {
    margin: "0.2rem",
    [theme.breakpoints.up("sm")]: {
      margin: "0.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0.5rem",
    },
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
      marginBottom: "4rem",
      "&:hover": {
        transform: "scale(1.1)",
        transition: "0.7s",
      },
    },
    [theme.breakpoints.up("lg")]: {},
  },
  imageSrc: {
    width: "120%",
    zIndex: 2,
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  descriptionCard: {
    borderRadius: "12px",
    color: "#ffffff",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "22rem",
    marginTop: "-12rem",
    zIndex: 1,
    backgroundColor: "#cccccc",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      height: "18rem",
      width: "85%",
    },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "1rem",
    backgroundColor: "#27282c",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 2rem",
      flexDirection: "row",
      alignItems: "center",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  texts: {
    backgroundColor: "#27282c",
    color: "#ededee",
    paddingBottom: "1rem",
  },
  fab: {
    margin: "0 0.5rem",
    color:
      "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
    "&:hover": {
      color: "white",
      background:
        "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    },
  },
  paginationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  page: {
    paddingBottom: "1rem",
  },
  pagination: {
    padding: "0.5rem",
  },
  allButton: {
    marginTop: "5rem",
    padding: "1rem",
    borderRadius: "30px",
    color:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    border: "1px solid",
    "&:hover": {
      background:
        "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
      border: "1px solid #7284ff",
    },
  },
});

const PortfolioPreview = ({ classes, projects, handleOpen }) => {
  const firstIndex = 0;
  const [pageSize, setPageSize] = useState(4);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([...projects].slice(firstIndex, pageSize));
  const [filters, setFilters] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);

  useEffect(() => {
    if (selectedProjects.length && filters.length) {
      setData(selectedProjects.slice(0, pageSize));
    } else {
      setData(projects.slice(0, pageSize));
    }
  }, [pageSize, selectedProjects, filters, projects]);

  const handleFilters = (tag) => () => {
    const newFilters = filters;
    newFilters.push(tag);
    setFilters(newFilters);
    const selectedIds = filters.map((filter) =>
      projects.findIndex((project) => project.tag === filter)
    );
    const cleanIds = selectedIds.filter((id) => id >= 0);
    const newProjects = cleanIds.map((cleanId) =>
      projects.find((project) => project.id === cleanId)
    );
    let unique = [...new Set(newProjects)];
    setSelectedProjects(unique);
  };

  const handleChangePage = (e, value) => {
    setPage(value);
    setData(
      projects.slice(firstIndex + pageSize * (value - 1), pageSize * value)
    );
  };

  const handleDelete = (tag) => () => {
    const newFilters = filters.filter((filter) => filter !== tag);
    setFilters(newFilters);
    if (filters.length === 0) {
      setSelectedProjects([]);
    }
  };

  const handleSeeAll = () => {
    setFilters([]);
    setPageSize(projects.length);
  };

  return (
    <div className={classes.root}>
      <div className={classes.chipsetContainer}>
        {tags.map((tag, id) =>
          filters.includes(tag) ? (
            <Chip
              key={id}
              variant="outlined"
              label={tag}
              value={tag}
              onClick={handleFilters(tag)}
              className={classes.chip}
              onDelete={filters.includes(tag) && handleDelete(tag)}
            />
          ) : (
            <Chip
              key={id}
              variant="outlined"
              label={tag}
              value={tag}
              onClick={handleFilters(tag)}
              className={classes.chip}
            />
          )
        )}
      </div>

      <div className={classes.projectsContainer}>
        {data.map((project, index) => (
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            duration={1}
            delay={300}
            key={index}
          >
            <div className={classes.project} key={project.id}>
              <img
                src={project.url}
                alt={project.title}
                className={classes.imageSrc}
              />
              <span className={classes.imageBackdrop} />

              <Card className={classes.descriptionCard}>
                <div className={classes.container}>
                  <div className={classes.texts}>
                    <Typography>{project.title}</Typography>
                  </div>
                  <div className={classes.buttons}>
                    <Fab
                      size="small"
                      aria-label="voir +"
                      className={classes.fab}
                    >
                      <AddIcon onClick={handleOpen} id={project.title} />
                    </Fab>
                    <Fab
                      size="small"
                      aria-label="visiter le site"
                      className={classes.fab}
                    >
                      <VisibilityOutlinedIcon />
                    </Fab>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <div className={classes.paginationContainer}>
        {data > 3 && (
          <div>
            <Typography className={classes.page}> page: {page}</Typography>
            <Pagination
              count={Math.ceil(projects.length / pageSize)}
              page={page}
              onChange={handleChangePage}
              className={classes.pagination}
            />
          </div>
        )}
        <Button
          className={classes.allButton}
          aria-label="Voir tous"
          onClick={handleSeeAll}
        >
          voir tous
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(PortfolioPreview);
