import React, { Fragment, useEffect, useState } from "react";

import { Typography } from "@material-ui/core";

import FilterBar from "./FilterBar";
import TrackCards from "./TrackCards";
import uriEncodeObject from "../lib/uriEncodeObject";

//hooks
import useCustomFetch from "../hooks/useCustomFetch";

function App() {
  const [selectedAlbums, setSelectedAlbums] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [popularityRange, setPopularityRange] = useState([]);

  const [albums] = useCustomFetch("/albums");
  const [tracks] = useCustomFetch("/tracks");
  const [artists] = useCustomFetch("/artists");

  const [filteredTracks] = useCustomFetch(
    `api/get_tracks?${uriEncodeObject({
      albums: selectedAlbums,
      tracks: selectedTracks,
      artists: selectedArtists,
      year: selectedYear,
      popularity: popularityRange,
    })}`
  );

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.padding = "0px 20px 20px 20px";
  }, []);

  return (
    <Fragment>
      <Typography component="h1" variant="h4">
        Spotify Music
      </Typography>
      <FilterBar
        albums={albums}
        artists={artists}
        selectedAlbums={selectedAlbums}
        selectedArtists={selectedArtists}
        selectedTracks={selectedTracks}
        selectedYear={selectedYear}
        setSelectedAlbums={setSelectedAlbums}
        setSelectedArtists={setSelectedArtists}
        setSelectedTracks={setSelectedTracks}
        setSelectedYear={setSelectedYear}
        tracks={tracks}
      />
      {filteredTracks && <TrackCards filteredTracks={filteredTracks} />}
    </Fragment>
  );
}

export default App;
