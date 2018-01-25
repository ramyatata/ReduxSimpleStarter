import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/Video_list.js';

const API_KEY = 'AIzaSyD6ir1o1JP_lfHqcQwkMwW9yhJRNWsHiCE';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    YTsearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({videos: data});
    });
  }

  render() {
    return (
      <div>
        <SearchBar className="col-xs-12"/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));