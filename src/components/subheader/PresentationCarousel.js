import PietileCarousel from "pietile-carousel";
import { withStyles } from "@material-ui/core";
import DEV from "../assets/subheader/dev.png";
import SEO from "../assets/subheader/seo.png";
import DIAL from "../assets/subheader/dial.png";

const styles = (theme) => ({
  root: {
    width: "30%",
    // height: "100%",
  },
  imgContainer: {
    width: "100%",
    height: "auto",
    // flexDirection: "column"
  },
  image: {
      width: "100%"
  }
});
const slideImages = [
  {
    url: DEV,
    caption: "Conception et développement",
  },
  {
    url: SEO,
    caption: "optimisation SEO",
  },
  {
    url: DIAL,
    caption: "Ecoute, échanges et disponibilité",
  },
];

const PresentationCarousel = ({ classes }) => {
  return (
    <PietileCarousel className={classes.root}>
      {slideImages.map((slideImage, index) => (
        <div className={classes.imgContainer} key={index}>
          <img
            src={slideImage.url}
            className={classes.image}
            alt={slideImage.caption}
          />
          {/* <span>{slideImage.caption}</span> */}
        </div>
      ))}
    </PietileCarousel>
  );
};

export default withStyles(styles)(PresentationCarousel);
