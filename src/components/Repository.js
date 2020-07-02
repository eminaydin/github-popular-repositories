import React, { useState, useEffect } from 'react';
import { Button, Card, Image, Rating } from 'semantic-ui-react'
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Repository = (props) => {
    const { repository, starredRepos, setStarredRepos } = props
    const { id, owner, name, created_at, description, html_url, homepage, stargazers_count } = repository
    const [starred, setStarred] = useState(false);

    useEffect(() => {
        if (starredRepos) {
            let isStarred = starredRepos.find((repo) => repo.id === id)
            setStarred(isStarred)
        }

        return () => {

        }

    }, [starredRepos, id])

    const clickHandler = id => {
        if (starred) {
            const strepos = starredRepos.filter(repo => repo.id !== id);
            setStarredRepos(strepos)
        } else {
            const newStarredRepos = [...starredRepos, repository]
            setStarredRepos(newStarredRepos)
        }
    }
    return (
        <Card key={id} >
            <Card.Content>
                <Rating onClick={() => clickHandler(id)} rating={starred ? 1 : 0} />
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
                <span>{stargazers_count} stars</span>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic
                        color='green'
                        target="_blank"
                        href={homepage}
                        content="Website"
                    />

                    <Button
                        basic
                        color='red'
                        target="_blank"
                        href={html_url}
                        content="Github"
                    />
                </div>
            </Card.Content>
        </Card>
    );
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setStarredRepos: (value) => {
            dispatch({
                type: "SET_STARRED_REPOS",
                payload: value
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Repository);