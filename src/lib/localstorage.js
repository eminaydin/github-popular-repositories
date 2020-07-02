const STARRED_REPOS = 'starredRepos'

export const getStarredRepos = () => {
    const starredRepos = localStorage.getItem(STARRED_REPOS) || '[]' //to prevent json parse error
    return JSON.parse(starredRepos)
}

export const setStarredRepos = (repos) => {
    localStorage.setItem(STARRED_REPOS, JSON.stringify(repos))
}
