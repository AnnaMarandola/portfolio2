import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import CTAButton from "../mui/CTAButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

const styles = (theme) => ({
  root: {
    border: "1px solid white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "center",
    height: "18rem",
    width: "80%",
    margin: "3rem 0rem",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      margin: "5rem 0rem",
    },
  },
});

const Booster = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h5">Une idée ? un projet ? des questions ?</Typography>
      <Typography variant="h5">N'hesitez pas, demandez votre devis !</Typography>
      <Typography variant="h5">[ gratuit ]</Typography>
      <AnchorLink href="#contact" className={classes.anchorLink}>
        <CTAButton>Contact</CTAButton>
      </AnchorLink>
    </div>
  );
};

export default withStyles(styles)(Booster);
