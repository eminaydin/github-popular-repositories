import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.scss";
import { Menu, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { GET_POPULAR_REPOS, IS_LOADING } from "../lib/ActionTypes";
import { options } from "../lib/SelectOptions";
import { fetchPopularRepos } from "../lib/FetchApi";

const MainMenu = ({ getPopularRepos, isLoading }) => {
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation().pathname;

  useEffect(() => {
    location === "/result" ? setActiveItem("result") : setActiveItem("home");
  }, [location]);

  const clickHandler = (e, { name }) => {
    setActiveItem(name);
  };

  const handleInputChange = (event) => {
    const query = event.target.textContent;
    isLoading(true);
    fetchPopularRepos(getPopularRepos, isLoading, query);
  };
  return (
    <div>
      <Menu pointing>
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={clickHandler}
        />
        <Menu.Item
          as={Link}
          to="/result"
          name="result"
          active={activeItem === "result"}
          onClick={clickHandler}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Select
              placeholder="Select a language"
              options={options}
              onChange={handleInputChange}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
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
    isLoading: (value) => {
      dispatch({
        type: IS_LOADING,
        payload: value,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(MainMenu);
