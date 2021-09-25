import { AppBar, Toolbar, Typography, Fab } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { withStyles } from "@material-ui/core/styles";
import BackToTop from "./BackToTop";
import { KeyboardArrowUp } from "@material-ui/icons";

import AM from "../assets/logoAm.png";

const styles = (theme) => ({
  root: {
    backgroundColor: "transparent",
    position: "relative",
    height: "5rem",
    boxShadow: "none",
  },
  logo: {
    width: "60%",
    marginLeft: "-2rem",
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    padding: `0.5rem`,
    width: "100%",
  },
  navListDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    paddingTop: "3.2rem",
    // width: "100%",
  },
  navText: {
    color: "white",
    minWidth: "8rem",
    "&:hover": {
      color: "white",
    },
  },
  linkText: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      textTransform: `uppercase`,
      textUnderlineOffset: "1rem",
      color: "#a75ed7",
      "&:hover": {
        color: theme.palette.primary.yellow,
        fontWeight: 600,
      },
    },
  },
  topButton: {
    color: "blue",
    "&:hover": {
      color: "white",
      background:
      "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
    },
  },
});

const navLinks = [
  { id: 2, title: `portfolio`, path: `#portfolio` },
  { id: 1, title: `services`, path: `#services` },
  { id: 3, title: `à propos`, path: `#about` },
  { id: 4, title: `contact`, path: `#contact` },
];

const Header = ({ classes }) => {
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar component="nav" id="back-to-top-anchor">
          <a href="/" >
            <Typography>AM</Typography>
            <img src={AM} alt="initials AM" className={classes.logo} />
          </a>

          {navLinks.map(({ id, title, path }) => (
            <div key={id}>
              <AnchorLink href={path} className={classes.linkText}>
                <Typography className={classes.navText}>{title}</Typography>
              </AnchorLink>
            </div>
          ))}
        </Toolbar>
      </AppBar>
      <BackToTop>
        <Fab
          className={classes.topButton}
          size="large"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default withStyles(styles)(Header);
