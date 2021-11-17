import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";

const styles = (theme) => ({
  root: {
    padding: "2rem 2rem",
    margin: "2rem",
    width: "50%",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("sm")]: {
      width: "20%",
      height: "22rem",
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "15%",
    },
  },
  iconContainer: {
    backgroundColor: theme.palette.background.default,
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    border: "1px solid #b721ff",
    padding: "1.5rem",
  },
  title: {
    padding: "1.25rem 0",
  },
  listItem: {
    paddingBottom: ".5rem",
  },
});

const ServiceCard = ({ classes, service }) => {
  return (
    <Box sx={{ boxShadow: 8 }} className={classes.root}>
      <div className={classes.iconContainer}>
        <img src={service.icon} alt={service.name} />
      </div>
      <Typography variant="h4" className={classes.title}>
        {service.name}
      </Typography>
      {service.list.map((item, id) => (
        <Typography variant="body2" className={classes.listItem} key={id}>
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default withStyles(styles)(ServiceCard);
