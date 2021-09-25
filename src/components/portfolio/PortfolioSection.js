import { withStyles } from "@material-ui/core";
import ChipSet from "./ChipSet";
import PortfolioPreview from "./PortfolioPreview";
import Title from "../Title";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "5rem 0",
    backgroundColor: "white",

    [theme.breakpoints.up("md")]: {
      // width: "95%",
      // marginLeft: "5%"

    },
  },
});
const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Title title={"Portfolio"}/>
    <ChipSet/>
      <PortfolioPreview />
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
