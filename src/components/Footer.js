import { withStyles } from "@mui/styles";
import SocialMediaButtons from "./contact/SocialMediaButtons";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "5rem 5%"
    },
  },
});

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <SocialMediaButtons />
      </div>
      <div className={classes.centerContainer}>
        <SocialMediaButtons />
      </div>
      <div className={classes.rightContainer}>
        <SocialMediaButtons />
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
