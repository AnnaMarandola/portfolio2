import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import SocialMediaButtons from "./contact/SocialMediaButtons";
import LOGO from "../assets/images/header/logo.svg";
import HEART from "../assets/images/header/heart.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "1rem 5%",
    },
  },
  bigContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      width: "58%",
      justifyContent: "space-between",
    },
  },
  container: {
    textAlign: "center",
    padding: "3rem 1rem",
    [theme.breakpoints.up("md")]: {
      "&:nth-of-type(2)": {
        textAlign: "right",
      },
    },
  },
  logo: {
    width: "50%",
  },
  heart: {
    margin: "-0.5rem 0.2rem",
  },
  anchorLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "0.5rem",
      color: "grey",
    },
  },
});

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <SocialMediaButtons />
      </div>
      <div className={classes.bigContainer}>
        <div className={classes.container}>
          <Typography>
            made with{" "}
            <span>
              <img src={HEART} alt="love" className={classes.heart} />
            </span>{" "}
            by
          </Typography>

          <img src={LOGO} className={classes.logo} alt="logo" />
          <Typography>Copyright &copy; 2021</Typography>
        </div>
        <div className={classes.container}>
        <AnchorLink href="#services" className={classes.anchorLink}>
          <Typography>Services</Typography>
          </AnchorLink>
          <AnchorLink href="#portfolio" className={classes.anchorLink}>
          <Typography>Portfolio</Typography>
          </AnchorLink>
          <AnchorLink href="#about" className={classes.anchorLink}>
          <Typography>A propos</Typography>
          </AnchorLink>
          <AnchorLink href="#contact" className={classes.anchorLink}>
          <Typography>Contact</Typography>
          </AnchorLink>
          <Typography>Mentions légales</Typography>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Footer);
