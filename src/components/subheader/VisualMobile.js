import { withStyles } from "@material-ui/core";
import DEV from "../../assets/subheader/dev.png";
import SEO from "../../assets/subheader/seo.png";
import DIAL from "../../assets/subheader/dial.png";
import CODE from "../../assets/subheader/code.png";
const styles = (theme) => ({
  root: {
    width: "100%",
    paddingBottom: "5rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    [theme.breakpoints.up("md")]: {
        paddingRight: "5%",
        width: "50%",


    },

  },
  imgContainer: {
    width: "100%",
    height: "15rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "white",
    boxShadow: "5px 5px 23px -12px gray",

    "&:nth-child(1), &:nth-child(4)": {
        color: "black"
    },
    "&:hover": {
        opacity: 1,
    },
    [theme.breakpoints.up("sm")]: {
        width: "50%",
        height: "20rem"
    },
    [theme.breakpoints.up("md")]: {
        width: "42%",
        height: "20rem",
        margin: "1rem",

    }
  },
  caption: {

  }
});
const slideImages = [
  {
    url: DEV,
    caption: "Conception",
  },
  {
    url: CODE,
    caption: "Développement",
  },
  {
    url: SEO,
    caption: "optimisation SEO",
  },
  {
    url: DIAL,
    caption: "Accompagnement",
  },
];

const VisualMobile = ({ classes }) => {
  return (
    <div className={classes.root}>
      {slideImages.map((slideImage, index) => (
        <div
          className={classes.imgContainer}
          key={index}
          style={{ backgroundImage: `url(${slideImage.url})` }}
        >
          <span className={classes.caption}>{slideImage.caption}</span>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(VisualMobile);
