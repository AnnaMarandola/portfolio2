import { Fab, Toolbar, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import HideOnScroll from "../mui/HideOnScroll";
import MobileMenu from "./MobileMenu";
import BackToTop from "../mui/BackToTop";
import LOGO from "../../assets/images/header/logo.png";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import AnchorLink from "react-anchor-link-smooth-scroll";

const styles = (theme) => ({
  root: {
    display: "flex",
    position: "fixed",
    top: 0,
    zIndex: 99,
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
  logo: {
    width: "70%",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      paddingLeft: "4rem"
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "9.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "11rem",
    },
  },
  navContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      textTransform: "uppercase",
      paddingRight: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      paddingRight: "11rem",
    },
    [theme.breakpoints.up("xl")]: {
      width: "50%",
      paddingRight: "10rem",
    },
  },
  menuItem: {
    color: "white",
  },
  anchorLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "1rem",
      color: "white",
    },
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
  },
});

const navLinks = [
  { id: 1, title: `services`, path: `#services` },
  { id: 2, title: `porfolio`, path: `#portfolio` },
  { id: 2, title: `?? propos`, path: `#about` },
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
                <AnchorLink href={path} className={classes.anchorLink}>
                  <Typography variant="h5" className={classes.menuItem}>
                    {title}
                  </Typography>
                </AnchorLink>
              </div>
            ))}
          </div>
          <div className={classes.burgerMenu}>
            <MobileMenu />
          </div>
        </div>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" className={classes.anchor} />

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
