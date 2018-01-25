import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = ({videos, selectVideo}) => {
  const videoItems = videos.map((video) => <VideoListItem key={video.etag} video={video} selectVideo={selectVideo}/>);

  return (
      <ul className="col-xs-5 list-group">
        {videoItems}
      </ul>
    );
}

export default VideoList;