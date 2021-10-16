import { Typography, Card, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import OPQUAST from "../../assets/certifs/opquast.jpg";
import GOOGLE from "../../assets/certifs/googlecertif.png";
import RF from "../../assets/certifs/rf.png";
import WCS from "../../assets/certifs/wcs.jpg";
import OCR from "../../assets/certifs/ocr.png";
import GetAppIcon from '@material-ui/icons/GetApp';


const styles = (theme) => ({
  root: {
    width: "100%",
    height: "fit-content",
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      minWidth: "20rem",
      maxWidth: "35rem",
      padding: "2rem",
      margin: "2rem",
    },
  },
  cardTitle: {
    margin: "3rem 1rem",
    color: "white",
    fontWeight: 600,
    fontSize: "2rem",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    }
  },
  certifCard: {
    marginBottom: "2rem",
    display: "flex",
    width: "100%",
    padding: "0.5rem",
    borderRadius: "10px",
    backgroundColor: "#29282e",
    boxShadow: "5px 5px 23px -8px",

    [theme.breakpoints.up("md")]: {
      width: "100%",
    }
  },
  textCard: {
    color: "white",
    padding: "0.5rem",
    width: "100%",

  },
  certifTitleCard: {
    color: "white",
    padding: "0.3rem",

  },
  certifDescriptionCard: {
    padding: "0 0.5rem",
    color: "white",
  },
  certifTitle: {
    color: "white",
    fontWeight: 600,
    width: "fit-content",
  },
  avatarContainer: {
      display: "flex",
      flexDirection: "column",
  },
  avatar: {
    margin: "0.5rem",
    width: "4rem",
    height: "4rem",
    borderRadius: "5px"
  },
  downloadIcon: {
    background:
    "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",

  }
});

const certifData = [
  {
    icon: OPQUAST,
    title: "Certification OPQUAST",
    subtitle: "gestion de projets web",
    date: "en cours",
  },

  {
    icon: GOOGLE,
    title: "Certification Google",
    subtitle: "les fondamentaux du marketing numérique",
    date: "12/2020",
  },
  {
    icon: RF,
    title: "Titre professionnel développeur web/mobile",
    subtitle: "",
    date: "oct 2020",
  },
  {
    icon: WCS,
    title:
      "Wild Code School",
    subtitle: "Formation de concepteur développeur web/mobile",
    date: "Campus de Toulouse - promo 2019",
  },
  {
    icon: OCR,
    title:
      "Certificats OCR",
    subtitle: "auto-formation continue",
    date: "depuis 2019",
  },
];

const Certifications = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.cardTitle}>
        Formations et certifications
      </Typography>

      {certifData.map((certif) => (
        <Card key={certif.title} className={classes.certifCard}>
          <div className={classes.avatarContainer}>
          <img className={classes.avatar} src={certif.icon} alt="logo-certif"/>
          {/* <Button aria-label="download"><GetAppIcon className={classes.downloadIcon} style={{color:     "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)"}}/></Button> */}
          </div>
          <div className={classes.textCard}>
          <div className={classes.certifTitleCard}>
            <Typography className={classes.certifTitle}>{certif.title}</Typography>
            </div>
            <div className={classes.certifDescriptionCard}>
            <Typography variant="body2">{certif.subtitle}</Typography>
            <Typography variant="body2">{certif.date}</Typography>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(Certifications);
