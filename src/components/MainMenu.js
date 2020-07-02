import React, { useState } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react'
import PopularCards from './PopularCards';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MainMenu = () => {

    return (
        <div>
            <Menu pointing>
                <Link to="/">
                    <Menu.Item
                        name="home"
                    />
                </Link>
                <Link to="/result">
                    <Menu.Item
                        name='result'
                    />
                </Link>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    );
}


export default MainMenu;

