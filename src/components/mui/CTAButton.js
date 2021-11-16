import { withStyles } from "@mui/styles";

export default withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    padding: '1.2rem 2.5rem',
    borderRadius: '50px',
    border: "none",
    fontSize: '1.5rem',
    margin: "3.5rem 3.5rem 3.5rem 0",
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
      margin: '2rem',
    },

  },
}))(props => (
  <button  className={props.classes.root} {...props} />
))
