import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    padding: "8rem 4rem 4rem 4rem",
  },
  title: {
    color: "#ecebed",
    paddingBottom: "2rem",
    fontSize: "6rem",
    fontWeight: 700,

  },
  underline: {
    height: ".3rem",
    width: "20%",
    backgroundColor: "#7284ff",
    minWidth: "20rem"
  }

});

const Title = ({ classes, title }) => {
  return (
    <div className={classes.root}>

      <Typography className={classes.title}>
        {title}
      </Typography>
      {/* <div className={classes.underline}/> */}

    </div>
  );
};

export default withStyles(styles)(Title);
