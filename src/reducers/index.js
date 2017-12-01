import React from 'react';
import { combineReducers } from 'redux';
import booksReducer from './reducer-books.js';

const rootReducer = combineReducers({
  books: booksReducer
});

export default rootReducer;