import React, { useState, useEffect } from 'react';
import { CardGroup, Rating, Segment, Container } from 'semantic-ui-react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import { connect } from 'react-redux';
import Repository from './Repository';
import { getPopularRepos } from '../lib/api';
import { getStarredRepos } from '../lib/localstorage';

const PopularCards = (props) => {
    const { popularRepos } = props

    return (
        <Segment inverted className="popularcards-wrapper">
            {
                popularRepos ?
                    <CardGroup className="main-cards">
                        {popularRepos.map((repository) => {
                            return (
                                <Repository repository={repository} />
                            )
                        })}
                    </CardGroup>
                    :
                    <Container className="loaderSpinner">
                        <ClimbingBoxLoader color={"#00b5ad"} />
                    </Container>
            }
        </Segment >
    );
}

const mapStateToProps = (state) => {
    return {
        popularRepos: state.popularRepos
    }
}


export default connect(mapStateToProps)(PopularCards);
