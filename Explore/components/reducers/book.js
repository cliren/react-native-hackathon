import * as types from '../actions/ActionTypes';

const initialState = {
  books: []
};

export default function book(state = initialState, action = {}) {
  switch (action.type) {
    case types.SHOW_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => {
          return book.id === action.bookId;
        })
      };
    case types.LOAD_BOOKS:
      return {
        ...state,
        books: action.books
      };
    default:
      return state;
  }
}
