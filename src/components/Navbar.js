import {
    AppBar,
    Container,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Link,
  } from "@material-ui/core";
  import { withStyles } from "@material-ui/core/styles";
import AM from "../assets/logoAm.png";
  
  const styles = (theme) => ({
    root: {
      backgroundColor: "transparent",
      position: "relative",
      height: "5rem"
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
      weight: 600,
      minWidth: "8rem",
      "&:hover": {
        color: "blue",
      },
    },
    linkText: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
        textTransform: `uppercase`,
        textUnderlineOffset: "1rem",
        color: theme.palette.primary.whiteish,
        "&:hover": {
          color: theme.palette.primary.yellow,
          fontWeight: 600,
        },
      },
    },
    topButton: {
      color: "yellow",
      background:
        "linear-gradient(90deg, rgba(242,168,29,1) 0%, rgba(242,123,19,1) 99%)",
      "&:hover": {
        background:
          "linear-gradient(56deg, rgba(35,17,64,1) 0%, rgba(19,29,38,1) 99%)",
      },
    },
  });
  
  const navLinks = [
    { id: 2, title: `portfolio`, path: `/portfolio` },
    { id: 1, title: `services`, path: `/services` },
    { id: 3, title: `à propos`, path: `/about` },
    { id: 4, title: `contact`, path: `/contact` },
  ];
  
  const Header = ({ classes }) => {
    return (
      <>
          <AppBar className={classes.root}>
            <Toolbar component="nav">
              <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
                <a href="/" style={{ color: `yellow` }}>
                  <img src={AM} alt="initials AM" className={classes.logo} />
                </a>
  
                  <List
                    component="nav"
                    aria-labelledby="main navigation"
                    className={classes.navListDisplayFlex}
                  >
                    {navLinks.map(({ id, title, path }) => (
                      <div key={id}>
                        <Link to={path} className={classes.linkText}>
                          <ListItem>
                            <ListItemText
                              className={classes.navText}
                            >
                              {title}
                            </ListItemText>
                          </ListItem>
                        </Link>
                      </div>
                    ))}
                  </List>
              </Container>
            </Toolbar>
          </AppBar>
  
      </>
    );
  };
  
  export default withStyles(styles)(Header);
  