import { Fab, Toolbar, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import HideOnScroll from "../mui/HideOnScroll";
import MobileMenu from "./MobileMenu";
import BackToTop from "../mui/BackToTop";
import LOGO from "../../assets/images/header/logo.svg";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    position: "fixed",
    top: 0,
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("md")]: {},
  },
  logo: {
    width: "50%",
    padding: "1rem",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "5rem",
    },
  },
  navContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      textTransform: "uppercase",
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  menuItem: {
    color: "white",
  },

  burgerMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  anchor: {
    marginTop: "-4rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "-5rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "-3.3rem",
    },

  }
});

const navLinks = [
  { id: 1, title: `services`, path: `#services` },
  { id: 2, title: `projets`, path: `#portfolio` },
  { id: 2, title: `à propos`, path: `#skills` },
  { id: 4, title: `contact`, path: `#contact` },
];

const Header = ({ classes }) => {
  return (
    <>
      <HideOnScroll>
        <div className={classes.root} id="#back-to-top-anchor">
          <a href="/">
            <img src={LOGO} alt="initials AM" className={classes.logo} />
          </a>
          <div className={classes.navContainer}>
            {navLinks.map(({ id, title, path }) => (
              <div key={id}>
                <Typography variant="h3" className={classes.menuItem}>
                  {title}
                </Typography>
              </div>
            ))}
          </div>
          <div className={classes.burgerMenu}>
            <MobileMenu />
          </div>
        </div>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" className={classes.anchor}/>

      <BackToTop>
        <Fab
          className={classes.topButton}
          size="large"
          aria-label="scroll back to top"
        >
          <ArrowDropUpSharpIcon />
        </Fab>
      </BackToTop>
    </>
  );
};

export default withStyles(styles)(Header);
