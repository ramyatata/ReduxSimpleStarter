import React from 'react';
import ReactDOM from 'react-dom';
import Books from '../containers/books.js';

export default class App extends React.Component{
  render() {
    return (
      <div>
        <Books/>
      </div>
    );
  }
}

//ReactDOM.render(<App/>, document.querySelector(".container"));