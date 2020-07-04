import React, { useState, useEffect } from "react";
import { Button, Card, Image, Rating, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { SET_STARRED_REPOS } from "../lib/ActionTypes";
import "../App.scss";

const Repository = ({ repository, starredRepos, setStarredRepos }) => {
  const {
    id,
    owner,
    name,
    created_at,
    description,
    html_url,
    homepage,
    stargazers_count,
  } = repository;
  const [starred, setStarred] = useState({});

  useEffect(() => {
    let isStarred = starredRepos.find((repo) => repo.id === id);
    setStarred(isStarred);
  }, [starredRepos, id]);

  const clickHandler = () => {
    if (starred) {
      //prevent adding the same card
      const filteredRepos = starredRepos.filter((repo) => repo !== starred);
      setStarredRepos(filteredRepos);
    } else {
      // add card if its not starred yet
      const newStarredRepos = [...starredRepos, repository];
      setStarredRepos(newStarredRepos);
    }
  };
  return (
    <Card key={id}>
      <Card.Content>
        <Rating icon={"star"} onClick={clickHandler} rating={starred ? 1 : 0} />
        <Image circular floated="right" size="mini" src={owner.avatar_url} />
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <Moment format="DD-MM-YYYY">{created_at}</Moment>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>{stargazers_count} stars</span>
      </Card.Content>

      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            animated="fade"
            basic
            color="grey"
            href={html_url}
            target="_blank"
          >
            <Button.Content visible>
              <Icon color="black" name="github" />
              Github repo
            </Button.Content>
            <Button.Content hidden>To source code</Button.Content>
          </Button>
          <Button
            animated="fade"
            basic
            color="red"
            content="Live version"
            icon="keyboard"
            href={homepage}
            target="_blank"
          >
            <Button.Content visible>
              <Icon name="keyboard" />
              Live version
            </Button.Content>
            <Button.Content hidden> To website </Button.Content>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    starredRepos: state.starredRepos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStarredRepos: (value) => {
      dispatch({
        type: SET_STARRED_REPOS,
        payload: value,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Repository);
