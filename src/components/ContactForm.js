import { useState } from "react";
import {
  TextField,
  Typography,
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Card,
  Button,
} from "@material-ui/core";
//   import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//   import { db } from "../../../firebase";
//   import CTAButton from "../../material-ui/CTAButton";

const styles = (theme) => ({
  root: {
    width: "90%",
    padding: "0.5rem",
    marginBottom: "6rem",
    [theme.breakpoints.up("md")]: {
      width: "25%",
      padding: "3rem",

    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  contactInputs: {
    marginBottom: "1rem",
    backgroundColor: "transparent",
  },
  textArea: {
    marginBottom: "2rem",
  },
  list: {},
  heading: {
    fontWeight: 700,
    color: "grey",
  },
  submitButton: {
    width: "30%",
    marginLeft: "70%",
  },
  cguSection: {
    display: "flex",
    alignItems: "center",
  },
  cgutext: {
    fontSize: "1rem",
  },
  cgulink: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    textUnderlineOffset: "0.3rem",
    "&:hover": {
      color: theme.palette.primary.yellow,
    },
  },
});

const OrangeCheckbox = withStyles({
  root: {
    color: "black",
    "&$checked": {
      color: "black",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const ContactForm = ({ classes }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState([]);
  const [checkedCGU, setCheckedCGU] = useState(false);

  const [loader, setLoader] = useState(false);
  console.log(loader);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    //   if (checkedCGU) {
    //     db.collection("contacts")
    //       .add({
    //         name: name,
    //         email: email,
    //         message: message,
    //         needs: checked,
    //       })
    //       .then(() => {
    //         setLoader(false);
    //         alert(
    //           "Votre message a bien été envoyé 👍. Nous vous répondrons dans les plus brefs délais"
    //         );
    //       })
    //       .catch((error) => {
    //         alert(error.message);
    //         setLoader(false);
    //       });

    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //     setChecked([]);
    //   } else {
    //     alert("merci de lire et d'accepter les CGU");
    //   }
  };

  const handleCGU = (event) => {
    if (!checkedCGU) setCheckedCGU(true);
    else setCheckedCGU(false);
  };

  return (
    <div className={classes.root}>
    <Typography> Demandez votre devis gratuit!</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.contactInputs}
          type="text"
          variant="outlined"
        />

        <TextField
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.contactInputs}
          type="email"
          variant="outlined"
        />

        <Accordion className={classes.contactInputs}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.needs}
          >
            <Typography className={classes.heading}>
              Quels sont vos besoins ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.list}>
            <List className={classes.list}>
              {[
                "création d'un site vitrine",
                "création de site de e-commerce",
                "solution de click & collect",
                "création de logo & identité visuelle",
                "référencement",
                "conseils et accompagnement",
                "supports de communication",
              ].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem key={value} button>
                    <ListItemText id={labelId} primary={` ${value}`} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </AccordionDetails>
        </Accordion>

        <TextField
          id="message"
          variant="outlined"
          label="Quelques mots sur votre projet ..."
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={classes.textArea}
        />

        <div className={classes.cguSection}>
          <FormControlLabel
            control={
              <OrangeCheckbox
                checked={checkedCGU}
                onChange={handleCGU}
                name="checkedCGU"
                className={classes.cgu}
                label="CGU"
              />
            }
          />
          <Typography className={classes.cgutext}>
            j'accepte les cgu
            {/* j'accepte <NavLink to="" className={classes.cgulink}>les CGU</NavLink> */}
          </Typography>
        </div>
        <Button
          type="submit"
          onSubmit={handleSubmit}
        //   style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          className={classes.submitButton}
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(ContactForm);
