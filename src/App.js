import React, { useEffect } from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import MainMenu from './components/MainMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import StarredRepos from './components/StarredRepos';
import PopularCards from './components/PopularCards';
import { connect } from 'react-redux';
import { fetchPopularRepos } from './lib/api';
import { getStarredRepos } from './lib/localstorage';


const App = (props) => {

  useEffect(() => {
    fetchPopularRepos(props.setPopularRepos)
    props.setStarredRepos(getStarredRepos())
  }, []);


  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact component={PopularCards} />
        <Route path="/result" component={StarredRepos} />
      </Switch>
    </Router>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    setPopularRepos: (value) => {
      dispatch({
        type: "SET_POPULAR_REPOS",
        payload: value
      })
    },
    setStarredRepos: (value) => {
      dispatch({
        type: "SET_STARRED_REPOS",
        payload: value
      })
    }
  }
}


export default connect(null, mapDispatchToProps)(App);
