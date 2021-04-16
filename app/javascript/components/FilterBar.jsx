import React, { Fragment } from "react";
import { Grid, InputLabel } from "@material-ui/core";

import MultiSelect from "./MultiSelect";
import YearSelector from "./YearSelector";

export default function FilterBar({
  albums,
  artists,
  selectedAlbums,
  selectedArtists,
  selectedTracks,
  selectedYear,
  setSelectedAlbums,
  setSelectedArtists,
  setSelectedTracks,
  setSelectedYear,
  tracks,
}) {
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={2}>
          <InputLabel>Filters:</InputLabel>
        </Grid>
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
          <InputLabel>Year</InputLabel>
          <YearSelector
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </Grid>
        <Grid item xs={2}>
          <InputLabel>Popularity</InputLabel>
          <input></input>
        </Grid>
      </Grid>
    </Fragment>
  );
}
