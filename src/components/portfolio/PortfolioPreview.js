import { useState, useEffect } from "react";
import {
  withStyles,
  Typography,
  Card,
  Button,
  Fab,
  Chip,
} from "@material-ui/core";
import { projects, tags } from "./ProjectsData";
import Pagination from "@material-ui/lab/Pagination";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import AddIcon from "@material-ui/icons/Add";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    marginLeft: "5%",
  },
  chipsetContainer: {
    textAlign: "left",
    width: "50%",
    marginLeft: "25%",
    marginBottom: "5rem",
  },
  chip: {
    margin: "0.5rem",
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
    "&:hover": {
      transform: "scale(1.1)",
      transition: "0.7s",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "3rem",
    },
  },
  imageSrc: {
    width: "100%",
    zIndex: 2,
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  descriptionCard: {
    borderRadius: "12px",
    color: "#ffffff",
    width: "90%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "18rem",
    marginTop: "-12rem",
    zIndex: 1,
    backgroundColor: "#cccccc",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "1rem",
    backgroundColor: "#27282c",
  },
  texts: {
    backgroundColor: "#27282c",
    color: "#ededee",
  },
  fab: {
    margin: "0.5rem",
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

const PortfolioPreview = ({ classes }) => {
  const firstIndex = 0;
  const [pageSize, setPageSize] = useState(4);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(projects.slice(firstIndex, pageSize));
  const [filters, setFilters] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);

  useEffect(() => {
    if (selectedProjects.length > 0) {
      setData(selectedProjects.slice(0, pageSize));
    } else {
      setData(projects.slice(0, pageSize));
    }
    if (filters.length === 0){
      setSelectedProjects([])

    }
  }, [pageSize, selectedProjects, filters]);

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
            <div className={classes.project} key={index}>
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
                    <Typography>{project.date}</Typography>
                  </div>
                  <div className={classes.buttons}>
                    <Fab
                      size="small"
                      aria-label="voir +"
                      className={classes.fab}
                    >
                      <AddIcon />
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
