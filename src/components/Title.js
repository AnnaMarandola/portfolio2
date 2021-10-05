import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "25% 0",
    [theme.breakpoints.up("sm")]: {
      padding: "15% 0",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10% 0",

    }
  },
  title: {
    color: "#27282c",
    fontSize: "3rem",
    fontWeight: 700,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "4rem",
    }
  },
  underline: {
    height: ".3rem",
    width: "20%",
    backgroundColor: "#7284ff",
    minWidth: "20rem"
  }

});

const Title = ({ classes, title, color }) => {
  return (
    <div className={classes.root}>

      <Typography className={classes.title} style={{color: color}}>
        {title}
      </Typography>
      {/* <div className={classes.underline}/> */}

    </div>
  );
};

export default withStyles(styles)(Title);
