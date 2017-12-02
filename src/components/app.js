import React from 'react';
import ReactDOM from 'react-dom';
import Books from '../containers/books.js';
import SelectBook from '../containers/selectBook.js';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Books/>
        <SelectBook/>
      </div>
    );
  }
}

//ReactDOM.render(<App/>, document.querySelector(".container"));