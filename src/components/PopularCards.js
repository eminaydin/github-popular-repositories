import React from "react";
import { CardGroup, Segment, Container } from "semantic-ui-react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useSelector } from "react-redux";
import Repository from "./Repository";
import "../App.scss";

const PopularCards = () => {
  const popularRepos = useSelector((state) => state.popularRepos);
  const loading = useSelector((state) => state.loading);
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

export default PopularCards;
