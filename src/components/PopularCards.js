import React, { useState } from 'react';
import { Button, Card, Image, CardGroup, Rating } from 'semantic-ui-react'
import Moment from 'react-moment';
import store from '../helpers/store';
import { connect } from 'react-redux';

const PopularCards = (props) => {
    const [starred, setStarred] = useState([]);

    const clickHandler = id => {

        if (!starred.find(repoId => {
            return repoId.id === id
        })) {
            props.addStar(starred)
            setStarred([
                ...starred, props.repos.find(repoId => {
                    return repoId.id === id
                })
            ])
        }
    }
    console.log(props.state);

    return (
        <CardGroup>
            {props.repos.map(({ id, owner, name, created_at, description, html_url, homepage, stargazers_count }) => {
                return (
                    <Card key={id} >
                        <Card.Content>
                            <Rating onClick={() => clickHandler(id)} />
                            <Image
                                circular
                                floated='right'
                                size='mini'
                                src={owner.avatar_url}
                            />
                            <Card.Header>{name}</Card.Header>
                            <Card.Meta>
                                <Moment format="DD-MM-YYYY">
                                    {created_at}
                                </Moment>
                            </Card.Meta>
                            <Card.Description>
                                {description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <span>{stargazers_count} stars </span>
                        </Card.Content>
                        <Card.Content extra>
                            <Button.Group>
                                <Button target="_blank" href={homepage}>Official Website</Button>
                                <Button.Or />
                                <Button color="teal" target="_blank" href={html_url}> Github Profile</Button>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                )
            })}


        </CardGroup>
    );
}
const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStar: (value) => {
            dispatch({
                type: "STAR_REPO",
                payload: value
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PopularCards);
