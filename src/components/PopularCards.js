import React from "react";
import { CardGroup, Segment, Container } from "semantic-ui-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { connect } from "react-redux";
import Repository from "./Repository";
import "../App.scss";
import { IS_LOADING } from "../lib/ActionTypes";

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
const mapDispatchToProps = (dispatch) => {
  return {
    isLoading: (value) => {
      dispatch({
        type: IS_LOADING,
        payload: value,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PopularCards);
