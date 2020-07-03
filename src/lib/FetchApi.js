export const fetchPopularRepos = (dispatch, language) => {
  const baseUrl = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      dispatch(data.items);
    });
};
