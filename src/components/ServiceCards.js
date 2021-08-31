import { Card, Typography, withStyles } from "@material-ui/core";
import { servicesData } from "./ServicesData";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
        background: "#ff4f4",

  },
  featureCard: {
    width: "22%",
    padding: "2rem",
    margin: "2rem",
    // background: "#121212",
    // backgroundImage: "url('https://svgur.com/i/8uP.svg')",
    // backgroundSize: "contain",
    // borderRadius: "20px",
    boxShadow: "0px 0px 23px -10px ",
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "right",
    padding: "1rem",
    color: "black",
  },
  featureIcon: {
    // background: "linear-gradient(to right top, #FFC593, #BC7198, #5A77FF)",
    padding: "1rem",
    width: "2%",
    minWidth: "4rem",
    borderRadius: "20%",
  },
  description: {
      paddingTop: "1rem",
      textAlign: "right",
      color: "black",

  }
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
            <Typography variant="h5" className={classes.title}>{service.feature}</Typography>
          </div>
          <Typography className={classes.description}>{service.description}</Typography>{" "}
        </Card>
      ))}
    </div>
  );
};

export default withStyles(styles)(ServiceCards2);
