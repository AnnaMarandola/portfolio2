import { Button, withStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import TWITTER from "../assets/twitter.png";
import LINKEDIN from "../assets/linkedin.png";
import Anim from "./Anim";

const styles = (theme) => ({});

const Hero = ({ classes }) => {
  return (
    <header className={classes.root}>
        <Anim/>
        <div className={classes.buttonsContainer}>
          <Avatar
            className={classes.mediaIcon}
            src={LINKEDIN}
            alt="linkedin link"
          />
          <Avatar
            className={classes.mediaIcon}
            src={TWITTER}
            alt="twitter link"
          />
          <Button className={classes.contactButton}>Contact</Button>
        </div>
    </header>
  );
};

export default withStyles(styles)(Hero);
