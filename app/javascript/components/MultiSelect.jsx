import React, { Fragment } from "react";

import {
  Checkbox,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";

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

export default function MultiSelect({
  filterField,
  items,
  selectedValues,
  setSelectedValues,
}) {
  function handleChange(event) {
    setSelectedValues(event.target.value);
  }

  return (
    <Fragment>
      <InputLabel>{filterField}</InputLabel>
      {items && (
        <Select
          displayEmpty
          input={<Input />}
          labelId={filterField}
          MenuProps={MenuProps}
          multiple
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ") || "All"}
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
