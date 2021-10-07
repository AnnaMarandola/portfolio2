import { withStyles } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles = (theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {

    },
    [theme.breakpoints.up("lg")]: {
      width: "70%"
    },
  },
});

const ProjectCarousel = ({ images, classes }) => {
  console.log("images", images);
  return (
    <Carousel autoPlay emulateTouch className={classes.root}>
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
