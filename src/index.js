import React from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyD6ir1o1JP_lfHqcQwkMwW9yhJRNWsHiCE';

class App extends React.Component {
  constructor() {
    this.state = {
      videos: []
    };

    YTsearch({key: API_KEY, term: 'React'}, (data) => {
      this.setState({videos: data});
      console.log(data);
    });
  }



  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));