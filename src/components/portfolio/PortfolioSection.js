import { withStyles } from "@material-ui/core";
import PortfolioPreview from "./PortfolioPreview";
import Title from "../Title";

const styles = (theme) => ({
  root: {
    padding: "0 5% 5% 5%",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {},
  },
});
const PortfolioSection = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Title title={"Portfolio"} />
      <PortfolioPreview />
    </div>
  );
};

export default withStyles(styles)(PortfolioSection);
