import React from 'react';

const VideoPlayer = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="popup">
      <div className="popup-inner">
        <video controls>
          <source src={URL.createObjectURL(video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
