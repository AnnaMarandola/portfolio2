import { Chip, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    textAlign: "left",
    width: "50%",
    marginLeft: "25%",
    marginBottom: "5rem",
  },
  chip: {
    margin: "0.5rem",
  },
});

const ChipSet = ({ classes }) => {
  const handleClick = () => {
    console.info("you clicked the chip.");
  };

  const tags = [
    "site vitrine",
    "e-commerce",
    "click & collect",
    "application web",
    "Restauration",
    "conception",
    "géolocalisation",
    "API",
    "dévelopement back-end",
    "dévelopement front-end",
    "audio/video",
  ];

  return (
    <div className={classes.root}>
      {tags.map((tag, id) => (
        <Chip
          key={id}
          variant="outlined"
        //   size="small"
          label={tag}
          onClick={handleClick}
          className={classes.chip}
        />
      ))}
    </div>
  );
};

export default withStyles(styles)(ChipSet);
