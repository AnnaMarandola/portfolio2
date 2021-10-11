import { withStyles } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles = (theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "70%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%"
    },
  },
});

const ProjectCarousel = ({ images, classes }) => {
  return (
    <Carousel emulateTouch className={classes.root}>
      {images &&
        images.map((image, id) => (
          <div key={id}>
            <img alt={image.subtitle} src={image.img} />
            <p className="legend">{image.subtitle}</p>
          </div>
        ))}
    </Carousel>
  );
};
export default withStyles(styles)(ProjectCarousel);
