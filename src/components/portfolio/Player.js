import { withStyles } from "@material-ui/core/styles";
import { Button, Tooltip } from "@material-ui/core";
import BACK from "../../assets/back-button.svg";
import NEXT from "../../assets/next-button.svg";
import CROSS from "../../assets/close.svg";

const styles = (theme) => ({
  player: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "2rem",
    [theme.breakpoints.up("lg")]: {
      width: "80%"
    }
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
  playerButton: {
    padding: "0.5rem",
  },
  progressBarContainer: {
    width: "80%",
    height: "0.25rem",
    backgroundColor: "#e5e5e5",
    marginTop: "1rem",
  },
  progress: {
    minWidth: "5%",
    backgroundColor: "black",
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",

    height: "0.25rem",
  },
  closeButton: {
    padding: "0.5rem",
    boxShadow: "5px 5px 23px -10px black",
  },
});

const Player = ({ classes, goBack, goNext, progress, handleClose }) => {
  console.log("progress", progress);
  return (
    <div className={classes.player}>
      <div className={classes.buttonContainer}>
        <Tooltip
          title="Projet précédent"
          ariaLabel="Project précedent"
          enterTouchDelay={50}
        >
          <Button onClick={goBack} className={classes.playerButton}>
            <img src={BACK} alt="go-back-button" />
          </Button>
        </Tooltip>
      </div>
      <div className={classes.progressBarContainer}>
        <div className={classes.progress} style={{ width: `${progress}%` }} />
      </div>
      <div className={classes.buttonContainer}>
        <Tooltip
          title="Projet suivant"
          ariaLabel="Project suivant"
          enterTouchDelay={50}
        >
          <Button onClick={goNext} className={classes.playerButton}>
            <img src={NEXT} alt="go-next-button" />
          </Button>
        </Tooltip>
      </div>
      <Button onClick={handleClose} className={classes.closeButton}>
        <img src={CROSS} alt="close cross" />
      </Button>
    </div>
  );
};

export default withStyles(styles)(Player);
