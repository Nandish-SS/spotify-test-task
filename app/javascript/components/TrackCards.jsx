import React, { Fragment } from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ListSubheader,
  Slider,
  Typography,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
  },
  grid: {
    margin: 10,
  },
  trackContent: {
    width: "30%",
    margin: "auto",
  },
  albumContent: {
    width: "20%",
    margin: "auto",
  },
  cover: {
    width: 100,
    height: 60,
    margin: 20,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    width: "25%",
    margin: 20,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  albumLabel: {
    fontSize: "15px",
    fontFamily: "Poppins",
  },
  trackLabel: {
    fontFamily: "Poppins",
  },
  inputLabel: {
    color: "white",
    fontSize: "25px",
    margin: "auto",
    height: 500,
    fontFamily: "Poppins",
    marginTop: 100,
  },
  slider: {
    color: "#2dd760",
  },
}));

export default function TrackCards({ filteredTracks }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container>
        {filteredTracks.length > 0 ? (
          filteredTracks.map((track, index) => (
            <Grid key={index} className={classes.grid} item xs={12}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={track.image}
                  title={`${track.album_name} Cover`}
                />
                <CardContent className={classes.trackContent}>
                  <Typography
                    className={classes.trackLabel}
                    component="h6"
                    variant="h6"
                  >
                    {track.name}
                  </Typography>
                </CardContent>
                <CardContent className={classes.albumContent}>
                  <Typography
                    className={classes.albumLabel}
                    color="textSecondary"
                    component="h5"
                    variant="h5"
                  >
                    {track.album_name}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="play/pause">
                    <PlayArrowIcon className={classes.playIcon} />
                  </IconButton>
                  <Slider
                    className={classes.slider}
                    aria-labelledby="continuous-slider"
                  />
                </div>
              </Card>
            </Grid>
          ))
        ) : (
          <div className={classes.inputLabel}>No Tracks Found</div>
        )}
      </Grid>
    </Fragment>
  );
}
