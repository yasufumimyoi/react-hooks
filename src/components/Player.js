import React from 'react';
import ReactPlayer from 'react-player';
import '../style/player.css';

const ResponsivePlayer = ({ saveCompletedStatus, matchedVideo }) => {
  return (
    <div className="film_container">
      <div className="film_box">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            controls
            onProgress={(state) =>
              saveCompletedStatus(matchedVideo[0].id, state)
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
