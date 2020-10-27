import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.scss";
import { Menu, Select } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { IS_LOADING } from "../lib/ActionTypes";
import { options } from "../lib/SelectOptions";
import { fetchPopularRepos } from "../lib/FetchApi";

const MainMenu = () => {
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  console.log(useLocation());
  useEffect(() => {
    setActiveItem(location);
  }, [location]);

  const clickHandler = (e, { name }) => {
    setActiveItem(name);
  };

  const handleInputChange = (event) => {
    const query = event.target.textContent;
    dispatch({ type: IS_LOADING, payload: true });
    fetchPopularRepos(dispatch, query);
  };
  return (
    <div>
      <Menu pointing>
        <Menu.Item
          as={Link}
          to="/"
          name="/home"
          active={activeItem === "/"}
          onClick={clickHandler}
        />
        <Menu.Item
          as={Link}
          to="/result"
          name="result"
          active={activeItem === "/result"}
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
export default MainMenu;
