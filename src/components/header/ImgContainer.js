import { withStyles } from "@mui/styles";
import BG from "../../assets/images/header/illustration.svg";

const styles = (theme) => ({
  root: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%"
    },
    [theme.breakpoints.up("xl")]: {
      width: "40%"
    },
  },
  image: {
    width: "100%"
  }
});

const ImgContainer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <img src={BG} alt="circles and tech items" className={classes.image}/>
    </div>
  );
};

export default withStyles(styles)(ImgContainer);
