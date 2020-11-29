import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import CountUp from "react-countup";
import { videosUseStyles } from "../style/pages";
import { VideoContext } from "../context/video-context";
import { MaterialUIUItems } from "./MaterialUIItems";

const MaterialUIPage = () => {
  const classes = videosUseStyles();
  const { MVideo } = useContext(VideoContext);

  //動画視聴済かどうかcompletedの値を見ている
  let numberOfCompleted = 0;
  for (let i = 0; i < MVideo.length; i++) {
    if (MVideo[i].completed === true) {
      numberOfCompleted = numberOfCompleted + 1;
    }
  }

  //動画視聴済の割合の計算を行っている
  let AchievementRate =
    Math.round((numberOfCompleted / MVideo.length) * 100) || 0;

  return (
    <div>
      <h3 className={classes.title}>
        {" "}
        現在の進捗率{" "}
        <CountUp
          end={AchievementRate}
          duration={5}
          className={classes.number}
        />{" "}
        %
      </h3>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Grid container justify="space-evenly">
            {MVideo.map((video) => (
              <MaterialUIUItems
                id={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </div>
  );
};

export { MaterialUIPage };
