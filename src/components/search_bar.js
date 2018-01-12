import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: 'Enter search term... '}

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({term: e.target.value});
  }

  render() {
    return (
      <input value={this.state.term} onChange = {this.handleInputChange}/>
    );
  }
}

export default SearchBar;