import { Button, Typography, withStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import TWITTER from "../assets/twitter.png";
import LINKEDIN from "../assets/linkedin.png";
import HAND from "../assets/hand4.jpg";

const styles = (theme) => ({
  root: {
    backgroundColor: "#29282e",
    height: "fit-content",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-5rem"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10%",
    paddingTop: "10rem",
    paddingBottom: "5rem"
  },
  annaM: {
    fontSize: "2.5rem",
    color: "white",
  },
  developer: {
    fontSize: "4rem",
    color: "white",
    fontFamily: "Poppins",
    fontWeight: 600,
  },
  buttonsContainer: {
    display: "flex",
    padding: "3rem 0",
    justifyContent: "space-between",
    width: "40%",
  },
  contactButton: {
    padding: "0rem 1rem",
    borderRadius: "30px",
    color: "white",
    boxShadow: "5px 5px 23px -12px gray",
    background:
      "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
    border: "1px solid #7284ff",
    "&:hover": {
      background:
        "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
      border: "1px solid #b01df6",
    },
  },
  imgContainer: {
    width: "40%",
  },
  codeImg: {
    width: "110%",
  },
});

const Hero = ({ classes }) => {
  return (
    <header className={classes.root}>
      <div className={classes.textContainer}>
        <Typography className={classes.annaM}>Anna Marandola</Typography>
        <Typography className={classes.developer}>
          Développeur web
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
          <Button className={classes.contactButton} aria-label="Contact">
            Contact
          </Button>
        </div>
      </div>
      <div className={classes.imgContainer}>
        <img
          src={HAND}
          alt="hand typing on keyboard"
          className={classes.codeImg}
        />
      </div>
    </header>
  );
};

export default withStyles(styles)(Hero);
