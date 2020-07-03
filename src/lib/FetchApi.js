import { connect } from "react-redux";

const baseUrl = `https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories`;
export const fetchPopularRepos = (dispatch) => {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      dispatch(data.items);
    });
};
const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};
export default connect(mapStateToProps)(fetchPopularRepos);
