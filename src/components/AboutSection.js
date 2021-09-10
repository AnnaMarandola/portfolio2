import { Button, Typography, withStyles, Card } from "@material-ui/core";
import OPENQUOTE from "../assets/openQuote.png";
import CLOSEQUOTE from "../assets/closeQuote.png";
import ILLUS from "../assets/about/about (1).png";
import Title from "./Title";
import SkillsCharts from "./SkillsCharts";
import Certifications from "./Certifications";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem",
    backgroundColor: "#29282e",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-start",
      width: "100%",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-evenly",
    },
  },

  content: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      width: "40%",
      padding: "2rem",
      alignItems: "start",
    },
  },
  quoteImg: {
    width: "25%",
    height: "25%",
    opacity: 0.5,
    [theme.breakpoints.up("sm")]: {
      width: "15%",
      height: "15%",
    },
    [theme.breakpoints.up("md")]: {
      width: "8%",
      height: "8%",
    },
  },

  presentationText: {
    zIndex: 2,
    marginTop: "-3rem",
    color: "#b2a9a6",
  },
  openQuoteContainer: {
    textAlign: "left",
    width: "100%",
  },

  closeQuoteContainer: {
    textAlign: "right",
    width: "100%",
    marginTop: "-3rem",
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
      background: "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
      border: "2px solid #7284ff",
        },
  },
  illustrationContainer: {
    width: "30%",
    textAlign: "center",
  },
  illusImg: {
    width: "90%",
    borderRadius: "10px",
  },
  skillsSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    marginTop: "6rem",
  }
});

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Title title={"A propos ..."} />
      <div className={classes.card}>
        <div className={classes.content}>
          <div className={classes.textContainer}>
            <div className={classes.openQuoteContainer}>
              <img
                src={OPENQUOTE}
                alt="opening quotation mark"
                className={classes.quoteImg}
              />
            </div>
            <Typography className={classes.presentationText}>
              Lorem ipsum felis eu interdum maximus, metus velit consectetur
              magna, et condimentum nisi turpis nec ligula. Nam tempor volutpat
              lacus non lobortis. Ut id velit ac arcu semper viverra. Morbi
              ipsum lacus, pellentesque non dictum lacinia, tristique gravida
              mauris. Donec justo neque, ultrices a tempus eu, laoreet pretium
              turpis. Lorem ipsum felis eu interdum maximus, metus velit
              consectetur magna, et condimentum nisi turpis nec ligula.
            </Typography>
            <div className={classes.closeQuoteContainer}>
              <img
                src={CLOSEQUOTE}
                alt="closing quotation mark"
                className={classes.quoteImg}
              />
            </div>
            <Button className={classes.aboutButton}>en savoir +</Button>
          </div>
          <div className={classes.illustrationContainer}>
            <img
              src={ILLUS}
              alt="girl with big phone"
              className={classes.illusImg}
            />
          </div>
        </div>
        <div className={classes.skillsSection}>
      <SkillsCharts />
      <Certifications />
      </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(AboutSection);
