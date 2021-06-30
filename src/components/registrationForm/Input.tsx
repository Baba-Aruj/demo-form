import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { FormControl, FormLabel, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      margingTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
    },
    TextField: {
      marginBottom: theme.spacing(2),
    },
  })
);

const Input = (props: any) => {
  const { name, label, value, onChange, placeholder, rows } = props;
  const classes = useStyles();
  return (
    <FormControl fullWidth>
      <FormLabel className={classes.label}>{label}</FormLabel>
      <TextField
        className={classes.TextField}
        variant="outlined"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        multiline
        rows={rows}
        required
      />
    </FormControl>
  );
};

export default Input;
