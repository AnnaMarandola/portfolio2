import { Typography, withStyles } from "@material-ui/core";
import { servicesData } from "./ServicesData";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "10px",
    width: "90%",
    marginLeft: "5%",
    padding: "5rem 0",
  },
  featureCard: {
    width: "24%",
    margin: "2rem 3rem",
    padding: "2rem",
    // border: "1px solid gray",
    // backgroundColor: "white",
    // borderRadius: "10px",
    // boxShadow: "5px 5px 23px -8px",

  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    minHeight: "6rem",
    
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
    padding: "1rem 0",
    marginTop: "1rem",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "#27282c",
    width: "100%",
  },
  featureIcon: {
    padding: "1rem",
    width: "11%",
    height: "11%",
    minWidth: "5rem",
    minHeight: "5rem",
    // backgroundColor: "#27282c",
    borderRadius: "10px"
  },
  description: {
    color: "#838383",
  },
  moreLink: {
    paddingTop: "1rem",
    color: "#167dff"
  }
});

const ServiceCards2 = ({ classes }) => {
  return (
    <div className={classes.root}>
      {servicesData.map((service, index) => (
        <div className={classes.featureCard} key={index}>
          <div className={classes.titleSection}>
            <img
              src={service.img}
              alt={service.feature}
              className={classes.featureIcon}
            />
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
