import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderVideoItems = videos.map((video) => (
    <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}></VideoItem>
  ));
  return <div className='ui relaxed divided list'>{renderVideoItems}</div>;
};

export default VideoList;
