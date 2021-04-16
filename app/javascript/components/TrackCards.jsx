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
  details: {
    display: "flex",
    flexDirection: "column",
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
  // trackLabel: {
  //   width: 300,
  // },
  albumLabel: {
    fontSize: "15px",
  },
}));

export default function TrackCards({ filteredTracks }) {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container>
        {filteredTracks.map((track, index) => (
          <Grid key={index} className={classes.grid} item xs={12}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                image={track.image}
                title={`${track.album_name} Cover`}
              />
              {/* <div className={classes.details}> */}
              <CardContent className={classes.trackContent}>
                <Typography component="h6" variant="h6">
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
                <Slider aria-labelledby="continuous-slider" />
              </div>
              {/* </div> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
}
