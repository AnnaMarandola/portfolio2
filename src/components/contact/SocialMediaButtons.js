import { withStyles } from "@mui/styles";
import LINKEDIN from "../../assets/images/contact/linkedin.svg";
import GITHUB from "../../assets/images/contact/github.svg";
import INSTA from "../../assets/images/contact/insta.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      padding: "2rem 0",
      marginTop: "1rem",
    },
  },
  fab: {
    backgroundColor: "transparent",
    border: "1px solid #grey",
    borderRadius: "50%",
    padding: "0.7rem",
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
      <a
        href="https://www.linkedin.com/in/anna-m-42ab3b18a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={classes.fab}>
          <img src={LINKEDIN} alt="linkedin" />
        </button>
      </a>
      <a
        href="https://github.com/AnnaMarandola"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={classes.fab}>
          <img src={GITHUB} alt="github" />
        </button>
      </a>
      <a
        href="https://www.instagram.com/annam5125/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={classes.fab}>
          <img src={INSTA} alt="insta" />
        </button>
      </a>
    </div>
  );
};

export default withStyles(styles)(SocialMediaButtons);
