import { RoomRounded } from "@mui/icons-material";
import { withStyles } from "@mui/styles";
import GoogleMapReact from "google-map-react";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "20rem",
    borderRadius: "0 0 20px 20px", 
    overflow: "hidden",
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: "51rem", 
      borderRadius: "0 20px 20px 0",
    }
  },
  map: {
    overflow: "hidden",
    [theme.breakpoints.up("lg")]: {
      borderRadius: "30px"
    }
  }
});

const Map = ({ classes }) => {

  const adress = {
    center: {
      lat: 43.5970777,
      lng: 1.4195984
    },
    zoom: 15
  };

  return (
    <div className={classes.root}>
    <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY}}
    defaultCenter={adress.center}
    defaultZoom={adress.zoom}
    yesIWantToUseGoogleMapApiInternals
    className={classes.map}
    >
    <RoomRounded 
      lat={adress.center.lat}
      lng={adress.center.lng}
      text="am.dev"
    />

    </GoogleMapReact>
    </div>
  );
};

export default withStyles(styles)(Map);
