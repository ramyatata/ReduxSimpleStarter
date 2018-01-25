import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/Video_list.js';
import VideoPlayer from './components/video_player.js';

const API_KEY = 'AIzaSyD6ir1o1JP_lfHqcQwkMwW9yhJRNWsHiCE';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    };

    this.selectVideo = this.selectVideo.bind(this);
    this.searchVideo = this.searchVideo.bind(this);

    this.searchVideo('React tutorials');
  }

  selectVideo(video) {
    this.setState({currentVideo: video});
  }

  searchVideo(term){
    YTsearch({key: API_KEY, term: term}, (data) => {
      this.setState({videos: data});
      this.setState({currentVideo: data[0]});
    });
  }

  render() {
    return (
      <div className="col-xs-12 container-fluid">
        <div className="col-xs-12">
          <SearchBar className="col-xs-6" searchVideo={this.searchVideo}/>
        </div>
        <div className="col-xs-12">
          <VideoPlayer video={this.state.currentVideo}/>
          <VideoList videos={this.state.videos} selectVideo={this.selectVideo}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));