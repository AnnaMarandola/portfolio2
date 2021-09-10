import { withStyles } from "@material-ui/core";
import PortfolioPreview from "./PortfolioPreview";
import Title from "./Title";

const styles = (theme) => ({
  root: {
    width: "100%",
    paddingBottom: "5rem",
    backgroundColor: "#29282e",

    [theme.breakpoints.up("md")]: {
      // width: "95%",
      // marginLeft: "5%"

    },
  },
});
const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
    {/* <Title title={"Portfolio"}/> */}
      <PortfolioPreview />
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
