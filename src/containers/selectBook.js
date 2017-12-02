import React from 'react';
import {connect} from 'react-redux';

class SelectBook extends React.Component {
  render() {
    if(!this.props.currentBook){
      return <div><h3>Select Book to show details</h3></div>
    } else {
      return (
        <div><h4>{this.props.currentBook.title}</h4></div>
      );
    }
  }
}

function mapStateToProps(state){
  return {
    currentBook: state.currentBook
  }
}

export default connect(mapStateToProps)(SelectBook);