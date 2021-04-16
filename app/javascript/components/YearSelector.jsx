import React from "react";

import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputField: {
    width: 180,
    marginTop: 10,
    marginLeft: 1,
    color: "white",
    fontSize: "13px",
    borderBottom: "1px solid #fff",
  },
}));

export default function YearSelector({ selectedYear, setSelectedYear }) {
  const classes = useStyles();

  function handleYearChange(year) {
    setSelectedYear(year.format("YYYY"));
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container>
        <DatePicker
          autoOk
          InputProps={{
            className: classes.inputField,
          }}
          onChange={handleYearChange}
          openTo="year"
          value={selectedYear}
          variant="inline"
          views={["year"]}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
