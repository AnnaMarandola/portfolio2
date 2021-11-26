import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import certifications from "../../assets/data/certifications.json";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "70%",
    },
  },
  title: {
    padding: "3rem 0rem 1rem 2rem ",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {
      padding: "3rem 2rem 3rem 0rem",
    },
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      padding: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "flex-evenly",
    },
  },
  card: {
    padding: "1.5rem 0rem",
    margin: "1rem 4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
      padding: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      margin: "1rem",
    },
    [theme.breakpoints.up("xl")]: {
      width: "42%",
    },
  },
  textContainer: {
    textAlign: "center",
    padding: "1rem 0",
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {},
  },
});

const Certifications = ({ classes }) => {
  console.log("certifications", certifications);
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Certifications
      </Typography>
      <div className={classes.cardsContainer}>
        {certifications.map((certif, id) => (
          <Box sx={{ boxShadow: 8 }} className={classes.card} key={id}>
            <img
              src={certif.logo}
              alt={certif.title}
              className={classes.logo}
            />
            <div className={classes.textContainer}>
              <Typography key={id} className={classes.infoLine} variant="h4">
                {certif.title}
              </Typography>
              {certif.infos.map((info, id) => (
                <Typography
                  key={id}
                  className={classes.infoLine}
                  variant="body1"
                >
                  {info}
                </Typography>
              ))}
            </div>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(Certifications);
