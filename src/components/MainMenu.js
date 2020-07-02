import React, { useState } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import PopularCards from './PopularCards';
const MainMenu = () => {
    const [activeItem, setActiveItem] = useState("bio");
    const handleItemClick = (e, { name }) => setActiveItem(name);
    const [popularRepos, setPopularRepos] = useState("");
    const fetchApi = () => {
        fetch("https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc")
            .then(res => res.json())
            .then(data => setPopularRepos(data.items))
    }

    return (
        <Grid>
            <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                    <Menu.Item
                        name='bio'
                        active={activeItem === 'bio'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='pics'
                        active={activeItem === 'pics'}
                        onClick={fetchApi}
                    />
                    <Menu.Item
                        name='companies'
                        active={activeItem === 'companies'}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        name='links'
                        active={activeItem === 'links'}
                        onClick={handleItemClick}
                    />
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
                <Segment>
                    {popularRepos && <PopularCards repos={popularRepos} />}
                </Segment>
            </Grid.Column>
        </Grid>
    );
}

export default MainMenu;
