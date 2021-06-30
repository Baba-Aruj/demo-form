import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {
  createStyles,
  FormControl,
  FormLabel,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      margingTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
    },
    DatePicker: {
      marginBottom: theme.spacing(2),
    },
  })
);

const DatePicker = (props: any) => {
  const { name, label, value, onChange, className } = props;

  const convertToDefaultPra = (name: any, value: any) => ({
    target: {
      name,
      value,
    },
  });
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormControl fullWidth>
        <FormLabel className={classes.label}>{label}</FormLabel>
        <KeyboardDatePicker
          className={classes.DatePicker}
          disableToolbar
          variant="inline"
          inputVariant="outlined"
          format="MM/dd/yyyy"
          name={name}
          value={value}
          onChange={(dtae) => onChange(convertToDefaultPra(name, dtae))}
          fullWidth
        />
      </FormControl>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
