import { setStarredRepos } from "../lib/Localstorage";
import {
  GET_POPULAR_REPOS,
  STAR_REPO,
  SET_STARRED_REPOS,
} from "../lib/ActionTypes";

const initialState = { popularRepos: [], starredRepos: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STAR_REPO:
      return {
        ...state,
        starredRepos: action.payload,
      };
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
    default:
      return state;
  }
};

export default reducer;
