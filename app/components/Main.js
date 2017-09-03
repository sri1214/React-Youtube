import React, {Component} from 'react'
import SearchBar from './search_bar.js'
import VideoList from './video_list.js'
import VideoDetail from './video_detail.js'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBCNh-skT2WNedb4nM14Zw_Rxa4fdWVeuA';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.fecthYoutubeVideos = this.fecthYoutubeVideos.bind(this);
    this.onSelectVideo = this.onSelectVideo.bind(this);
  }

  fecthYoutubeVideos(searchTerm){
    console.log(searchTerm);
    if(searchTerm.length>0){
      YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
        console.log(videos);
        this.setState({ videos });
      });
    }else{
      this.setState({ videos: [], selectedVideo: null });
    }
  }

  onSelectVideo(selectedVideo){
    console.log(selectedVideo);
    this.setState({ selectedVideo });
  }
  render(){
    return (
      <div className='main-container'>
        <SearchBar fetchVideos={this.fecthYoutubeVideos}/>
        {this.state.selectedVideo!=null && <VideoDetail video = {this.state.selectedVideo}/>}
        {this.state.videos.length !=0 && <VideoList videos = {this.state.videos} onSelect={this.onSelectVideo}/>}
      </div>
    )
  }
}

export default Main
