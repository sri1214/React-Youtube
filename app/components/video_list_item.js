import React from 'react'

function VideoListItem(props){
  const video = props.video;
  return (
    <li className='list-group-item ' onClick={props.onSelect.bind(null, video)}>
      <div className='video-list-mdeia'>
        <div className='media-left'>
          <img className='media-object' src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem
