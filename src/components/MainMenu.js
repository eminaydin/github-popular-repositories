import React, { useState } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react'
import PopularCards from './PopularCards';
import { connect } from 'react-redux';

const MainMenu = (props) => {
    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
        console.log(props);
    };
    const [popularRepos, setPopularRepos] = useState("");
    const fetchApi = () => {
        fetch("https://api.github.com/search/repositories?q=stars:>1+language:All&sort=stars&order=desc&type=Repositories")
            .then(res => res.json())
            .then(data => setPopularRepos(data.items))
    }
    console.log(props.state);

    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    name='home'
                    active={setActiveItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='messages'
                    active={setActiveItem === 'messages'}
                    onClick={fetchApi}
                />
                <Menu.Item
                    name='friends'
                    active={setActiveItem === 'friends'}
                    onClick={handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <Segment>
                {popularRepos && <PopularCards repos={popularRepos} />}

            </Segment>
        </div>


    );
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(MainMenu);

