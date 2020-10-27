import React, { useEffect } from "react";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";
import MainMenu from "./components/MainMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StarredRepos from "./components/StarredRepos";
import PopularCards from "./components/PopularCards";
import { useDispatch } from "react-redux";
import { fetchPopularRepos } from "./lib/FetchApi";
import { getStarredRepos } from "./lib/Localstorage";
import { SET_STARRED_REPOS } from "./lib/ActionTypes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // call the api and pass the dispatch along with it to send it to redux state
    fetchPopularRepos(dispatch);
    // dispatch the action and get the local storage
    dispatch({ type: SET_STARRED_REPOS, payload: getStarredRepos() });
  }, [dispatch]);

  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/result" component={StarredRepos} />
        <Route path="/" exact component={PopularCards} />
      </Switch>
    </Router>
  );
};
export default App;
