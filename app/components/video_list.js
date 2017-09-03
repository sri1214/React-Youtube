import React from 'react'
import VideoListItem from './video_list_item.js'

function VideoList(props){
  const videoItems = props.videos.map(function(video){
    return <VideoListItem key={video.etag} video={video} onSelect={props.onSelect} />
  });
  return (
    <ul className = 'list-group col-md-4'>
      {videoItems}
    </ul>
  )
}

export default VideoList
