export const fetchPopularRepos = (dispatch) => {
    return fetch("https://api.github.com/search/repositories?q=stars:>1+language:java&sort=stars&order=desc&type=Repositories")
        .then(res => res.json())
        .then(data => {
            dispatch(data.items)
        });

}
