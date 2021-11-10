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
import BG from "../../assets/bg-shorten-mobile.svg";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right ",
    backgroundSize: "275%",
    width: "100%",
    padding: "2rem 0.5rem",
    marginBottom: "6rem",
    boxShadow: "0 2px 7px 1px rgba(31, 31, 31, 0.2)",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
      padding: "2rem",
      backgroundSize: "160%",
    },
    [theme.breakpoints.up("md")]: {
      backgroundSize: "148%",
      padding: "5rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "27%",
      padding: "3rem",
      backgroundSize: "185%",
    },
  },
  form: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
  },
  formLabel: {
    "&.Mui-focused": {
      color: "gray",
    },
  },
  contactInputs: {
    marginBottom: "1rem",
    borderRadius: "5px",
    border: "1px solid grey",
  },
  input: {},
  textArea: {
    marginBottom: "2rem",
    borderRadius: "5px",
    border: "1px solid grey",
  },
  needs: {},
  heading: {
    fontWeight: 700,
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  expandIcon: {
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    borderRadius: "50%",
  },
  submitButton: {
    background:
      "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    padding: "1rem",
    borderRadius: "30px",
    color: "#29282e",
    width: "35%",
    minWidth: "12rem",
    boxShadow: "5px 5px 23px -10px",
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: "#424242",
      opacity: 0.8,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "4rem",
    },  
    [theme.breakpoints.up("lg")]: {
      marginLeft: "70%",
      minWidth: "7rem",
      marginTop: 0,
    },
  },
  sendIcon: {
    marginRight: "1rem",
    background:
      "-webkit-linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
    webkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
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
    textUnderlineOffset: "0.3rem",
    "&:hover": {
      color: theme.palette.primary.yellow,
    },
  },
  title: {
    color: "white",
    padding: "1rem",
    textAlign: "center",
    paddingBottom: "2rem",
    [theme.breakpoints.up("sm")]: {},
  },
});

const OrangeCheckbox = withStyles({
  root: {
    color: "gray",
    "&$checked": {
      background:
        "linear-gradient(to right top, #7284ff, #747dfd, #7876fa, #7b6ef7, #7f66f3, #815eeb, #8356e3, #854edb, #8445cd, #823cbe, #7f34b1, #7b2ba3)",
      color: "white",
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
          InputLabelProps={{
            className: classes.formLabel,
          }}
        />

        <TextField
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.contactInputs}
          type="email"
          variant="outlined"
          InputLabelProps={{
            className: classes.formLabel,
          }}
        />

        <Accordion className={classes.contactInputs}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
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
          InputLabelProps={{
            className: classes.formLabel,
          }}
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
