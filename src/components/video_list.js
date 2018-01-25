import React from 'react';

import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
  const videoItems = props.videos.map((video, ind) => <VideoListItem key={ind} video={video}/>);

  return (
      <ul className="col-md-6 list-group">
        {videoItems}
      </ul>
    );
}

export default VideoList;