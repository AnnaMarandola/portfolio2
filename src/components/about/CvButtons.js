import { withStyles } from "@material-ui/styles";
import { ButtonBase, Typography} from "@material-ui/core";
import ILLUS1 from "../../assets/18.svg";
import ILLUS2 from "../../assets/19.svg";
import ILLUS3 from "../../assets/20.svg";
const styles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      },
      image: {
        position: 'relative',
        height: 200,
        // [theme.breakpoints.down('xs')]: {
        //   width: '100% !important', // Overrides inline-style
        //   height: 100,
        // },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
          },
        },
      },
      focusVisible: {},
      imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "white",
      },
      imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "black",
        opacity: 0.4,
        // transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: "white",
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        // transition: theme.transitions.create('opacity'),
      },
});

const buttons = [
    {
        title: "expertise",
        image: ILLUS1,
    },
    {
        title: "certifications",
        image: ILLUS2,
    },
    {
        title: "skills",
        image: ILLUS3,
    },
]



const CvButtons = ({ classes }) => {
  return (
    <div className={classes.root}>
    <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "30%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${ILLUS1})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              SKILLS
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    </div>
  );
};

export default withStyles(styles)(CvButtons);
