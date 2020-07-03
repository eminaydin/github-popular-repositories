import React, { useEffect } from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import MainMenu from "./components/MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StarredRepos from "./components/StarredRepos";
import PopularCards from "./components/PopularCards";
import { connect } from "react-redux";
import { fetchPopularRepos } from "./lib/FetchApi";
import { getStarredRepos } from "./lib/Localstorage";
import { GET_POPULAR_REPOS, SET_STARRED_REPOS } from "./lib/ActionTypes";

const App = ({ getPopularRepos, dispatchSetStarredRepos }) => {
  useEffect(() => {
    // call the api and pass the dispatch along with it to send it to redux state
    fetchPopularRepos(getPopularRepos);
    // dispatch the action and get the local storage
    dispatchSetStarredRepos(getStarredRepos());
  }, [dispatchSetStarredRepos, getPopularRepos]);

  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={PopularCards} />
        <Route path="/result" component={StarredRepos} />
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPopularRepos: (value) => {
      dispatch({
        type: GET_POPULAR_REPOS,
        payload: value,
      });
    },
    dispatchSetStarredRepos: (value) => {
      dispatch({
        type: SET_STARRED_REPOS,
        payload: value,
      });
    },
  };
};

// connect expects 2 parameter and the first one always has to be mapStateToProps, to prevent error simply insert empty value.
export default connect(null, mapDispatchToProps)(App);
