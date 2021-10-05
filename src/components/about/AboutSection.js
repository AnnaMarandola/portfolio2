import { Typography, withStyles } from "@material-ui/core";
import ILLUS from "../../assets/z4.png";
import Title from "../Title";
import SkillsCharts from "./SkillsCharts";
import Certifications from "./Certifications";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#29282e",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  firstSection: {
    display: "flex",
    flexDirection: "column-reverse",
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    boxShadow: "5px 5px 23px -8px",
    zIndex: 2,
    width: "80%",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
      flexDirection: "column",
      marginTop: "-5rem"
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      flexDirection: "row",
      alignItems: "flex-start",
      marginTop: 0,
    }
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      padding: "4rem",
      width: "65%",
    }

  },
  presentationText: {
    color: "white",
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    }
  },
  aboutButton: {
    marginTop: "3rem",
    padding: "1rem 2rem",
    borderRadius: "30px",
    color: "white",
    width: "30%",
    marginLeft: "70%",
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    border: "2px solid #855aee",
    "&:hover": {
      background:
        "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
      border: "2px solid #7284ff",
    },
  },
  illustrationContainer: {
    backgroundImage: `url(${ILLUS})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 35%",
    backgroundSize: "cover",
    zIndex: 3,
    height: "15rem",
    [theme.breakpoints.up("sm")]: {
      height: "18rem",
      backgroundPosition: "center 65%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: "25rem",
      backgroundPosition: "center 35%",
    }
  },
  skillsSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    paddingTop: "20rem",
    backgroundColor: "#f4f4f4",
    marginTop: "-12rem",
    zIndex: 1,
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    }
  },
});

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Title title={"A propos ..."} color={"white"} />
      <div className={classes.firstSection}>
        <div className={classes.textContainer}>
          <Typography className={classes.presentationText}>
            Lorem ipsum felis eu interdum maximus, metus velit consectetur
            magna. Nam tempor volutpat lacus non lobortis. Ut id velit ac arcu
            semper viverra. Morbi ipsum lacus, pellentesque non dictum lacinia,
            tristique gravida mauris.
          </Typography>
          {/* <Button className={classes.aboutButton}>en savoir +</Button> */}
        </div>
        <div className={classes.illustrationContainer} / >
      </div>
      <div className={classes.skillsSection}>
        <SkillsCharts />
        <Certifications />
      </div>
    </div>
  );
};

export default withStyles(styles)(AboutSection);
