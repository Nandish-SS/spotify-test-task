import React, { Fragment } from "react";
import { Button, Grid, InputLabel, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MultiSelect from "./MultiSelect";
import YearSelector from "./YearSelector";

const useStyles = makeStyles(() => ({
  gridContainer: {
    margin: "20px 10px",
  },
  inputLabel: {
    color: "white",
    fontSize: "13px",
  },
  grid: {
    margin: "auto",
    textAlign: "center",
  },
  buttonRoot: {
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      background: "white",
    },
  },
  buttonLabel: {
    fontWeight: 600,
  },
  textField: {
    marginTop: 7,
    borderBottom: "1px solid #fff",
  },
  textFieldLabel: {
    color: "white",
  },
}));

export default function FilterBar({
  albums,
  artists,
  popularityRange,
  selectedAlbums,
  selectedArtists,
  selectedTracks,
  selectedYear,
  setPopularityRange,
  setSelectedAlbums,
  setSelectedArtists,
  setSelectedTracks,
  setSelectedYear,
  tracks,
}) {
  const classes = useStyles();

  function handleClear() {
    setSelectedYear(null);
    setSelectedAlbums([]);
    setSelectedArtists([]);
    setSelectedTracks([]);
    setPopularityRange('');
  }

  function handleChange(event) {
    if (Number(event.target.value) || !event.target.value) {
      setPopularityRange(event.target.value);
    }
  }

  return (
    <Fragment>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={2}>
          <MultiSelect
            filterField="Albums"
            items={albums}
            selectedValues={selectedAlbums}
            setSelectedValues={setSelectedAlbums}
          />
        </Grid>
        <Grid item xs={2}>
          <MultiSelect
            filterField="Tracks"
            items={tracks}
            selectedValues={selectedTracks}
            setSelectedValues={setSelectedTracks}
          />
        </Grid>
        <Grid item xs={2}>
          <MultiSelect
            filterField="Artists"
            items={artists}
            selectedValues={selectedArtists}
            setSelectedValues={setSelectedArtists}
          />
        </Grid>
        <Grid item xs={2}>
          <InputLabel className={classes.inputLabel}>Year</InputLabel>
          <YearSelector
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </Grid>
        <Grid item xs={2}>
          <InputLabel className={classes.inputLabel}>Popularity</InputLabel>
          <TextField
            className={classes.textField}
            InputProps={{
              classes: { root: classes.textFieldLabel },
            }}
            onChange={handleChange}
            value={popularityRange}
          />
        </Grid>
        <Grid className={classes.grid} item xs={2}>
          <Button
            classes={{ root: classes.buttonRoot, label: classes.buttonLabel }}
            onClick={handleClear}
          >
            CLEAR ALL FILTERS
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}
