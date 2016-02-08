import * as types from '../actions/ActionTypes';

const initialState = {
  newsfeedUpdates: [],
  newsfeedLoaded: false
};

export default function newsfeed(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_NEWSFEED:
      console.log("newsfeed", action);

      return {
        ...state,
        newsfeedUpdates: action.newsfeedUpdates,
        newsfeedLoaded: action.newsfeedLoaded
      };
    default:
      return state;
  }
}
