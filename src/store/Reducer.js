import { setStarredRepos } from "../lib/Localstorage";
import {
  GET_POPULAR_REPOS,
  SET_STARRED_REPOS,
  IS_LOADING,
} from "../lib/ActionTypes";

const initialState = { popularRepos: [], starredRepos: [], loading: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_REPOS:
      return {
        ...state,
        popularRepos: action.payload,
      };
    case SET_STARRED_REPOS:
      setStarredRepos(action.payload);
      return {
        ...state,
        starredRepos: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
