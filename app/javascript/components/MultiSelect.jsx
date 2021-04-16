import React, { Fragment } from "react";

import {
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles(() => ({
  inputLabel: {
    color: "white",
    fontSize: "12px",
    fontFamily: "Poppins",
  },
  inputField: {
    width: 180,
    marginTop: 10,
    marginLeft: 1,
    color: "white",
    fontSize: "13px",
    borderBottom: "1px solid #fff",
  },
  icon: {
    color: "white",
  }
}));

export default function MultiSelect({
  filterField,
  items,
  selectedValues,
  setSelectedValues,
}) {
  const classes = useStyles();

  function handleChange(event) {
    setSelectedValues(event.target.value);
  }

  return (
    <Fragment>
      <InputLabel className={classes.inputLabel}>{filterField}</InputLabel>
      {items && (
        <Select
          classes={{ icon: classes.icon }}
          displayEmpty
          input={<Input className={classes.inputField} />}
          labelId={filterField}
          MenuProps={MenuProps}
          onChange={handleChange}
          renderValue={(selected) => selected || "All"}
          value={selectedValues}
        >
          {items.map((item, index) => (
            <MenuItem key={index} value={item}>
              <Checkbox checked={selectedValues.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      )}
    </Fragment>
  );
}
