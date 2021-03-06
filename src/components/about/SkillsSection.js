import { CircularProgress, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "70%",
    },
  },
  title: {
    padding: "3rem 2rem 1rem 2rem",
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {
      padding: "3rem 2rem 1rem 0rem",
    },
  },
  circlesContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: "1rem 0",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      padding: "0 15%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "65%",
      padding: "0 12.5%",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "space-evenly",
      width: "75%",
      padding: "2rem 12.5% 5rem 12.5%",
    },
  },
  innerCircle: {
    width: "110px",
    height: "110px",
    margin: "1rem",
    borderRadius: "50%",
    boxSizing: "border-box",
    border: "9.5px solid grey",
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {
      margin: "2rem 3rem",
    },
  },
  circleLevel: {
    marginTop: "-.6rem",
    marginLeft: "-.6rem",
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {},
  },
  captionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "50px",
    marginTop: "-6rem",
    marginBottom: "3rem",
    [theme.breakpoints.up("xl")]: {
      marginTop: "-7rem",
    },
  },
});

const skills = [
  {
    id: 0,
    label: "HTML5",
    level: 95,
  },
  {
    id: 1,
    label: "CSS3",
    level: 90,
  },
  {
    id: 2,
    label: "Javascript",
    level: 80,
  },
  {
    id: 3,
    label: "React.js",
    level: 80,
  },
  {
    id: 4,
    label: "Node.js",
    level: 70,
  },
  {
    id: 5,
    label: "API.rest",
    level: 70,
  },
  {
    id: 6,
    label: "SQL",
    level: 75,
  },
  {
    id: 8,
    label: "Firebase",
    level: 80,
  },
];

const SkillsSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Comp??tences
      </Typography>
      <div className={classes.circlesContainer}>
        {skills.map((skill, id) => (
          <div className={classes.circleContainer} key={id}>
            <div className={classes.innerCircle}>
              <CircularProgress
                variant="determinate"
                value={skill.level}
                className={classes.circleLevel}
                size={110}
                circle={{ color: "grey" }}
              ></CircularProgress>
            </div>
            <div className={classes.captionContainer}>
              <Typography variant="h6" className={classes.percentage}>
                {`${Math.round(skill.level)}%`}
              </Typography>
              <Typography variant="h6" className={classes.label}>
                {skill.label}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(SkillsSection);
