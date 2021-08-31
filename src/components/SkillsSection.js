import { Typography, withStyles } from "@material-ui/core";

const styles = (theme) => ({

})

const SkillsSection = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Typography>Compétences</Typography>
        </div>
    )
}

export default withStyles(styles)(SkillsSection);