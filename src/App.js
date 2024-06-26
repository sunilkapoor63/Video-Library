import React, { useState } from 'react';
import VideoUploader from './components/VideoUploader';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import BookmarkFilter from './components/BookmarkFilter';
import './App.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [bookmarkedVideos, setBookmarkedVideos] = useState([]);
  const [showBookmarked, setShowBookmarked] = useState(false);

  const handleAddVideo = (video) => {
    setVideos([...videos, video]);
  };

  const handlePlayVideo = (video) => {
    setCurrentVideo(video);
  };

  const handleBookmarkVideo = (video) => {
    setBookmarkedVideos([...bookmarkedVideos, video]);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  const handleToggleFilter = () => {
    setShowBookmarked(!showBookmarked);
  };

  const displayedVideos = showBookmarked ? bookmarkedVideos : videos;

  return (
    <div className="App">
      <h1>Video Library</h1>
      <VideoUploader onAddVideo={handleAddVideo} />
      <BookmarkFilter
        showBookmarked={showBookmarked}
        onToggleFilter={handleToggleFilter}
      />
      <VideoList
        videos={displayedVideos}
        onPlayVideo={handlePlayVideo}
        onBookmarkVideo={handleBookmarkVideo}
      />
      <VideoPlayer video={currentVideo} onClose={handleCloseVideo} />
    </div>
  );
};

export default App;
