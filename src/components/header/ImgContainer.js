import { withStyles } from "@mui/styles";
import BG from "../../assets/images/header/illustration.svg";

const styles = (theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  }
});

const ImgContainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img src={BG} alt="circles and tech items"/>
    </div>
  );
};

export default withStyles(styles)(ImgContainer);
