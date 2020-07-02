import React from 'react';
import { Button, Card, Image, CardGroup, Segment, Container } from 'semantic-ui-react'
import Moment from 'react-moment';
import { connect } from 'react-redux';

const StarredRepos = ({ starredRepos }) => {

    return (
        <Segment className="starredRepos-wrapper" inverted>
            {starredRepos ?
                <CardGroup>
                    {starredRepos.map(({ id, owner, name, created_at, description, html_url, homepage, stargazers_count }) => {
                        return (
                            <Card key={id} >
                                <Card.Content>
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
                :
                <Container className="result-info">
                    <p>Star repositories to see them here. </p>
                </Container>
            }
        </Segment>
    );
}
const mapStateToProps = (state) => {
    return {
        starredRepos: state.starredRepos
    }
}
export default connect(mapStateToProps)(StarredRepos);
