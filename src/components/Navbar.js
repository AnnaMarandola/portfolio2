import { Typography, Fab } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { withStyles } from "@material-ui/core/styles";
import BackToTop from "./BackToTop";
import { KeyboardArrowUp } from "@material-ui/icons";

import AM from "../assets/logoAm.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "5rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: "40%",
  },
  navContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      width: "55%",
    },
  },
  navText: {
    color: "white",
    minWidth: "8rem",
    fontSize: "1.4rem",
    fontWeight: 550,
    mixBlendMode: "difference",
    "&:hover": {
      mixBlendMode: "difference",
      color: "white",
    },
  },
  linkText: {
    textDecoration: "none",
    display: "block",
    textTransform: `uppercase`,
    textUnderlineOffset: "1rem",

    "&:hover": {
      textDecoration: "underline",
      mixBlendMode: "difference",
      color: "white",
      fontWeight: 600,
    },
    [theme.breakpoints.up("md")]: {
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
      <div className={classes.root} id="back-to-top-anchor">
        <a href="/">
          <Typography>AM</Typography>
          <img src={AM} alt="initials AM" className={classes.logo} />
        </a>
        <div className={classes.navContainer}>
          {navLinks.map(({ id, title, path }) => (
            <div key={id}>
              <AnchorLink href={path} className={classes.linkText}>
                <Typography className={classes.navText}>{title}</Typography>
              </AnchorLink>
            </div>
          ))}
        </div>
      </div>

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
