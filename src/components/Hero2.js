import { Button, Typography, withStyles, Card } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import TWITTER from "../assets/twitter.png";
import LINKEDIN from "../assets/linkedin.png";

const styles = (theme) => ({
  root: {
    paddingTop: "13rem",
    paddingBottom: "5rem",
    backgroundColor: "#29282e",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: "-5rem",
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
    width: "100%",
    display: "flex",
    marginTop: "-10rem",
    animation: "$slideTop 1.5s",
    justifyContent: "center",
  },
  codeImg: {
    width: "100%",
    // marginTop: "8rem",
  },
  "@keyframes slideTop": {
    from: { left: "-4rem" },
    to: { left: "0rem" },
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
        {/* <img src={KEYBOARD} alt="3d balise html" className={classes.codeImg}/> */}
      </div>
    </header>
  );
};

export default withStyles(styles)(Hero);
