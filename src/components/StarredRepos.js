import React from "react";
import {
  Button,
  Card,
  Image,
  CardGroup,
  Segment,
  Container,
  Header,
  Icon,
} from "semantic-ui-react";
import Moment from "react-moment";
import { connect } from "react-redux";
import "../App.scss";

const StarredRepos = ({ starredRepos }) => {
  return (
    <Segment className="starredRepos-wrapper" inverted>
      {starredRepos.length > 0 ? (
        <CardGroup>
          {starredRepos.map(
            ({
              id,
              owner,
              name,
              created_at,
              description,
              html_url,
              homepage,
              stargazers_count,
            }) => {
              return (
                <Card key={id}>
                  <Card.Content>
                    <Image
                      circular
                      floated="right"
                      size="mini"
                      src={owner.avatar_url}
                    />
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                      <Moment format="DD-MM-YYYY">{created_at}</Moment>
                    </Card.Meta>
                    <Card.Description>{description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <span>{stargazers_count} stars </span>
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
            }
          )}
        </CardGroup>
      ) : (
        <Container className="empty-msg">
          <Header inverted>Star repositories to see them here</Header>
        </Container>
      )}
    </Segment>
  );
};
const mapStateToProps = (state) => {
  return {
    starredRepos: state.starredRepos,
  };
};
export default connect(mapStateToProps)(StarredRepos);
