import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import CountUp from "react-countup";
import { videosUseStyles } from "../style/pages";
import { VideoContext } from "../context/video-context";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import { DockerUItems } from "./DockerItems";

const DockerPage = () => {
  const classes = videosUseStyles();
  //
  const { DVideo } = useContext(VideoContext);

  //動画視聴済かどうかcompletedの値を見ている
  let numberOfCompleted = 0;
  //
  for (let i = 0; i < DVideo.length; i++) {
    if (DVideo[i].completed === true) {
      numberOfCompleted = numberOfCompleted + 1;
    }
  }

  //
  //動画視聴済の割合の計算を行っている
  let AchievementRate =
    Math.round((numberOfCompleted / DVideo.length) * 100) || 0;

  if (AchievementRate === 100 && sessionStorage.getItem("d") == null) {
    Swal.fire(
      "おめでとうございます!!!",
      "進捗率100%となりました!!その他のコースも学習してみましょう!!",
      "success"
    );
    sessionStorage.setItem("d", "completed");
  }

  return (
    <div className={classes.container}>
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
          {AchievementRate === 100 && <Confetti />}
          <Grid container justify="space-evenly">
            {DVideo.map((video) => (
              <DockerUItems
                key={video.id}
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

export { DockerPage };
