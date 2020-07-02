import { setStarredRepos } from "../lib/localstorage"

const initialState = { popularRepos: [], starredRepos: [] }

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case "STAR_REPO":
            return {
                ...state,
                starredRepos: action.payload
            }
        case "SET_POPULAR_REPOS":
            return {
                ...state,
                popularRepos: action.payload
            }
        case "SET_STARRED_REPOS":
            setStarredRepos(action.payload)
            return {
                ...state,
                starredRepos: action.payload
            }

        default:
            return state;
    }

}

export default rootReducer