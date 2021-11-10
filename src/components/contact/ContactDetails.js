import { Typography, withStyles } from "@material-ui/core";
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
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      width: "50%",
      justifyContent: "space-around",
      alignItems: "flex-start"
    },
  },
  detailsContainer: {
  },
  mapContainer: {
    paddingTop: "5rem",
    [theme.breakpoints.up("xs")]: {
      padding: "5rem 0",
    },
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },
  },
  map: {
    boxShadow: "5px 5px 23px -14px",
    [theme.breakpoints.up("sm")]: {
      width: "110%",
      marginBottom: "2rem",
    },
  },
  contactCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
    padding: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      minWidth: "15rem",
    },
    "&:nth-of-type(1)": {
      justifyContent: "space-evenly",
    },
  },
  hoursText: {
  },
  title: {
    textTransform: "uppercase",
  },
  text: {
    padding: "0 1rem",
    textAlign: "right",
  },
  linkText: {
    textDecoration: "none",
  },
  mediaIcon: {
    boxShadow: "5px 5px 15px -15px",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  image: {

  }
});

const ContactDetails = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.detailsContainer}>
        <div className={classes.contactCard}>
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
        </div>
        <div className={classes.contactCard}>
          <img src={MAIL} alt="email" className={classes.image} />
          <Typography className={classes.text}>
            annamarandola@gmail.com
          </Typography>
        </div>
        <div className={classes.contactCard}>
          <img src={PHONE} alt="phone" className={classes.image}/>
          <Typography className={classes.text}>(+33)6.47.66.23.14</Typography>
        </div>
        <div className={classes.contactCard}>
          <img src={ADRESS} alt="adress" className={classes.image}/>
          <Typography className={classes.text}>
            85 bvd Gabriel Koenigs <br /> 31300 Toulouse
          </Typography>
        </div>
        <div className={classes.contactCard}>
          <img src={ID} alt="siren" className={classes.image}/>
          <Typography className={classes.text}>SIREN : 900349515</Typography>
        </div>
        <div className={classes.contactCard}>
          <img src={HOURS} alt="hours" className={classes.image} />
          <div className={classes.hoursTexts}>
          <Typography className={classes.text}>Lundi - Vendredi</Typography>
          <Typography className={classes.text}>9h00 - 19h30</Typography>
          </div>
        </div>
      </div>
      <div className={classes.mapContainer}>
        <img src={MAP} alt="adresse plan" className={classes.map} />
      </div>
    </div>
  );
};

export default withStyles(styles)(ContactDetails);
