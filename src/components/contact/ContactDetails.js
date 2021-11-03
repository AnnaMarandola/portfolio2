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
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    color: "#D3D3D3",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem",
      width: "65%",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      padding: "3rem",
      width: "50%",
    },
  },
  mapContainer: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "3rem",
    },
  },
  map: {
    width: "100%",
    boxShadow: "5px 5px 23px -14px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "2rem",
    },
  },
  contactCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#424242",
    marginBottom: "0.5rem",
    padding: "1rem",
    boxShadow: "5px 5px 23px -5px black",
    [theme.breakpoints.up("sm")]: {
      minWidth: "15rem",
    },
    "&:nth-of-type(1)": {
      justifyContent: "space-evenly",
    },
  },
  title: {
    textTransform: "uppercase",
  },
  text: {
    color: "white",
    padding: "1rem",
    textAlign: "right",
  },
  linkText: {
    textDecoration: "none",
  },
  mediaIcon: {
    boxShadow: "5px 5px 15px -15px",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)"
    }
  },
});

const ContactDetails = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.detailsContainer}>
        <Card className={classes.contactCard}>
          <a
            href="https://github.com/AnnaMarandola"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkText}
          >
            <img src={GITHUB} alt="github" className={classes.mediaIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/anna-m-42ab3b18a/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkText}
          >
            <img src={LINKEDIN} alt="linkedin" className={classes.mediaIcon} />
          </a>
        </Card>
        <Card className={classes.contactCard}>
          <img src={MAIL} alt="email" />
          <Typography className={classes.text}>annamarandola@gmail.com</Typography>
        </Card>
        <Card className={classes.contactCard}>
          <img src={PHONE} alt="phone" />
          <Typography className={classes.text}>(+33)6.47.66.23.14</Typography>
        </Card>
        <Card className={classes.contactCard}>
          <img src={ADRESS} alt="adress" />
          <Typography className={classes.text}>
            85 bvd Gabriel Koenigs <br /> 31300 Toulouse
          </Typography>
        </Card>
        <Card className={classes.contactCard}>
          <img src={ID} alt="siren" />
          <Typography className={classes.text}>SIREN : 900349515</Typography>
        </Card>
      </div>
      <div className={classes.mapContainer}>
        <img src={MAP} alt="adresse plan" className={classes.map} />
        <Card className={classes.contactCard}>
          <img src={HOURS} alt="hours" />
          <Typography className={classes.text}>Lundi - Vendredi</Typography>
          <Typography className={classes.text}>9h00 - 19h30</Typography>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(styles)(ContactDetails);
