import { useState, Fragment } from "react";
import { Fade, withStyles, Button, Menu, MenuItem } from "@material-ui/core";
import CROSS from "../assets/close.svg";
import MENU from "../assets/burger.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const styles = (theme) => ({
  root: {
    justifyContent: "space-between",
  },
  separator: {
    width: "80%",
    border: "1px solid linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    margin: "0.5rem 10%",
  },
  menuIcon: {
    position: "absolute",
    width: "50%",
  },
  navLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  menuItem: {
    color: "black",
    textTransform: "uppercase",
  },
});

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "white",
    paddingBottom: "1rem",
    marginTop: "2rem",
    width: "100%",
  },
  list: {
    width: "100%",
  },
})((props) => (
  <Menu
    elevation={20}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    width: "auto",
    fontSize: "1.2em",
    fontWeight: 700,
    lineHeight: "2em",
    backgroundColor: theme.palette.primary.pureWhite,
    color: theme.palette.primary.main,
    justifyContent: "center",
  },
}))(MenuItem);

function MobileMenu({ classes }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.root}
      >
        {anchorEl === null ? (
          <img src={MENU} alt="close cross" className={classes.menuIcon} />
        ) : (
          <img src={CROSS} alt="close cross" className={classes.menuIcon} />
        )}
      </Button>
      <StyledMenu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
        elevation={1}
      >
        <AnchorLink className={classes.navLink} href="#services">
          <StyledMenuItem className={classes.menuItem} onClick={handleClose}>
            services
          </StyledMenuItem>
        </AnchorLink>
        <hr className={classes.separator} />

        <AnchorLink className={classes.navLink} href="#portfolio">
          <StyledMenuItem className={classes.menuItem} onClick={handleClose}>
            portfolio
          </StyledMenuItem>
        </AnchorLink>
        <hr className={classes.separator} />

        <AnchorLink className={classes.navLink} href="#about">
          <StyledMenuItem className={classes.menuItem} onClick={handleClose}>
            à propos
          </StyledMenuItem>
        </AnchorLink>
        <hr className={classes.separator} />

        <AnchorLink className={classes.navLink} href="#contact">
          <StyledMenuItem className={classes.menuItem} onClick={handleClose}>
            contact
          </StyledMenuItem>
        </AnchorLink>

        <hr className={classes.separator} />
      </StyledMenu>
    </Fragment>
  );
}

export default withStyles(styles)(MobileMenu);
