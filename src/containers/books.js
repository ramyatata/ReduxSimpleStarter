import React from 'react';
import { connect } from 'react-redux';

class BooksList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {return <li key={book.title}>{book.title}</li>});
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BooksList);