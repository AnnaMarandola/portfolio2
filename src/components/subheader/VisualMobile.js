import { withStyles } from "@material-ui/core";
import DEV from "../../assets/subheader/dev.png";
import SEO from "../../assets/subheader/seo.png";
import DIAL from "../../assets/subheader/dial.png";
import CODE from "../../assets/subheader/code.png";
const styles = (theme) => ({
  root: {
    width: "100%",
    paddingBottom: "5rem",
  },
  imgContainer: {
    width: "100%",
    height: "18rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "white",
    "&:nth-child(1), &:nth-child(4)": {
        color: "black"
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
