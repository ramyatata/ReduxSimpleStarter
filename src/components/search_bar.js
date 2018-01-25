import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: 'Enter search term... '}

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({term: e.target.value});
    console.log(this.props);
    this.props.searchVideo(this.state.term);
  }

  render() {
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange = {this.handleInputChange}/>
      </div>
    );
  }
}

export default SearchBar;