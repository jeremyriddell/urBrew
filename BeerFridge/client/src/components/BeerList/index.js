import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BeerList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BeerListItem({
  beerName,
  Brewery,
  bottleSize,
  quantity
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{beerName}</h3>
            <h3>{Brewery}</h3>   
          </Col>
        </Row>
      </Container>
    </li>
  );
};
