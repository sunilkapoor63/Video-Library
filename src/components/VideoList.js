import React from 'react';

const VideoList = ({ videos, onPlayVideo, onBookmarkVideo }) => {
  return (
    <div className="VideoList">
      {videos.map((video, index) => (
        <div key={index} className="VideoList-item">
          <p>{video.name}</p>
          <button onClick={() => onPlayVideo(video)}>Play</button>
          <button onClick={() => onBookmarkVideo(video)}>Bookmark</button>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
