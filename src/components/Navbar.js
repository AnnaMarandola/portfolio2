import { Typography, Fab } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { withStyles } from "@material-ui/core/styles";
import BackToTop from "./BackToTop";
import { KeyboardArrowUp } from "@material-ui/icons";
import AMBLACK from "../assets/AMBLACK.svg";
import MobileMenu from "./MobileMenu";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "7rem",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {},
  },
  logo: {
    marginTop: "-8rem",
    // marginLeft: "-1rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: "2rem",
    },
  },
  navContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      width: "85%",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "55%",
    },
  },
  navText: {
    color: "white",
    minWidth: "8rem",
    fontSize: "1.3rem",
    fontWeight: 600,
    mixBlendMode: "difference",
    padding: "0 0.5rem",
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
    [theme.breakpoints.up("md")]: {},
  },
  burgerMenu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
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
  { id: 1, title: `services`, path: `#services` },
  { id: 2, title: `portfolio`, path: `#portfolio` },
  { id: 2, title: `compétences`, path: `#skills` },
  { id: 4, title: `contact`, path: `#contact` },
];

const Header = ({ classes, status }) => {
  console.log("status in navbar", status);
  return (
    <>
      <div className={classes.root} id="back-to-top-anchor">
        <a href="/">
          <img src={AMBLACK} alt="initials AM" className={classes.logo} />
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
        <div className={classes.burgerMenu}>
          <MobileMenu />
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
