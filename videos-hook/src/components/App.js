import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, search } = useVideos('DUSTCELL');
  useEffect(() => setSelectedVideo(videos[0]), [videos]);
  return (
    <div className='ui container' style={{ padding: '10px' }}>
      <SearchBar onFormSubmit={search}></SearchBar>
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail selectedVideo={selectedVideo}></VideoDetail>
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo}></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
