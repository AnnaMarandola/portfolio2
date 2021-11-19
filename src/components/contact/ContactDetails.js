import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    border: "1px solid green",
  },
});

const ContactDetails = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Typography variant="h4">Coordonnées ...</Typography>
    </div>
  );
};

export default withStyles(styles)(ContactDetails);