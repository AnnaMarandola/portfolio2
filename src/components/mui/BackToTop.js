import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";

const style = {
  position: `fixed`,
  bottom: `50px`,
  right: `50px`,
  zIndex: `99`,
  "@media (maxWidth:600px)": {
    right: `20px`,
  },
};

const BackToTop = ({ children }) => {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger} passive="true">
      <div onClick={handleClick} role="presentation" style={style}>
        {children}
      </div>
    </Zoom>
  );
};

export default BackToTop;
