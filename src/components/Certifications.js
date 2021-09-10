import { Typography, Avatar, Card, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import OPQUAST from "../assets/certifs/opquast.jpg";
import GOOGLE from "../assets/certifs/googlecertif.png";
import RF from "../assets/certifs/rf.png";
import WCS from "../assets/certifs/wcs.jpg";
import OCR from "../assets/certifs/ocr.png";
import GetAppIcon from '@material-ui/icons/GetApp';


const styles = (theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    padding: "1rem",
    margin: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      minWidth: "20rem",
      maxWidth: "35rem",
      padding: "2rem",
      margin: "2rem",
    },
  },
  cardTitle: {
    marginBottom: "2rem",
    marginTop: "2rem",
    color: "#D3D3D3",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    }
  },
  certifCard: {
    marginBottom: "2rem",
    display: "flex",
    width: "85%",
    padding: "0.5rem",
    backgroundColor: "#29282e",
    boxShadow: "5px 5px 23px -5px",
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    }
  },
  textCard: {
    color: "#D3D3D3",
    padding: "0.5rem",
    width: "100%",
    backgroundColor: "#29282e",

  },
  certifTitleCard: {
    backgroundColor: "#29282e",
    padding: "0.3rem",
    marginBottom: "0.5rem", 
    boxShadow: "5px 5px 23px -12px",

  },
  certifDescriptionCard: {
    padding: "0.5rem 1.5rem",
    backgroundColor: "#29282e",
    color: "#D3D3D3",
  },
  certifTitle: {
    color: "#D3D3D3",
    opacity: 0.8,
    padding: "0.1rem 1rem",
    borderRadius: "20px",
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
    boxShadow: "5px 5px 23px -5px",
    borderRadius: "5px"
  },
  downloadIcon: {
    boxShadow: "5px 5px 23px -3px",
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
          <Button><GetAppIcon className={classes.downloadIcon} style={{color:     "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)"}}/></Button>
          </div>
          <div className={classes.textCard}>
          <Card className={classes.certifTitleCard}>
            <Typography className={classes.certifTitle}>{certif.title}</Typography>
            </Card>
            <Card className={classes.certifDescriptionCard}>
            <Typography variant="body2">{certif.subtitle}</Typography>
            <Typography variant="body2">{certif.date}</Typography>
            </Card>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(Certifications);
