import { Card, Typography, withStyles } from "@material-ui/core";
import { servicesData } from "./ServicesData";
import CIRCLES  from "../assets/globe.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "10px",
    width: "90%",
    marginLeft: "5%",
    // backgroundColor: "#282d2e",
    padding: "2rem 0",
    // backgroundImage: `url(${CIRCLES})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: "cover 70%",
  },
  featureCard: {
    width: "24%",
    margin: "2rem 3rem",
    boxShadow: "5px 5px 23px -10px ",
    backgroundColor: "#29282e",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "6rem",
  },
  separator: {
    height: ".5rem",
    width: "25%",
    marginLeft: ".2rem",
    backgroundColor: "#a75ed7",
    maxMarginTop: "1rem",
  },
  title: {
    padding: "0.5rem 0",
    marginTop: "1rem",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    fontWeight: 600,
    color: "white",
    backgroundColor: "#040506",
    width: "100%",
    textAlign: "center",
    opacity: 0.6,

  },
  featureIcon: {
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    padding: "1rem",
    width: "10%",
    height: "10%",
    minWidth: "4.5rem",
    minHeight: "4.5rem",
    borderRadius: "20%",
    marginTop: "1rem",
    boxShadow: "5px 5px 23px -5px",
    // "&:nth-child(2n + 1)": {
    //   background: "linear-gradient(to right top, #4ea78f, #48a390, #439f91, #3f9b91, #3b9791, #3a9591, #389490, #379290, #379290, #369391, #369391, #359391)",
  //  },

  },
  description: {
    padding: "1rem",
    color: "#b2a9a6",
  },
});

const ServiceCards2 = ({ classes }) => {
  return (
    <div className={classes.root}>
      {servicesData.map((service, index) => (
        <Card className={classes.featureCard} key={index}>
          <div className={classes.titleSection}>
            <img
              src={service.img}
              alt={service.feature}
              className={classes.featureIcon}
            />
            <Typography className={classes.title}>{service.feature}</Typography>
          </div>
          {/* <div className={classes.separator}/> */}
          <Typography className={classes.description}>
            {service.description}
          </Typography>{" "}
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(ServiceCards2);
