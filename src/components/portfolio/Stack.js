import { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import Chip from "@material-ui/core/Chip";
import REDUX from "../../assets/stack/redux.png";
import HTML from "../../assets/stack/html.png";
import CSS from "../../assets/stack/css.png";
import JS from "../../assets/stack/js.png";
import REACT from "../../assets/stack/react.png";
import STYLED from "../../assets/stack/styledComponents.png";
import API from "../../assets/stack/api.png";
import BOOTSTRAP from "../../assets/stack/bootstrap.png";
import LEAFLET from "../../assets/stack/leaflet.png";
import MUI from "../../assets/stack/mui.png";
import NODE from "../../assets/stack/node.png";
import SHOPIFY from "../../assets/stack/shopify.png";
import GOOGLECLOUD from "../../assets/stack/googleCloud.png";
import FIREBASE from "../../assets/stack/firebase.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "2rem 0",
    [theme.breakpoints.up("sm")]: {
      width: "20rem",
      padding: "10% 0 2rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "20rem",
    },
  },
  chip: {
    margin: theme.spacing(0.5),
    height: "3rem",
    width: "9rem",
  },
  logo: {
    width: "30%",
  },
});

const Stack = ({ classes, stackData }) => {
  return (
    <div component="ul" className={classes.root}>
      {stackData &&
        stackData.map((data, id) => {
          let icon;
          if (data.label === "Redux") {
            icon = (
              <img className={classes.logo} src={REDUX} alt={data.label} />
            );
          }
          if (data.label === "Javascript") {
            icon = <img className={classes.logo} src={JS} alt={data.label} />;
          }
          if (data.label === "HTML5") {
            icon = <img className={classes.logo} src={HTML} alt={data.label} />;
          }
          if (data.label === "CSS3") {
            icon = <img className={classes.logo} src={CSS} alt={data.label} />;
          }
          if (data.label === "React") {
            icon = (
              <img className={classes.logo} src={REACT} alt={data.label} />
            );
          }
          if (data.label === "Styled components") {
            icon = (
              <img className={classes.logo} src={STYLED} alt={data.label} />
            );
          }
          if (data.label === "APIrest") {
            icon = <img className={classes.logo} src={API} alt={data.label} />;
          }
          if (data.label === "Bootstrap") {
            icon = (
              <img className={classes.logo} src={BOOTSTRAP} alt={data.label} />
            );
          }
          if (data.label === "Leaflet") {
            icon = (
              <img className={classes.logo} src={LEAFLET} alt={data.label} />
            );
          }
          if (data.label === "Material-ui") {
            icon = <img className={classes.logo} src={MUI} alt={data.label} />;
          }
          if (data.label === "Node.js") {
            icon = <img className={classes.logo} src={NODE} alt={data.label} />;
          }
          if (data.label === "Shopify") {
            icon = (
              <img className={classes.logo} src={SHOPIFY} alt={data.label} />
            );
          }
          if (data.label === "Google cloud") {
            icon = (
              <img
                className={classes.logo}
                src={GOOGLECLOUD}
                alt={data.label}
              />
            );
          }
          if (data.label === "Firebase") {
            icon = (
              <img className={classes.logo} src={FIREBASE} alt={data.label} />
            );
          }

          return (
            <Fragment>
              <li key={id}>
                <Chip icon={icon} label={data.label} className={classes.chip} />
              </li>
            </Fragment>
          );
        })}
    </div>
  );
};

export default withStyles(styles)(Stack);
