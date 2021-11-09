import { ListItem, Typography, withStyles, Card } from "@material-ui/core";
import { servicesData } from "./ServicesData";
import BG from "../../assets/round.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    borderRadius: "10px",
    paddingBottom: "5rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "95%",
      marginLeft: "2.5%",
      padding: "5rem 0 0 0",
    },
  },
  featureCard: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right ",
    backgroundSize: "80%",
    width: "100%",
    margin: "1rem 0",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "5px 5px 23px -5px #909090",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      padding: "1rem",
      margin: "1.5rem .5rem"

    },
    [theme.breakpoints.up("lg")]: {
      width: "22%",
      // margin: "3rem 3rem",
      padding: "2rem",
      margin: "1.5rem 1rem"
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
    width: "100%",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingLeft: "1rem",
      fontSize: "1.5rem"
    },
  },
  iconContainer: {
    backgroundColor: "#303030",
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
    // color: "#838383",
    textAlign: "left",
    fontSize: "1.2rem",
    fontWeight: 600,
  },
});

const ServiceCards2 = ({ classes }) => {
  return (
    <div className={classes.root}>
      {servicesData.map((service, index) => (
        <Card className={classes.featureCard} key={index}>
          <div className={classes.titleSection}>
            <div className={classes.iconContainer}>
              <img
                src={service.img}
                alt={service.feature}
                className={classes.featureIcon}
              />
            </div>
            <Typography className={classes.title}>{service.feature}</Typography>
            {/* <div className={classes.separator}/> */}
          </div>
          {service.description.map((feature, id) => (
            <ListItem className={classes.description} key={id}>
              {feature}
            </ListItem>
          ))}
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(ServiceCards2);
