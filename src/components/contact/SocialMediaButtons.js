import { withStyles } from "@mui/styles";
import LINKEDIN from "../../assets/images/contact/linkedin.svg";
import GITHUB from "../../assets/images/contact/github.svg";
import INSTA from "../../assets/images/contact/insta.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    marginTop: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      padding: "1rem 0",
    },
  },
  fab: {
    backgroundColor: "transparent",
    border: "1px solid #grey",
    borderRadius: "50%",
    padding: "1rem",
    margin: "0.5rem",
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
});

const SocialMediaButtons = ({ classes }) => {
  return (
    <div className={classes.root}>
      <button className={classes.fab}>
        <img src={LINKEDIN} alt="linkedin" />
      </button>
      <button className={classes.fab}>
        <img src={GITHUB} alt="github" />
      </button>
      <button className={classes.fab}>
        <img src={INSTA} alt="insta" />
      </button>
    </div>
  );
};

export default withStyles(styles)(SocialMediaButtons);
