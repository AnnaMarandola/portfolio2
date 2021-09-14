// import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Avatar, Link } from "@material-ui/core";
import TWITTER from "../assets/twitter.png";
import LINKEDIN from "../assets/linkedin.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    backgroundColor: "#272c2d",
    opacity: 0.95,
    paddingTop: "2rem",
    paddingBottom: "2rem",
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
    [theme.breakpoints.up("sm")]: {
      alignItems: "start",
      width: "33%",
    },
  },
  footerNav2: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      alignItems: "center",
      width: "33%",
    },
  },
  footerNav3: {
    display: "flex",
    flexDirection: "column",

   [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      width: "33%",
    },
  },
  mediaIcon: {
    margin: "1rem",
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  footerText: {
    color: "white",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  logo: {
    color: "white"
  },
  link: {
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
            <Typography variant="h5" className={classes.logo} >
              Anna Marandola
            </Typography>
            <Typography variant="h5" className={classes.logo} >
              Développeur web freelance
            </Typography>


            <Link to="/about" className={classes.link}>
              <Typography variant="body2" className={classes.footerText}>
                A propos
              </Typography>
            </Link>

            <Link to="/services" className={classes.link}>
              <Typography variant="body2" className={classes.footerText}>
                Services
              </Typography>
            </Link>

            <Link to="/portfolio" className={classes.link}>
              <Typography variant="body2" className={classes.footerText}>
                Portfolio
              </Typography>
            </Link>
          </div>

          <div className={classes.footerNav2}>
            <Link to="/portfolio" className={classes.link}>
              <Typography variant="body2" className={classes.footerText}>
                Contact
              </Typography>
            </Link>

            <Link to="/portfolio" className={classes.link}>
              <Typography variant="body2" className={classes.footerText}>
                Mentions légales
              </Typography>
            </Link>
          </div>
          <div className={classes.footerNav3}>
            <Avatar
              className={classes.mediaIcon}
              src={LINKEDIN}
              alt="linkedin link"
            />
            <Avatar
              className={classes.mediaIcon}
              src={TWITTER}
              alt="twitter link"
            />
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default withStyles(styles)(Footer);
