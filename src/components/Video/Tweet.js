import React from 'react';
import { TwitterShareButton } from 'react-twitter-embed';

export const Tweet = () => {
  return (
    <div className="centerContent">
      <div className="selfCenter">
        <TwitterShareButton
          url="https://video-learning-a4c3a.firebaseapp.com/"
          options={{
            text: '#今日の積み上げ',
            size: 'large',
          }}
        />
      </div>
    </div>
  );
};
