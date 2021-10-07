import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectCarousel = ({ images }) => {
  console.log("images", images)
  return (
    <Carousel autoPlay emulateTouch={true} width="100%">
      {images &&
        images.map((image, id) => (
          <div key={id}>
            <img
              alt={image.subtitle}
              src={image.img}
            />
            <p className="legend">{image.subtitle}</p>
          </div>
        ))}
    </Carousel>
  );
};
export default ProjectCarousel;
