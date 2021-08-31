import { Button, Typography, withStyles } from "@material-ui/core";
import OPENQUOTE from "../assets/openQuote.png";
import CLOSEQUOTE from "../assets/closeQuote.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem 5%",
    [theme.breakpoints.up("md")]: {
      // flexDirection: "row",
      // justifyContent: "space-evenly",
      padding: "4rem 0%",

    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      width: "80%",
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
  },
  closeQuoteContainer: {
    textAlign: "right",
    marginTop: "-3rem",
  },
  aboutButton: {
    margin: "3rem",
    padding: "1rem 2rem",
    backgroundColor: "black",
    color: "white",
    width: "fit-content",
    [theme.breakpoints.up("md")]: {
    },
  },
});

const AboutSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.openQuoteContainer}>
          <img
            src={OPENQUOTE}
            alt="opening quotation mark"
            className={classes.quoteImg}
          />
        </div>
        <Typography className={classes.presentationText}>
          Lorem ipsum felis eu interdum maximus, metus velit consectetur magna,
          et condimentum nisi turpis nec ligula. Nam tempor volutpat lacus non
          lobortis. Ut id velit ac arcu semper viverra. Morbi ipsum lacus,
          pellentesque non dictum lacinia, tristique gravida mauris. Donec justo
          neque, ultrices a tempus eu, laoreet pretium turpis. Lorem ipsum felis
          eu interdum maximus, metus velit consectetur magna, et condimentum
          nisi turpis nec ligula. Nam tempor volutpat lacus non lobortis. Ut id
          velit ac arcu semper viverra. Morbi ipsum lacus, pellentesque non
          dictum lacinia, tristique gravida mauris. Donec justo neque, ultrices
          a tempus eu, laoreet pretium turpis.
        </Typography>
        <div className={classes.closeQuoteContainer}>
          <img
            src={CLOSEQUOTE}
            alt="closing quotation mark"
            className={classes.quoteImg}
          />
        </div>
      </div>
      <Button className={classes.aboutButton}>en savoir +</Button>
    </div>
  );
};

export default withStyles(styles)(AboutSection);
