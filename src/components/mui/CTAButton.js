import { withStyles } from "@mui/styles";

export default withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    padding: '1.2rem 2.5rem',
    borderRadius: '50px',
    border: "1px solid #b721ff",
    fontSize: '1.5rem',
    minWidth: "12rem",
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
    '&:disabled': {
      backgroundColor: '#C8C8C8',
      color: 'white',
    },
    '&:active': {
        backgroundColor: theme.palette.background.paper,
    },
    
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      margin: '1rem 0',
      minWidth: "6rem",

    },

  },
}))(props => (
  <button  className={props.classes.root} {...props} />
))
