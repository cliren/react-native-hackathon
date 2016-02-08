import * as types from './ActionTypes';

export function showBook(bookId) {
  return {
    type: types.SHOW_BOOK,
    bookId
  };
}

export function loadBooks(books) {
  return {
    type: types.LOAD_BOOKS,
    books
  }
}
