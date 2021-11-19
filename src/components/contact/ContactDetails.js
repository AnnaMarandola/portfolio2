import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PHONE from "../../assets/images/contact/phone.svg";
import MAIL from "../../assets/images/contact/mail.svg";
import ADRESS from "../../assets/images/contact/adress.svg";
import OFFICIAL from "../../assets/images/contact/official.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "70%"
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      width: "80%",
      justifyContent: "space-between"
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
      padding: "5rem 0",
    },
    [theme.breakpoints.up("xl")]: {},
  },
  infoCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    margin: "1rem 0",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    [theme.breakpoints.up("md")]: {
      width: "45%"
    },
    [theme.breakpoints.up("lg")]: {
      width: "20%",
      padding: "1.5rem"

    },
    [theme.breakpoints.up("xl")]: {},

  },
  text: {
    textAlign: "right",
  },
});

const contactInfos = [
  {
    value: "annamarandola@gmail.com",
    id: "email",
    iconUrl: MAIL,
  },
  {
    value: "(+33)6.47.66.23.14",
    id: "tel",
    iconUrl: PHONE,
  },
  {
    value: "85 boulevard Koenigs 31300 Toulouse",
    id: "adress",
    iconUrl: ADRESS,
  },
  {
    value: "SIREN: 9000349515",
    id: "siren",
    iconUrl: OFFICIAL,
  },
];

const ContactDetails = ({ classes }) => {
  return (
    <div className={classes.root}>
      {contactInfos.map((info, id) => (
        <Box key={id} className={classes.infoCard} sx={{ boxShadow: 8 }}>
          <img src={info.iconUrl} alt={info.id} />
          <Typography variant="body1" className={classes.text}>
            {info.value}
          </Typography>
        </Box>
      ))}
    </div>
  );
};

export default withStyles(styles)(ContactDetails);
