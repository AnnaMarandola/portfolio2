import { Typography, withStyles } from "@material-ui/core";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import Title from "./Title";

const styles = (theme) => ({
  root: {
    padding: "8rem 5%",
    backgroundColor: "#29282e",
    // background: "linear-gradient(to left bottom, #626161, #575656, #4b4a4a, #414040, #363535, #322e2f, #2e282c, #272229, #251f2a, #231c2c, #20192e, #1b1730)",
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
    // color: "#ffffff",

  },
  subtitle: {
    fontSize: "1.5rem",
    paddingBottom: "6rem",
    textAlign: "center",
    color: "#D3D3D3",

  },
});

const Contact = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Title title={"contact"}/>
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
