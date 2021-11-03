import { withStyles } from "@material-ui/core";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Title from "../Title";

const styles = (theme) => ({
  root: {
    padding: "0 5% 5% 5%",
  },
  container: {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
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
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default withStyles(styles)(Contact);
