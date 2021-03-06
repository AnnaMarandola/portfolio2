import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";

const styles = (theme) => ({
  card: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center 8%",
    backgroundSize: "cover",
    margin: "1rem",
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
    borderRadius: "40px",
    width: "18rem",
    height: "20rem",
    filter: "grayscale(60%) brightness(80%)",
    "&:hover": {
      backgroundColor: theme.palette.background.light,
      "& $overlay": {
        transform: "translateY(0)",
      },
    },
    [theme.breakpoints.up("lg")]: {
      height: "25rem",
    },

  },
  overlay: {
    backgroundColor: theme.palette.background.default,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "9rem",
    transform: "translateY(100%)",
    transition: ".7s ease-in-out",
    "&:hover $card": {
      transform: "translateY(0)",
    },
    [theme.breakpoints.up("lg")]: {
      height: "12.5rem",
    },
  },
  header: {
    padding: "2rem",
    borderRadius: "40px 0 0 0",
    backgroundColor: theme.palette.background.default,
    transform: "translateY(-100%)",
    transition: "0.7s ease-in-out",
  },
  image: {
    width: "15%",
    padding: "1rem",
    height: "auto",
    backgroundColor: theme.palette.background.default,
    borderRadius: "50%",
    margin: "1rem 1rem 0 0",
    border: "2px solid grey",
  },
  svgArc: {
    width: "80px",
    height: "80px",
    position: "absolute",
    bottom: "100%",
    right: 0,
    zIndex: 1,
  },
  svgPath: {
    fill: theme.palette.background.default,
    d: "path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z')",
  },
  description: {
    padding: "0 2rem 2rem",
    marginTop: "-5.5rem",
    overflow: "hidden",
  },
});

const ServiceCard = ({ classes, service }) => {
  return (
    <Box sx={{ boxShadow: 8 }} className={classes.card} style={{ backgroundImage: `url(${service.bg})`}}>
      {/* <img src={service.icon} alt={service.name} className={classes.image} /> */}
      <div className={classes.overlay}>
        <div className={classes.header}>
          <svg className={classes.svgArc} xmlns="http://www.w3.org/2000/svg">
            <path className={classes.svgPath} />
          </svg>
          <Typography variant="h4" className={classes.title}>
            {service.name}
          </Typography>
        </div>

        <div className={classes.description}>
          {service.list.map((item, id) => (
            <Typography variant="body1" className={classes.listItem} key={id}>
              {item}
            </Typography>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default withStyles(styles)(ServiceCard);
