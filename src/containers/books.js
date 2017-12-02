import React from 'react';
import { connect } from 'react-redux';
import selectBook  from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BooksList extends React.Component {

  renderList() {
    console.log(this.props);
    return this.props.books.map((book) => {
      return <li
        onClick= {() => {this.props.selectBook(book)}}
        key={book.title}>
        {book.title}
      </li>
    });
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
  //whatever is returned will show up as props of container
  return {
    books: state.books
  }
}

//anything returned from this function will end up as props to our container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all reducers(through dispatch)
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote booklist from component to container it needs to know about this new dispatch method,selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);