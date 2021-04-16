import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Slider,
  Typography,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function TitlebarGridList({ filteredTracks }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">Tracks</ListSubheader>
        </GridListTile>
        {filteredTracks.map((track) => (
          <Card className={classes.root}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {track.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {track.album_name}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon className={classes.playIcon} />
                </IconButton>
                <Slider aria-labelledby="continuous-slider" />
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={track.image}
              title={`${track.album_name} Cover`}
            />
          </Card>
        ))}
      </GridList>
    </div>
  );
}
