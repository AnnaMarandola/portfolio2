import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";

const styles = (theme) => ({
  card: {
    margin: "1rem",
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    overflow: "hidden",
    borderRadius: "40px",
    width: "18rem",
    height: "18rem",
    overlay: {
      "&:hover": {
        transform: "translateY(0)",
      },
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
    "&:hover": {
      transform: "translateY(0)",
    },
  },
  header: {
    // position: "relative",
    padding: "2rem",
    borderRadius: "40px 0 0 0",
    backgroundColor: theme.palette.background.default,
    transform: "translateY(-100%)",
    transition: "0.7s ease-in-out",
  },
  image: {
    width: "35%",
    padding: "4rem",
    height: "auto",
  },
  svgArc: {
    width: "80px",
    height: "80px",
    position: "absolute",
    bottom: "100%",
    right: 0,
    zIndex: 1,
    borderColor: theme.palette.background.default,

  },
  svgPath: {
    fill: theme.palette.background.default,
    d: "path('M 40 80 c 22 0 40 -22 40 -40 v 40 Z')",
  },
  description: {
    padding: "0 2rem 2rem",
    marginTop: "-5rem",
    overflow: "hidden",
  },
});

const ServiceCard2 = ({ classes, service }) => {
  return (
    <Box sx={{ boxShadow: 8 }} className={classes.card}>
      <img src={service.icon} alt={service.name} className={classes.image} />

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
            <Typography variant="body2" className={classes.listItem} key={id}>
              {item}
            </Typography>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default withStyles(styles)(ServiceCard2);
