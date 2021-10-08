import { withStyles } from "@material-ui/styles";
import { Button, Tooltip } from "@material-ui/core";
import { projects } from "./ProjectsData";
import BACK from "../../assets/back-button.svg";
import NEXT from "../../assets/next-button.svg";

const styles = (theme) => ({
  player: {
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
  },
  playerButton: {
    marginBottom: "1rem",
  },
});

const Player = ({ classes, goBack, goNext }) => {
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
    </div>
  );
};

export default withStyles(styles)(Player);
