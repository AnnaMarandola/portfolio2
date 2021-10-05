// import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AnchorLink from "react-anchor-link-smooth-scroll";
import GITHUB from "../assets/contact-icons/github.svg";
import LINKEDIN from "../assets/contact-icons/linkedin.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    backgroundColor: "#29282e",
    padding: "10rem 0 5rem 0",
    [theme.breakpoints.up("lg")]: {
      padding: "5rem 0",

    }
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },
  footerNav1: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      alignItems: "start",
      width: "33%",
    },
  },
  footerNav2: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      width: "33%",
    },
  },
  footerNav3: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      alignItems: "flex-end",
      width: "33%",
    },
  },
  mediaIcon: {
    margin: "1rem",
  },
  footerText: {
    color: "white",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  logo: {
    color: "white",
  },
  linkText: {
    textDecoration: "none",
    "&:hover": {},
  },
});

function Footer({ classes }) {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container className={classes.footerContainer}>
          <div className={classes.footerNav1}>
            <Typography variant="h6" className={classes.logo}>
              Anna Marandola
            </Typography>

            <AnchorLink href="#back-to-top-anchor" className={classes.linkText}>
              <Typography variant="h6" className={classes.logo}>
                Développeur web freelance
              </Typography>
            </AnchorLink>
          </div>
          <div className={classes.footerNav2}>
            <img
              className={classes.mediaIcon}
              src={LINKEDIN}
              alt="linkedin link"
            />
            <img
              className={classes.mediaIcon}
              src={GITHUB}
              alt="twitter link"
            />
          </div>

          <div className={classes.footerNav3}>
            <AnchorLink href="#about" className={classes.linkText}>
              <Typography variant="body2" className={classes.footerText}>
                A propos
              </Typography>
            </AnchorLink>

            <AnchorLink href="#services" className={classes.linkText}>
              <Typography variant="body2" className={classes.footerText}>
                Services
              </Typography>
            </AnchorLink>

            <AnchorLink href="#porfolio" className={classes.linkText}>
              <Typography variant="body2" className={classes.footerText}>
                Portfolio
              </Typography>
            </AnchorLink>
            <AnchorLink href="#contact" className={classes.linkText}>
              <Typography variant="body2" className={classes.footerText}>
                Contact
              </Typography>
            </AnchorLink>

            {/* <Link to="/portfolio" className={classes.link}> */}
            <Typography variant="body2" className={classes.footerText}>
              Mentions légales
            </Typography>
            {/* </Link> */}
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default withStyles(styles)(Footer);
