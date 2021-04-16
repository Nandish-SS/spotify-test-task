import React from "react";

import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

export default function YearSelector({ selectedYear, setSelectedYear }) {
  function handleYearChange(year) {
    setSelectedYear(year.format("YYYY"));
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <DatePicker
          autoOk
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
