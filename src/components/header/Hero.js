import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import ImgContainer from "./ImgContainer";
import TextContainer from "./TextContainer";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    },

  },
});

const Hero = ({ classes }) => {
  return (
    <div className={classes.root}>
     <Typography variant="h2">HERO</Typography>
     <TextContainer />
     <ImgContainer />
    </div>
  );
};

export default withStyles(styles)(Hero);
