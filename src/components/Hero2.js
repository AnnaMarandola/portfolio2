import { Button, Typography, withStyles, Card } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import TWITTER from "../assets/twitter.png";
import LINKEDIN from "../assets/linkedin.png";
import CODE from "../assets/Code_perspective_matte_s.png";

const styles = (theme) => ({
  root: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    backgroundColor: "#29282e",
    height: "45rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "8rem",
    width: "100%",
  },
  annaM: {
    fontSize: "2.5rem",
    color: "white",
  },
  developer: {
    fontSize: "5rem",
    color: "white",
    paddingBottom: "3rem",
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "50%",
  },
  contactButton: {
    padding: "1rem 2rem",
    borderRadius: "30px",
    color: "white",
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    border: "2px solid #855aee",
    "&:hover": {
      background:
        "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
      border: "2px solid #7284ff",
    },
  },
  imgContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  codeImg: {
    width: "40%",
    paddingTop: "6rem",
  },
});

const Hero = ({ classes }) => {
  return (
    <header className={classes.root}>
      <div className={classes.textContainer}>
        <Typography className={classes.annaM}>Anna Marandola</Typography>
        <Typography className={classes.developer}>
          Frontend developer
        </Typography>
        <div className={classes.buttonsContainer}>
          <Avatar
            className={classes.mediaIcon}
            src={LINKEDIN}
            alt="linkedin link"
          />
          <Avatar
            className={classes.mediaIcon}
            src={TWITTER}
            alt="twitter link"
          />
          <Button className={classes.contactButton}>Contact</Button>
        </div>
      </div>
      <div className={classes.imgContainer}>
        {/* <img src={CODE} alt="3d balise html" className={classes.codeImg}/> */}
      </div>
    </header>
  );
};

export default withStyles(styles)(Hero);
