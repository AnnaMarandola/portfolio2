import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import CTAButton from "../mui/CTAButton";
import { useState } from "react";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px 20px 0 0",
    [theme.breakpoints.up("lg")]: {
      borderRadius: "20px 0 0 20px",  
      width: "60%"    
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
    marginTop: "1rem"
  },
  buttonSection: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-start"

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

const Form = ({ classes, props }) => {
  const [selected, setSelected] = useState([]);
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography variant="h5">Demandez votre devis !</Typography>
        <Typography variant="h5">[ gratuit ]</Typography>
      </div>
      <form className={classes.form}>
        <FormControl>
          <InputLabel className={classes.label}>nom</InputLabel>
          <OutlinedInput className={classes.input} />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>prénom</InputLabel>
          <OutlinedInput className={classes.input} />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>e-mail</InputLabel>
          <OutlinedInput className={classes.input} />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label}>quels sont vos besoins ?</InputLabel>
          <Select
            className={classes.selectInput}
            label="quels sont vos besoins ?"
            id="needs"
            multiple
            input={
              <OutlinedInput name="needs option" id="outlined need" notched />
            }
            placeholder="Select multiple"
            value={props?.value ? props.value : selected}
          >
            {options.map((option, id) => (
              <MenuItem key={id} value={option} className={classes.menuItem}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
        <InputLabel className={classes.label}>quelques mots sur votre projet...</InputLabel>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            className={classes.textArea}
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
