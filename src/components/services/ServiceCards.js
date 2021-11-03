import { Typography, withStyles } from "@material-ui/core";
import { servicesData } from "./ServicesData";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "10px",
    paddingBottom: "5rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "90%",
      marginLeft: "5%",
      padding: "5rem 0 0 0",
    },
  },
  featureCard: {
    width: "80%",
    margin: "1rem",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "5px 5px 23px -5px black",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      margin: "1.5rem",
      padding: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "24%",
      margin: "2rem 3rem",
      padding: "2rem",
    },
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    minHeight: "6rem",
    alignItems: "center",
  },
  separator: {
    height: ".3rem",
    width: "28%",
    marginLeft: ".2rem",
    marginTop: "0.5rem",
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
  },
  title: {
    padding: "2rem 0",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    fontWeight: 600,
    // color: "#27282c",
    // color: "white",

    width: "100%",
  },
  iconContainer: {
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    width: "fit-content",
    borderRadius: "50%",
  },
  featureIcon: {
    margin: "1.5rem",
    width: "6%",
    height: "6%",
    minWidth: "3.2rem",
    minHeight: "3.2rem",
    borderRadius: "10px",
  },
  description: {
    color: "#838383",
  },
  moreLink: {
    paddingTop: "1rem",
    color: "#167dff",
  },
});

const ServiceCards2 = ({ classes }) => {
  return (
    <div className={classes.root}>
      {servicesData.map((service, index) => (
        <div className={classes.featureCard} key={index}>
          <div className={classes.titleSection}>
            <div className={classes.iconContainer}>
              <img
                src={service.img}
                alt={service.feature}
                className={classes.featureIcon}
              />
            </div>
            {/* <div className={classes.separator}/> */}
            <Typography className={classes.title}>{service.feature}</Typography>
          </div>
          <Typography className={classes.description}>
            {service.description}
          </Typography>
          <Typography className={classes.moreLink}>En savoir +</Typography>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(ServiceCards2);
