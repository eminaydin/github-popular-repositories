import React from "react";
import { CardGroup, Segment, Container } from "semantic-ui-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { connect } from "react-redux";
import Repository from "./Repository";
import "../App.scss";

const PopularCards = ({ popularRepos, loading }) => {
  return (
    <Segment inverted className="popularcards-wrapper">
      {loading ? (
        <Container className="loaderSpinner">
          <ClimbingBoxLoader color="#00b5ad" />
        </Container>
      ) : (
        <CardGroup className="main-cards">
          {popularRepos.map((repository) => {
            return <Repository repository={repository} key={repository.id} />;
          })}
        </CardGroup>
      )}
    </Segment>
  );
};

const mapStateToProps = (state) => {
  return {
    popularRepos: state.popularRepos,
    loading: state.loading,
  };
};
export default connect(mapStateToProps)(PopularCards);
