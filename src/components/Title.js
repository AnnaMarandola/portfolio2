import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    paddingLeft: "5%",
    paddingBottom: "5%"
  },
  title: {
    color: "#27282c",
    fontSize: "4rem",
    fontWeight: 700,

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
