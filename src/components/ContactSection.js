import { Typography, withStyles } from "@material-ui/core";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const styles = (theme) => ({
  root: {
    padding: "8rem 5%",
    [theme.breakpoints.up("md")]: {},
  },
  container: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "space-evenly",
    },
  },
  title: {
    fontSize: "4rem",
    paddingBottom: "4rem",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.5rem",
    paddingBottom: "6rem",
    textAlign: "center",
  },
});

const Contact = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Contact</Typography>
      <Typography className={classes.subtitle}>
        Lorem ipsum felis eu interdum maximus, et conditmentum nisi turpis nec
        ligula.
      </Typography>

      <div className={classes.container}>
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default withStyles(styles)(Contact);
