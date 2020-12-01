import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { VideoContext } from "../context/video-context";
import { Grid } from "@material-ui/core";
import { AllVideoItems } from "./AllVideoItems";

const AllVideos = () => {
  const { MVideo, RVideo, RRVideo } = useContext(VideoContext);
  return (
    <div>
      <Grid container>
        <Grid item sm={2} />
        <Grid item sm={8}>
          <Grid container justify="space-evenly">
            {/* Material UI Videoのデータ(image, title, completed)をMapしている*/}
            {MVideo.map((video) => (
              <AllVideoItems
                id={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
            {/* React Videoのデータ(image, title, completed)をMapしている*/}
            {RVideo.map((video) => (
              <AllVideoItems
                id={video.id}
                title={video.title}
                image={video.image}
                path={video.path}
                completed={video.completed}
              />
            ))}
            {/* React Router Videoのデータ(image, title, completed)をMapしている*/}
            {RRVideo.map((video) => (
              <AllVideoItems
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

export { AllVideos };

// import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
// import { AllVideosStyles } from "../style/pages";
// import { VideoContext } from "../context/video-context";
// import { Box, Checkbox, Grid, Typography } from "@material-ui/core";

// const AllVideos = () => {
//   const classes = AllVideosStyles();
//   const history = useHistory();
//   const { MVideo, RVideo, RRVideo } = useContext(VideoContext);

//   //それぞれの動画ページに移動する
//   const handleEachVideoRouter = (path) => {
//     history.push(path);
//   };

//   return (
//     <Grid container>
//       {/* Material UI Videoのデータ(image, title, completed)をMapしている*/}
//       {MVideo.map((video) => (
//         <Grid item className={classes.outline} key={video.id}>
//           <Box className={classes.box}>
//             <img
//               src={video.image}
//               alt={video.id}
//               onClick={() => handleEachVideoRouter(video.path)}
//             />
//             <Typography
//               variant="body1"
//               component="p"
//               className={classes.videoTitle}
//             >
//               {video.title}
//             </Typography>
//             <Box className={classes.adjust}>
//               <Typography
//                 variant="body2"
//                 color="textSecondary"
//                 component="span"
//               >
//                 Completed
//               </Typography>
//               <Checkbox
//                 checked={video.completed}
//                 inputProps={{ "aria-label": "primary checkbox" }}
//               />
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//       {/* React Videoのデータ(image, title, completed)をMapしている*/}
//       {RVideo.map((video) => (
//         <Grid item className={classes.outline} key={video.id}>
//           <Box className={classes.box}>
//             <img
//               src={video.image}
//               alt={video.id}
//               onClick={() => handleEachVideoRouter(video.path)}
//             />
//             <Typography
//               variant="body1"
//               component="p"
//               className={classes.videoTitle}
//             >
//               {video.title}
//             </Typography>
//             <Box className={classes.adjust}>
//               <Typography
//                 variant="body2"
//                 color="textSecondary"
//                 component="span"
//               >
//                 Completed
//               </Typography>
//               <Checkbox
//                 checked={video.completed}
//                 inputProps={{ "aria-label": "primary checkbox" }}
//               />
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//       {/* React Router Videoのデータ(image, title, completed)をMapしている*/}
//       {RRVideo.map((video) => (
//         <Grid item className={classes.outline} key={video.id}>
//           <Box className={classes.box}>
//             <img
//               src={video.image}
//               alt={video.id}
//               onClick={() => handleEachVideoRouter(video.path)}
//             />
//             <Typography
//               variant="body1"
//               component="p"
//               className={classes.videoTitle}
//             >
//               {video.title}
//             </Typography>
//             <Box className={classes.adjust}>
//               <Typography
//                 variant="body2"
//                 color="textSecondary"
//                 component="span"
//               >
//                 Completed
//               </Typography>
//               <Checkbox
//                 checked={video.completed}
//                 inputProps={{ "aria-label": "primary checkbox" }}
//               />
//             </Box>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export { AllVideos };
