import React, {Component} from 'react';

const VideoPlayer = ({video}) => {
  if(!video){
    return <div>Loading Video...</div>
  }

  const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoPlayer;