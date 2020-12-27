import React from 'react';
import ReactPlayer from 'react-player';
import '../style/player.css';
import { VideoProps } from '../types/types';

type completedProps = {
  saveCompletedStatus: (id: string, state: number) => void;
  matchedVideo: VideoProps[];
};

const ResponsivePlayer = ({
  saveCompletedStatus,
  matchedVideo,
}: completedProps) => {
  return (
    <div className="film_container">
      <div className="film_box">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            controls
            onProgress={({ played }) =>
              saveCompletedStatus(matchedVideo[0].id, played)
            }
            url={matchedVideo[0].url}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export { ResponsivePlayer };
