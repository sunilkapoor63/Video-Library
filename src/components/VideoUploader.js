import React, { useState } from 'react';

const VideoUploader = ({ onAddVideo }) => {
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = () => {
    if (video) {
      onAddVideo(video);
      setVideo(null);
    }
  };

  return (
    <div className="VideoUploader">
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button onClick={handleUpload}>Uploaded Video</button>
    </div>
  );
};

export default VideoUploader;
