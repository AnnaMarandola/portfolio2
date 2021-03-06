import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  TextareaAutosize,
  Snackbar,
  Alert,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import CTAButton from "../mui/CTAButton";
import { useState } from "react";
import emailjs from "emailjs-com";
import emailKeys from "../../emailConfig";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "2rem",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px 20px 0 0",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      borderRadius: "20px 0 0 20px",
      width: "60%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
  },
  titleContainer: {
    textAlign: "center",
    padding: "2rem",
    [theme.breakpoints.up("md")]: {
      padding: "3rem",
    },
  },
  input: {
    backgroundColor: theme.palette.background.dark,
    margin: "0.5rem 0rem",
  },
  selectInput: {
    margin: "0.5rem 0",
    backgroundColor: theme.palette.background.light,
  },
  menuItem: {
    color: theme.palette.background.default,
  },
  textArea: {
    margin: "0.5rem 0",
    backgroundColor: theme.palette.background.dark,
    borderRadius: "3px",
  },
  label: {
    marginTop: "1rem",
  },
  buttonSection: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: "1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "2rem 0 4rem",
    },
  },
  submitButton: {},
});

const options = [
  "site vitrine",
  "e-commerce",
  "application web/mobile",
  "optimisation SEO",
  "refonte",
  "intégration",
  "développement spécifique",
  "conseils et accompagnement",
];

const Form = ({ classes }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [needs, setNeeds] = useState([]);
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        emailKeys.service,
        emailKeys.template,
        e.target,
        emailKeys.integration
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setFirstName("");
    setLastName("");
    setEmail("");
    setNeeds([]);
    setMessage("");
    setEmailSent(true);
  };

  const handleCloseToast = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setEmailSent(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={emailSent}
        autoHideDuration={7000}
        onClose={handleCloseToast}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{ width: "100%" }}
        >
          Votre message à bien été envoyé ! je vous répondrai dans les plus
          brefs délais
        </Alert>
      </Snackbar>
      <div className={classes.titleContainer}>
        <Typography variant="h5">Demandez votre devis !</Typography>
        <Typography variant="h5">[ gratuit ]</Typography>
      </div>
      <form className={classes.form} onSubmit={sendEmail}>
        <FormControl required>
          <InputLabel className={classes.label}>nom</InputLabel>
          <OutlinedInput
            className={classes.input}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            value={lastName}
          />
        </FormControl>
        <FormControl required>
          <InputLabel className={classes.label}>prénom</InputLabel>
          <OutlinedInput
            className={classes.input}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            value={firstName}
          />
        </FormControl>
        <FormControl required>
          <InputLabel className={classes.label}>e-mail</InputLabel>
          <OutlinedInput
            className={classes.input}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
          />
        </FormControl>

        <FormControl>
          <InputLabel className={classes.label}>
            quels sont vos besoins ?
          </InputLabel>
          <Select
            className={classes.selectInput}
            label={needs.length ? `${needs}` : "quels sont vos besoins ?"}
            name="needs"
            multiple
            input={<OutlinedInput name="needs option" id="need" />}
            placeholder="Select multiple"
            value={needs}
            onChange={(e) => setNeeds(e.target.value)}
          >
            {options.map((option, id) => (
              <MenuItem key={id} value={option} className={classes.menuItem}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel className={classes.label}>
            quelques mots sur votre projet...
          </InputLabel>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            className={classes.textArea}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            value={message}
          />
        </FormControl>
        <div className={classes.buttonSection}>
          <CTAButton type="submit">envoyer</CTAButton>
        </div>
      </form>
    </div>
  );
};

export default withStyles(styles)(Form);
