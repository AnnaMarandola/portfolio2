import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import DEV from "../../assets/images/services/dashicons_media-code.svg";

const styles = (theme) => ({
  root: {
    padding: "2rem 2rem",
    margin: "2rem",
    width: "50%",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up("sm")]: {
      width: "20%",
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "15%",
    },
  },
  iconContainer: {
    backgroundColor: theme.palette.background.default,
    width: "6.5rem",
    height: "6.5rem",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    border: "1px solid #b721ff",
  },
  title: {
      padding: "1.25rem 0"
  },
  listItem: {
      paddingBottom: ".5rem"
  }
});

const ServiceCard = ({ classes }) => {
  return (
    <Box sx={{ boxShadow: 3 }} className={classes.root}>
      <div className={classes.iconContainer}>
        <img src={DEV} alt="brackets" />
      </div>
      <Typography variant="h4"className={classes.title}>Dev</Typography>
      <Typography variant="body2" className={classes.listItem}>jfdslfjd gjlgj</Typography>
      <Typography variant="body2" className={classes.listItem}>jfdslfjd hjgh ghjghj</Typography>
      <Typography variant="body2" className={classes.listItem}>jfd hujkhk hh</Typography>
      <Typography variant="body2" className={classes.listItem}>jfdslfjdjklj</Typography>
      <Typography variant="body2" className={classes.listItem}>jfdslfjd hu huhhhu</Typography>
    </Box>
  );
};

export default withStyles(styles)(ServiceCard);
