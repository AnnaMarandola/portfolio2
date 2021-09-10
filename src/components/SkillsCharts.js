import { Typography, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    padding: "1rem",
    margin: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "30%",
      minWidth: "35rem",
      padding: "2rem",
      margin: "2rem",
    },
  },
  cardTitle: {
    marginBottom :"4rem",
    color: "#D3D3D3" 
  },
  jauge: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#29282e",
    boxShadow: "5px 5px 23px -5px",
    [theme.breakpoints.up("md")]: {
    },
  },
  level: {
    height: "1rem",
    background:
    "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    marginLeft: "1rem",
    animation: "$slideLeft 1.5s",
    // position: "relative",
    paddingBottom: "1.5rem",
    paddingRight: "0.5rem",
    boxShadow: "5px 5px 23px -5px",
    // "&:nth-of-type(2n + 1)": {
    //     background: "linear-gradient(to right top, #4ea78f, #48a390, #439f91, #3f9b91, #3b9791, #3a9591, #389490, #379290, #379290, #369391, #369391, #359391)",
    //  },
  },
  techLabel: {
    color: "#D3D3D3",
  },
  percent: {
    textAlign: "right",
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
        <Card key={item.tech} className={classes.jauge}>
          <Typography variant="body1" className={classes.techLabel}>
            {item.tech}
          </Typography>
          <div
            className={classes.level}
            style={{ width: `${item.level}%` }}
          >
          <Typography className={classes.percent}>{item.level}%</Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(SkillsChart);
