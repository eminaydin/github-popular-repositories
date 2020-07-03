import React, { useState } from "react";
import { CardGroup, Segment, Container } from "semantic-ui-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { connect } from "react-redux";
import Repository from "./Repository";
import "../App.scss";

const PopularCards = ({ popularRepos }) => {
  const [showLoading, setShowLoading] = useState(true);
  setTimeout(() => {
    setShowLoading(false);
  }, 2000);
  return (
    <Segment inverted className="popularcards-wrapper">
      {showLoading ? (
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
  };
};

export default connect(mapStateToProps)(PopularCards);
