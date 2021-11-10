import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "1rem 0 3rem 0",
    height: "fit-content",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      width: "30%",
      minWidth: "35rem",
      padding: "2rem",
      margin: "2rem",
    },
  },
  cardTitle: {
    marginBottom :"2rem",
    // color: "white",
    fontWeight: 600,
    fontSize: "2rem",
    paddingLeft: "1rem",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "0rem",
      marginBottom :"4rem",
    }
  },
  jauge: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    [theme.breakpoints.up("md")]: {
    },
  },
  level: {
    height: "1rem",
    background:
    "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    marginLeft: "1rem",
    animation: "$slideLeft 1.5s",
    paddingBottom: "1.5rem",
    paddingRight: "0.5rem",
    borderRadius: "5px",
    boxShadow: "5px 5px 23px -5px black",
  },
  techLabel: {
    // color: "white",
    fontWeight: 600
  },
  percent: {
    textAlign: "right",
    color: "white"
  },
  "@keyframes slideLeft": {
    from: { left: "-3rem" },
    to: { left: "0" },
  },
});

const skillsData = [
  { tech: "HTML", level: "90" },
  { tech: "CSS", level: "80" },
  { tech: "Javascript", level: "70" },
  { tech: "Typescript", level: "60" },
  { tech: "React.js", level: "70" },
  { tech: "Node.js", level: "40" },
  { tech: "API", level: "70" },
  { tech: "SQL", level: "50" },
  { tech: "noSQL", level: "60" },
];

const SkillsChart = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.cardTitle}>
        Compétences
      </Typography>
      {skillsData.map((item) => (
        <div key={item.tech} className={classes.jauge}>
          <Typography variant="body1" className={classes.techLabel}>
            {item.tech}
          </Typography>
          <div
            className={classes.level}
            style={{ width: `${item.level}%` }}
          >
          <Typography className={classes.percent}>{item.level}%</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(SkillsChart);
