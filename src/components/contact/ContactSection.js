import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Map from "./Map";
import Form from "./Form";
import ContactDetails from "./ContactDetails";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },

    [theme.breakpoints.up("lg")]: {
    },

  },
  title: {
    padding: "0 2rem 4rem 2rem",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "7rem"
    } 
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    paddingBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%"
    },
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
        width: "95%",
    },
    [theme.breakpoints.up("xl")]: {
    },
  },
});

const ContactSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Contact
      </Typography>
      <div className={classes.mainContainer}>
        <Form />
        <Map />
      </div>
      <ContactDetails />
    </div>
  );
};

export default withStyles(styles)(ContactSection);
