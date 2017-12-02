import React from 'react';
import { combineReducers } from 'redux';
import booksReducer from './reducer-books.js';
import selectBookReducer from './reducer-select-book.js';

const rootReducer = combineReducers({
  books: booksReducer,
  currentBook: selectBookReducer
});

export default rootReducer;