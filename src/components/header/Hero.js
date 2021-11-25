import { withStyles } from "@mui/styles";
import ImgContainer from "./ImgContainer";
import TextContainer from "./TextContainer";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0 0 4rem 0",
    [theme.breakpoints.up("sm")]: {
      padding: 0,
      minHeight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 5%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "100vh",
      paddingTop: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "3rem 8%",
      height: "100vh",
    },
  },
});

const Hero = ({ classes }) => {
  return (
    <div className={classes.root}>
      <TextContainer />
      <ImgContainer />
    </div>
  );
};

export default withStyles(styles)(Hero);
