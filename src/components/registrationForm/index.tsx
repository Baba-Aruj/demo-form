import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { UseForm, Form } from "./useForm";
import DatePicker from "./datePicker";
import Input from "./Input";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(4),
    },
    btn: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      backgroundColor: "#555555",
      borderRadius: 0,
      width: "12rem",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#555555",
      },
    },
  })
);

const initialState = {
  id: 0,
  arrivalDate: new Date(),
  sourceSuplier: "",
  phone: "",
  purchasedBy: "",
  confidentialCluePageNo: "",
  streetAddress: "",
  streetAddressLineTwo: "",
  city: "",
  region: "",
  postalOrZipCode: "",
  country: "somalia",
  clasificationNo: "",
  authorMakrs: "",
  usabilitiy: "",
  entryDate: new Date(),
  publishPlace: "",
  NoOfCopies: "",
  accessionNo: "",
  remarks: "",
};

const flields = [
  {
    name: "sourceSuplier",
    label: "Source Suplier",
  },
  { name: "phone", label: "Phone", placeholder: "#### ### ####" },
  { name: "purchasedBy", label: "Purchased By" },
  {
    name: "confidentialCluePageNo",
    label: "ConfidentialClue Page No",
  },
];

const clomn2Fileds = [
  { name: "city", label: "City" },
  { name: "region", label: "Region" },
  {
    name: "postalOrZipCode",
    label: "Postal / ZipCode",
  },
  { name: "country", label: "Country" },
  {
    name: "clasificationNo",
    label: "Clasification No",
  },
  { name: "authorMakrs", label: "Author Makrs" },
  { name: "usabilitiy", label: "usabilitiy" },
  { name: "entryDate", label: "Entry Date", date: true },
];

function RegistrationForm() {
  const { values, setvalues, handleChange } = UseForm(initialState);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Form>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <DatePicker
              label="Arrival Date"
              name="arrivalDate"
              value={values.arrivalDate}
              onChange={handleChange}
            />
          </Grid>

          {flields.map((flield) => (
            <Grid item xs={12} sm={6}>
              <Input
                label={flield.label}
                name={flield.name}
                placeholder={flield.placeholder}
                value={values.sourceSuplier}
                onChange={handleChange}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Input
              label="Address"
              name="streetAddress"
              placeholder="Street Address"
              value={values.streetAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="streetAddressLineTwo"
              placeholder="Street Address Line 2"
              value={values.streetAddressLineTwo}
              onChange={handleChange}
            />
          </Grid>

          {clomn2Fileds.map((flield) => (
            <Grid item xs={12} sm={6}>
              {flield.date ? (
                <DatePicker
                  label={flield.label}
                  name={flield.name}
                  value={values.arrivalDate}
                  onChange={handleChange}
                />
              ) : (
                <Input
                  label={flield.label}
                  name={flield.name}
                  value={values.sourceSuplier}
                  onChange={handleChange}
                />
              )}
            </Grid>
          ))}

          <Grid item xs={12}>
            <Input
              label="Accession No"
              name="accessionNo"
              value={values.accessionNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Remarks"
              name="remarks"
              value={values.remarks}
              onChange={handleChange}
              rows={2}
            />
          </Grid>

          <Button variant="contained" size="large" className={classes.btn}>
            {" "}
            Send
          </Button>
        </Grid>
      </Form>
    </div>
  );
}

export default RegistrationForm;
