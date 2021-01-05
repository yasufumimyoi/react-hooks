import React from 'react';
import { TwitterShareButton } from 'react-twitter-embed';

export const Tweet = () => {
  return (
    <div className="centerContent">
      <div className="selfCenter">
        <TwitterShareButton
          url="https://video-app-aee1b.firebaseapp.com/"
          options={{
            text: '#今日の積み上げ',
            via: 'LearnReact',
            size: 'large',
          }}
        />
      </div>
    </div>
  );
};
