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
import { db } from "../../firebase";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const styles = (theme) => ({
  root: {
    width: "100%",
    padding: "2rem 0.5rem",
    marginBottom: "6rem",
    boxShadow: "5px 5px 23px -5px",
    // background:
    //   "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
      padding: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "3rem",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  contactInputs: {
    marginBottom: "1rem",
    borderRadius: "5px",
    backgroundColor: "#f4f4f4",
  },
  textArea: {
    marginBottom: "2rem",
    borderRadius: "5px",
    backgroundColor: "#f4f4f4",
  },
  needs: {
    backgroundColor: "transparent",
  },
  list: {},
  heading: {
    fontWeight: 700,
    color: "grey",
  },
  submitButton: {
    padding: "1rem 1rem",
    borderRadius: "30px",
    color: "white",
    width: "30%",
    minWidth: "9rem",
    marginLeft: "50%",
    boxShadow: "5px 5px 23px -10px",
    "&:hover": {
      backgroundColor: "#29282e",
      color: "white",
      opacity: 0.8,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "70%",
      minWidth: "7rem",
    },
  },
  sendIcon: {
    marginRight: "1rem",
    background:
      "-webkit-linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
      webkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
  cguSection: {
    display: "flex",
    alignItems: "center",
  },
  cgutext: {
    fontSize: "1rem",
    color: "white",
  },
  cgulink: {
    fontWeight: 600,
    color: "white",
    textUnderlineOffset: "0.3rem",
    "&:hover": {
      color: theme.palette.primary.yellow,
    },
  },
  title: {
    textAlign: "center",
    paddingBottom: "2rem",
    color: "white"
  },
});

const OrangeCheckbox = withStyles({
  root: {
    color: "white",
    "&$checked": {
      color: "#29282e",
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
    if (checkedCGU) {
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
          needs: checked,
        })
        .then(() => {
          setLoader(false);
          alert(
            "Votre message a bien été envoyé 👍. Nous vous répondrons dans les plus brefs délais"
          );
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });

      setName("");
      setEmail("");
      setMessage("");
      setChecked([]);
    } else {
      alert("merci de lire et d'accepter les CGU");
    }
  };

  const handleCGU = (event) => {
    if (!checkedCGU) setCheckedCGU(true);
    else setCheckedCGU(false);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        {" "}
        Demandez votre devis !
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
          aria-label="Accepter"
        >
          <SendOutlinedIcon className={classes.sendIcon} />
          Envoyer
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(ContactForm);
