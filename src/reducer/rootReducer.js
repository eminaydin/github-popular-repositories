const initialState = []

const rootReducer = (state = initialState, action) => {
    if (action.type === "STAR_REPO") {
        return {
            ...state,
            starredRepos: action.payload
        }
    }
}

export default rootReducer