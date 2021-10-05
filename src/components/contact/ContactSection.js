import { withStyles } from "@material-ui/core";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Title from "../Title";

const styles = (theme) => ({
  root: {
    padding: "0 5% 5% 5%",
    backgroundColor: "#29282e",
  },
  container: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
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
    <Title title={"contact"} color={"white"}/>

      <div className={classes.container}>
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default withStyles(styles)(Contact);
