import { Card, Typography, withStyles } from "@material-ui/core";
import MAP from "../assets/map.png";

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
    paddingTop: "2rem",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  contactCard: {
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
    // background: "linear-gradient(to right top, #4dcc95, #58cb90, #62cb8b, #6bca86, #73c982)",
    height: "0.2rem",
    width: "100%",
    marginBottom :"1rem",
    background:
    "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",

  }
});

const ContactDetails = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.detailsContainer}>
      <Card className={classes.contactCard}>
        <Typography className={classes.title}>github linkdin</Typography>
        <div className={classes.separator}/>
        </Card>
        <Card className={classes.contactCard}>
        <Typography variant="h6" className={classes.title}>e-mail</Typography>
        <div className={classes.separator}/>
        <Typography>anna.yws@gmail.com</Typography>
        </Card>
        <Card className={classes.contactCard}>
        <Typography variant="h6" className={classes.title}>téléphone</Typography>
        <div className={classes.separator} />
        <Typography>(+33)6.15.42.10.45</Typography>
        </Card>
        <Card className={classes.contactCard}>
        <Typography variant="h6" className={classes.title}>adresse</Typography>
        <div className={classes.separator}/>
        <Typography>85 bvd Gabriel Koenigs, 31300 Toulouse</Typography>
        </Card>
        <Card className={classes.contactCard}>
        <Typography variant="h6" className={classes.title}>SIREN</Typography>
        <div className={classes.separator}/>
        <Typography>424 242 424</Typography>
        </Card>

      </div>
      <div className={classes.mapContainer}>
        <img src={MAP} alt="adresse plan" className={classes.map} />
        <Card className={classes.contactCard}>
        <Typography variant="h6" className={classes.title}>horaires</Typography>
        <div className={classes.separator}/>
        <Typography>Lundi - Vendredi</Typography>
        <Typography>9h00 - 19h30</Typography>
        </Card>

      </div>
    </div>
  );
};

export default withStyles(styles)(ContactDetails);
