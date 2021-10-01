import { Card, Typography, withStyles } from "@material-ui/core";
import MAP from "../../assets/map.png";
import GITHUB from "../../assets/contact-icons/github.svg";
import LINKEDIN from "../../assets/contact-icons/linkedin.svg";
import ADRESS from "../../assets/contact-icons/adress.svg";
import PHONE from "../../assets/contact-icons/phone.svg";
import ID from "../../assets/contact-icons/id.svg";
import HOURS from "../../assets/contact-icons/hours.svg";
import MAIL from "../../assets/contact-icons/email.svg";

const styles = (theme) => ({
  root: {
    padding: "0.5rem",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    color: "#D3D3D3",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      padding: "3rem",
      width: "50%",
    },
  },
  mapContainer: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "3rem",
    },
  },
  map: {
    width: "95%",
    marginBottom: "2rem",
    boxShadow: "5px 5px 23px -14px",

    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  contactCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#29282e",
    marginBottom: "0.5rem",
    padding: "1rem",
    boxShadow: "5px 5px 23px -5px",
  },
  title: {
    textTransform: "uppercase",
        color: "#b2a9a6",
  },
  separator: {
    height: "1px",
    width: "100%",
    marginTop: "1rem",
    marginBottom :"1rem",
    backgroundColor: "#c4c4c4"
    // background:
    // "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
  },
  text: {
    color: "#b2a9a6",
    padding: "1rem",
    textAlign: "right"
  }
});

const ContactDetails = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.detailsContainer}>
      <Card className={classes.contactCard}>
        <img src={GITHUB} alt="github"/>
        {/* <div className={classes.separator}/> */}
        </Card>
        <Card className={classes.contactCard}>
        <img src={MAIL} alt="email"/>
        <Typography className={classes.text}>anna.yws@gmail.com</Typography>
        {/* <div className={classes.separator}/> */}
        </Card>
        <Card className={classes.contactCard}>
        <img src={PHONE} alt="phone"/>
        {/* <div className={classes.separator} /> */}
        <Typography className={classes.text}>(+33)6.15.42.10.45</Typography>
        </Card>
        <Card className={classes.contactCard}>
        <img src={ADRESS} alt="adress"/>
        {/* <div className={classes.separator}/> */}
        <Typography className={classes.text}>85 bvd Gabriel Koenigs <br/> 31300 Toulouse</Typography>
        </Card>
        <Card className={classes.contactCard}>
        <img src={ID} alt="siren"/>
        {/* <div className={classes.separator}/> */}
        <Typography className={classes.text}>424 242 424</Typography>
        </Card>
      </div>
      <div className={classes.mapContainer}>
        <img src={MAP} alt="adresse plan" className={classes.map} />
        <Card className={classes.contactCard}>
        <img src={HOURS} alt="hours"/>
        {/* <div className={classes.separator}/> */}
        <Typography className={classes.text}>Lundi - Vendredi</Typography>
        <Typography className={classes.text}>9h00 - 19h30</Typography>
        </Card>

      </div>
    </div>
  );
};

export default withStyles(styles)(ContactDetails);
