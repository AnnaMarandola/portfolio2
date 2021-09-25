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
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//   import { db } from "../../../firebase";

const styles = (theme) => ({
  root: {
    width: "90%",
    padding: "0.5rem",
    marginBottom: "6rem",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "5px 5px 23px -5px",

    [theme.breakpoints.up("md")]: {
      width: "35%",
      padding: "3rem 3rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  contactInputs: {
    marginBottom: "1rem",
    borderRadius: "10px",
  },
  textArea: {
    marginBottom: "2rem",
    borderRadius: "10px",
  },
  needs: {
    backgroundColor: "transparent"
  },
  list: {
  },
  heading: {
    fontWeight: 700,
    color: "grey",
  },
  submitButton: {
    padding: "1rem 2rem",
    borderRadius: "30px",
    color: "black",
    width: "30%",
    minWidth: "7rem",
    marginLeft: "70%",
    backgroundColor: "#f4f4f4",
    border: "1px solid black",
    background: "linear-gradient(to right top, #2d7dfe, #457ffe, #5780ff, #6582ff, #7284ff)",
    "&:hover": {
      border: "1px solid black",
      background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
  
        },
  },
  cguSection: {
    display: "flex",
    alignItems: "center",
  },
  cgutext: {
    fontSize: "1rem",
    color: "grey",
  },
  cgulink: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    textUnderlineOffset: "0.3rem",
    "&:hover": {
      color: theme.palette.primary.yellow,
    },
  },
  title: {
    textAlign: "center",
    paddingBottom: "2rem",
    color: "black",
  },
});

const OrangeCheckbox = withStyles({
  root: {
    color: "#040506",
    "&$checked": {
      color: "#040506",
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
      <Typography className={classes.title}>
        {" "}
        Demandez votre devis gratuit!
      </Typography>
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
                  <ListItem key={value} button label="besoins">
                    <ListItemText id={labelId} primary={` ${value}`} />
                    <ListItemSecondaryAction>
                      <OrangeCheckbox
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                        label="besoins"
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
          aria-label= "Accepter"
        >
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(ContactForm);
