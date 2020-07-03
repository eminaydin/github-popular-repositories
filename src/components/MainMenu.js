import React, { useState, useEffect } from "react";
import { Menu, Select } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { GET_POPULAR_REPOS } from "../lib/ActionTypes";
import { options } from "../lib/SelectOptions";
import "../App.scss";
import { fetchPopularRepos } from "../lib/FetchApi";

const MainMenu = ({ getPopularRepos }) => {
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation().pathname;
  useEffect(() => {
    if (location === "/result") {
      return setActiveItem("result");
    } else {
      return setActiveItem("home");
    }
  }, [location]);

  const clickHandler = (e, { name }) => {
    setActiveItem(name);
  };

  const handleInputChange = (event) => {
    const query = event.target.textContent;
    fetchPopularRepos(getPopularRepos, query);
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
  };
};
export default connect(null, mapDispatchToProps)(MainMenu);
