import { withStyles } from "@material-ui/core";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Title from "../Title";

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      padding: 0
    },

  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
    },
  },
  title: {
    fontSize: "4rem",
    paddingBottom: "4rem",
    textAlign: "center",
    color: "#ffffff",
  },
});

const Contact = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Title title={"contact"}/>

      <div className={classes.container}>
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
};

export default withStyles(styles)(Contact);
